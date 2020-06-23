import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import BusinessScreen from "./screens/BusinessScreen";
import JobsScreen from "./screens/JobsScreen";
import MembersScreen from "./screens/MembersScreen";
import EventsScreen from "./screens/EventsScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jobs" component={JobsScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Members" component={MembersScreen} />
        <Stack.Screen name="Business" component={BusinessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
