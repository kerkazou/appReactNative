# 🍽️ Meals App

Meals App is a simple mobile application built with **React Native** and **TypeScript** that allows users to browse meals, filter them, and view detailed information about each meal.

The application retrieves meals from an API, assigns a price to each meal, and displays them in a clean and user-friendly list format. Users can filter meals by **name** and **price range**, navigate through pages, and open a **meal detail page** for more information.

---

## 📱 Screenshots

### 🔹 Meals List Screen
Shows a list of meals with name, image, short description, price, and filters at the top.

![Meals List](./src/assets/screenshots/MealList.jpg)

### 🔹 Meal Detail Screen
Displays the selected meal with a larger image, price, and full preparation instructions.

![Meal Detail](./src/assets/screenshots/MealDetail.jpg)

---

## ✨ Features

- Fetch and display meals from an API
- Filter meals by:
  - **Name**
  - **Minimum price**
  - **Maximum price**
- Pagination with **Next** / **Previous** buttons
- View complete details of a selected meal
- Modern and clean UI layout

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React Native** | Mobile UI framework |
| **TypeScript** | Strong typing support |
| **React Navigation** | Screen navigation |
| **Fetch API** | Data fetching from API |
| **React Hooks** | State and effect management |

---

## 🚀 Installation & Run

```bash
git clone <your-repository-link>
cd mobile
npm install
npm run android   # or npm run ios
