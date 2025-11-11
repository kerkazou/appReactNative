import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetail: React.FC<Props> = ({ route }) => {
  const { meal } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: meal.image }} style={styles.image} />
      <Text style={styles.name}>{meal.name}</Text>
      <Text style={styles.price}>{meal.price} DH</Text>
      <Text style={styles.description}>{meal.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: "center" },
  image: { width: 250, height: 250, borderRadius: 12, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 8, color: "#000", },
  price: { fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#2e8b57", },
  description: { fontSize: 16, color: "#555", textAlign: "center" },
});

export default MealDetail;
