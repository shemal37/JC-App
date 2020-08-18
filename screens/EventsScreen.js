import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as React from "react";
import EventsComponent from "../components/EventsComponent";

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <EventsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
