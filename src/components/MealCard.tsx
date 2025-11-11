import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MealCardProps {
  meal: Meal;
  onPress?: () => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onPress }) => {
  return (
    <TouchableOpacity style={styles?.card} onPress={onPress}>
      <Image source={{ uri: meal?.image }} style={styles?.image} />
      <View style={styles?.info}>
        <Text style={styles?.name}>{meal.name}</Text>
        <Text style={styles?.description}>{meal.description.substring(0, 60) + "..."}</Text>
        <Text style={styles?.price}>{meal.price} DH</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2e8b57",
  },
});

export default MealCard;
