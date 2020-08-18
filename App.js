import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import BusinessScreen from "./screens/BusinessScreen";
import JobsScreen from "./screens/JobsScreen";
import MemberScreen from "./screens/MemberScreen";
import EventsScreen from "./screens/EventsScreen";
import Members from "./screens/MembersPhonebookScreen";
import TestScreen from "./screens/TestScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jobs" component={JobsScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Business" component={BusinessScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen
          name="MembersPhonebook"
          component={Members.MembersPhonebookScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
