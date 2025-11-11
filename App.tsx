import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealList from "./src/components/MealList";
import MealDetail from "./src/components/MealDetail";
import { Meal } from "./src/components/MealCard";

export type RootStackParamList = {
  MealList: undefined;
  MealDetail: { meal: Meal };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MealList">
        <Stack.Screen name="MealList" component={MealList} options={{ title: "Meals" }} />
        <Stack.Screen name="MealDetail" component={MealDetail} options={{ title: "Meal Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
