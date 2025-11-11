import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";
import MealCard, { Meal } from "./MealCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";

const PAGE_SIZE = 5;

const MealList: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const data = await response.json();
      const formattedMeals: Meal[] = data.meals.map((item: any) => ({
        id: item.idMeal,
        name: item.strMeal,
        description: item.strInstructions,
        price: (Math.floor(Math.random() * 20) + 5).toFixed(2),
        image: item.strMealThumb,
      }));
      setMeals(formattedMeals);
      setFilteredMeals(formattedMeals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const applyFilter = () => {
    let filtered = meals;
    if (nameFilter) {
      filtered = filtered.filter((meal) =>
        meal.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    if (minPrice) {
      filtered = filtered.filter((meal) => parseFloat(meal.price) >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((meal) => parseFloat(meal.price) <= parseFloat(maxPrice));
    }
    setFilteredMeals(filtered);
    setPage(1);
  };

  const totalPages = Math.ceil(filteredMeals.length / PAGE_SIZE);
  const paginatedMeals = filteredMeals.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#2e8b57" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Filters */}
      <View style={styles.filterContainer}>
        <TextInput
          placeholder="Search by name"
          value={nameFilter}
          onChangeText={setNameFilter}
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Min price"
          value={minPrice}
          onChangeText={setMinPrice}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Max price"
          value={maxPrice}
          onChangeText={setMaxPrice}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#999"
        />
        <Button title="Apply Filter" onPress={applyFilter} color="#2e8b57" />
      </View>

      {/* Meals List */}
      <FlatList
        data={paginatedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealCard
          meal={item}
          onPress={() => navigation.navigate("MealDetail", { meal: item })}
        />}
        contentContainerStyle={{ paddingVertical: 8 }}
        ListEmptyComponent={() => <Text style={styles.empty}>No meals found</Text>}
      />

      {/* Pagination Buttons */}
      <View style={styles.pagination}>
        <Button
          title="Previous"
          onPress={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        />
        <Text style={styles.pageText}>
          {page} / {totalPages || 1}
        </Text>
        <Button
          title="Next"
          onPress={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages || totalPages === 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  filterContainer: {
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  input: {
    color: "#000",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    margin: 5,
    marginVertical: 4,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  pageText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MealList;
