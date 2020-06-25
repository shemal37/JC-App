import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tileContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Jobs")}>
          <Text style={styles.tile}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Events")}>
          <Text style={styles.tile}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Business")}>
          <Text style={styles.tile}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Members")}>
          <Text style={styles.tile}>Members</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Test")}>
          <Text style={styles.tile}>Test</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 10,
  },
  tile: {
    color: "white",
    backgroundColor: "gray",
    // height: 100,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
    padding: 40,
    margin: 10,
    overflow: "hidden",
  },
  tileContainer: {},
});
