import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import { StyleSheet, ScrollView, Image, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";

function Restaurants() {
  let tableData = [
    {
      cells: [
        {
          title: "The Green Bistro",
          tagline: "Smoothies, Salads, £",
          eta: "10-20",
          imgUri: require("./assets/the-green-bistro.jpeg"),
          menu: [
            {
              title: "Smoothies",
              contents: [
                {
                  title: "Green Detox",
                  tagline: "Spinach, kale, banana, and almond milk.",
                  isAvailable: false,
                  imgUri: require("./assets/green-detox.jpeg"),
                },
                {
                  title: "Berry Blast",
                  tagline: "Mixed berries, yogurt, and honey.",
                  isAvailable: true,
                  imgUri: require("./assets/berry-blast.jpeg"),
                },
                {
                  title: "Tropical Twist",
                  tagline: "Pineapple, mango, and coconut water.",
                  isAvailable: true,
                  imgUri: require("./assets/tropical-twist.webp"),
                },
              ],
            },
            {
              title: "Salads",
              contents: [
                {
                  title: "Avocado & Kale Salad",
                  tagline: "Kale, avocado, cranberries, and lemon vinaigrette.",
                  isAvailable: true,
                  imgUri: require("./assets/avocado-and-kale-salad.jpeg"),
                },
                {
                  title: "Quinoa & Veggie Salad",
                  tagline: "Quinoa, roasted veggies, and tahini dressing.",
                  isAvailable: false,
                  imgUri: require("./assets/quinoa-and-veggie-salad.jpeg"),
                },
                {
                  title: "Spinach & Berry Salad",
                  tagline: "Spinach, mixed berries, and walnut dressing.",
                  isAvailable: true,
                  imgUri: require("./assets/spinach-and-berry-salad.jpeg"),
                },
              ],
            },
          ],
        },
        {
          title: "Ocean's Delight",
          tagline: "Soups, Seafood Tacos, ££",
          eta: "15-25",
          imgUri: require("./assets/oceans-delight.jpeg"),
          menu: [
            {
              title: "Soups",
              contents: [
                {
                  title: "Clam Chowder",
                  tagline: "Creamy chowder with clams and potatoes.",
                  isAvailable: true,
                  imgUri: require("./assets/clam-chowder.jpeg"),
                },
                {
                  title: "Lobster Bisque",
                  tagline: "Rich and creamy lobster soup.",
                  isAvailable: true,
                  imgUri: require("./assets/lobster-bisque.jpeg"),
                },
                {
                  title: "Seafood Stew",
                  tagline: "Tomato-based broth with shrimp, clams and mussels.",
                  isAvailable: false,
                  imgUri: require("./assets/seafood-stew.jpeg"),
                },
              ],
            },
            {
              title: "Seafood Tacos",
              contents: [
                {
                  title: "Fish Tacos",
                  tagline: "Grilled fish, slaw, and lime crema.",
                  isAvailable: true,
                  imgUri: require("./assets/fish-tacos.jpeg"),
                },
                {
                  title: "Shrimp Tacos",
                  tagline: "Spicy shrimp, avocado, and salsa.",
                  isAvailable: true,
                  imgUri: require("./assets/shrimp-tacos.jpeg"),
                },
                {
                  title: "Crab Tacos",
                  tagline: "Crab meat, lettuce, and chipotle mayo.",
                  isAvailable: true,
                  imgUri: require("./assets/crab-tacos.jpeg"),
                },
              ],
            },
          ],
        },
        {
          title: "Italian Haven",
          tagline: "Pasta, Pizzas, £££",
          eta: "20-30",
          imgUri: require("./assets/italian-haven.jpeg"),
          menu: [
            {
              title: "Pasta",
              contents: [
                {
                  title: "Spaghetti Carbonara",
                  tagline: "Spaghetti with pancetta, egg, and Parmesan.",
                  isAvailable: true,
                  imgUri: require("./assets/spaghetti-carbonara.jpeg"),
                },
                {
                  title: "Penne Arrabbiata",
                  tagline: "Penne pasta with spicy tomato sauce.",
                  isAvailable: true,
                  imgUri: require("./assets/penne-arrabbiata.jpeg"),
                },
                {
                  title: "Fettuccine Alfredo",
                  tagline: "Fettuccine in a creamy Alfredo sauce.",
                  isAvailable: true,
                  imgUri: require("./assets/fettuccine-alfredo.jpg"),
                },
              ],
            },
            {
              title: "Pizzas",
              contents: [
                {
                  title: "Margherita Pizza",
                  tagline: "Tomato sauce, fresh mozzarella, and basil.",
                  isAvailable: true,
                  imgUri: require("./assets/margherita-pizza.jpeg"),
                },
                {
                  title: "Pepperoni Pizza",
                  tagline: "Tomato sauce, mozzarella, and pepperoni.",
                  isAvailable: true,
                  imgUri: require("./assets/pepperoni-pizza.jpeg"),
                },
                {
                  title: "Vegetarian Pizza",
                  tagline: "Tomato sauce, mozzarella, and mixed vegetables.",
                  isAvailable: true,
                  imgUri: require("./assets/vegetarian-pizza.jpeg"),
                },
              ],
            },
          ],
        },
        {
          title: "Spice Route",
          tagline: "Curries, Breads, £",
          eta: "25-35",
          imgUri: require("./assets/spice-route.webp"),
          menu: [
            {
              title: "Curries",
              contents: [
                {
                  title: "Butter Chicken",
                  tagline: "Tender chicken in a creamy tomato sauce.",
                  isAvailable: true,
                  imgUri: require("./assets/butter-chicken.jpeg"),
                },
                {
                  title: "Lamb Rogan Josh",
                  tagline: "Aromatic lamb curry.",
                  isAvailable: false,
                  imgUri: require("./assets/lamb-rogan-josh.jpeg"),
                },
                {
                  title: "Chickpea Curry",
                  tagline: "Spiced chickpea curry.",
                  isAvailable: true,
                  imgUri: require("./assets/chickpea-curry.jpeg"),
                },
              ],
            },
            {
              title: "Breads",
              contents: [
                {
                  title: "Naan",
                  tagline: "Traditional Indian flatbread.",
                  isAvailable: true,
                  imgUri: require("./assets/naan.webp"),
                },
                {
                  title: "Roti",
                  tagline: "Whole wheat flatbread.",
                  isAvailable: true,
                  imgUri: require("./assets/roti.jpeg"),
                },
                {
                  title: "Paratha",
                  tagline: "Flaky layered flatbread.",
                  isAvailable: false,
                  imgUri: require("./assets/paratha.jpeg"),
                },
              ],
            },
          ],
        },
        {
          title: "Mediterranean Grill",
          tagline: "Grill, Rice Dishes, ££",
          eta: "20-30",
          imgUri: require("./assets/mediterranean-grill.png"),
          menu: [
            {
              title: "Grill",
              contents: [
                {
                  title: "Chicken Souvlaki",
                  tagline: "Grilled chicken skewers with tzatziki.",
                  isAvailable: false,
                  imgUri: require("./assets/chicken-souvlaki.jpeg"),
                },
                {
                  title: "Lamb Kebabs",
                  tagline: "Marinated lamb skewers.",
                  isAvailable: true,
                  imgUri: require("./assets/lamb-kebabs.jpeg"),
                },
                {
                  title: "Grilled Halloumi",
                  tagline: "Grilled cheese with herbs.",
                  isAvailable: true,
                  imgUri: require("./assets/grilled-halloumi.jpeg"),
                },
              ],
            },
            {
              title: "Rice Dishes",
              contents: [
                {
                  title: "Mediterranean Rice",
                  tagline: "Rice with herbs and vegetables.",
                  isAvailable: true,
                  imgUri: require("./assets/mediterranean-rice.jpeg"),
                },
                {
                  title: "Lamb Pilaf",
                  tagline: "Rice with lamb and spices.",
                  isAvailable: true,
                  imgUri: require("./assets/lamb-pilaf.png"),
                },
                {
                  title: "Seafood Paella",
                  tagline: "Rice with mixed seafood and saffron.",
                  isAvailable: true,
                  imgUri: require("./assets/seafood-paella.jpeg"),
                },
              ],
            },
          ],
        },
        {
          title: "The Steakhouse",
          tagline: "Steaks, Sides, £££",
          eta: "30-40",
          imgUri: require("./assets/the-steakhouse.jpeg"),
          menu: [
            {
              title: "Steaks",
              contents: [
                {
                  title: "Ribeye Steak",
                  tagline: "Grilled ribeye with mashed potatoes.",
                  isAvailable: true,
                  imgUri: require("./assets/ribeye-steak.jpeg"),
                },
                {
                  title: "Filet Mignon",
                  tagline: "Tender filet with red wine reduction.",
                  isAvailable: true,
                  imgUri: require("./assets/filet-mignon.jpeg"),
                },
                {
                  title: "T-Bone Steak",
                  tagline: "T-bone steak with a side of asparagus.",
                  isAvailable: true,
                  imgUri: require("./assets/tbone-steak.jpeg"),
                },
              ],
            },
            {
              title: "Sides",
              contents: [
                {
                  title: "Truffle Fries",
                  tagline: "Fries with truffle oil and Parmesan.",
                  isAvailable: true,
                  imgUri: require("./assets/truffle-fries.jpeg"),
                },
                {
                  title: "Grilled Asparagus",
                  tagline: "Asparagus with lemon and olive oil.",
                  isAvailable: true,
                  imgUri: require("./assets/grilled-asparagus.jpeg"),
                },
                {
                  title: "Mac and Cheese",
                  tagline: "Creamy mac and cheese with cheddar.",
                  isAvailable: true,
                  imgUri: require("./assets/mac-and-cheese.jpeg"),
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const navigation = useNavigation();

  const HomeScreenCell = (props) => (
    <Cell
      backgroundColor="transparent"
      onPress={() =>
        navigation.navigate("Menu", {
          restaurantData: tableData[0].cells[props.id],
        })
      }
      cellAccessoryView={
        <View style={styles.restaurantCell}>
          <Image style={styles.restaurantImage} source={props.imgUri} />
          <Text style={styles.restaurantTitle}>{props.title}</Text>
          <Text style={styles.restaurantTagline}>{props.tagline}</Text>
          <View style={styles.restaurantEtaView}>
            <Text style={styles.restaurantEtaText}>{props.eta}</Text>
            <Text style={[styles.restaurantEtaText, styles.restaurantEtaMins]}>
              mins
            </Text>
          </View>
        </View>
      }
    />
  );

  return (
    <View>
      <ScrollView>
        <TableView>
          {tableData.map((section, i) => (
            <Section key={i} hideSeparator="true" separatorTintColor="#ccc">
              {section.cells.map((cell, j) => (
                <HomeScreenCell
                  key={j}
                  id={j}
                  imgUri={cell.imgUri}
                  title={cell.title}
                  tagline={cell.tagline}
                  eta={cell.eta}
                />
              ))}
            </Section>
          ))}
        </TableView>
      </ScrollView>
    </View>
  );
}

function Menu() {
  const navigation = useNavigation();
  const route = useRoute();
  const restaurantData = route.params.restaurantData;
  console.log(restaurantData);
  const [addedItems, setAddedItems] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: restaurantData.title,
    });
  }, [navigation, restaurantData.title]);

  const MenuCell = (props) => (
    <Cell
      backgroundColor="#fff"
      onPress={() => {
        if (props.isAvailable) {
          if (addedItems.includes(props.title)) {
            setAddedItems(addedItems.filter((item) => item != props.title));
          } else {
            setAddedItems([...addedItems, props.title]);
          }
        }
      }}
      cellAccessoryView={
        <View style={styles.menuCell}>
          <Image style={styles.menuImage} source={props.imgUri} />
          <View style={styles.menuColumn2}>
            <Text style={styles.menuTitle}>{props.title}</Text>
            <Text style={styles.menuTagline}>{props.tagline}</Text>
          </View>
          <View style={styles.menuColumn3}>
            {!props.isAvailable && (
              <Text style={styles.menuOutOfStock}>Out of stock</Text>
            )}
            {addedItems.includes(props.title) && (
              <Text style={styles.menuItemAdded}>Item added!</Text>
            )}
          </View>
        </View>
      }
    />
  );

  return (
    <View>
      <ScrollView>
        <TableView>
          {route.params.restaurantData.menu.map((section, i) => (
            <Section
              key={i}
              separatorTintColor="#ccc"
              separatorInsetLeft="0"
              header={section.title}
              headerTextColor="#808080"
            >
              {section.contents.map((cell, j) => (
                <MenuCell
                  key={j}
                  title={cell.title}
                  tagline={cell.tagline}
                  isAvailable={cell.isAvailable}
                  imgUri={cell.imgUri}
                />
              ))}
            </Section>
          ))}
        </TableView>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: "Restaurants", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: "Menu", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  restaurantCell: {
    width: "100%",
    height: 290,
    backgroundColor: "transparent",
    marginLeft: 2,
  },

  restaurantImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  restaurantTitle: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },

  restaurantTagline: {
    marginTop: 5,
    fontSize: 14,
  },

  restaurantEtaView: {
    width: 100,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    marginTop: 170,
    marginRight: 20,
  },

  restaurantEtaText: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },

  restaurantEtaMins: {
    marginTop: -5,
  },

  menuCell: {
    width: "100%",
    flexDirection: "row",
  },

  menuImage: {
    width: "25%",
    height: 100,
  },

  menuColumn2: {
    padding: 5,
    width: "60%",
  },

  menuTitle: {
    fontSize: 16,
  },

  menuTagline: {
    color: "#808080",
  },

  menuColumn3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "15%",
  },

  menuOutOfStock: {
    color: "#FF3333",
    textAlign: "center",
  },

  menuItemAdded: {
    color: "#06BA63",
    textAlign: "center",
  },
});

export default App;
