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
    marginBottom: 10,
    width: 200,
    height: 100,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 15,
    alignSelf: "center",
    textAlign: "center",
    padding: 40,
  },
  tileContainer: {},
});
