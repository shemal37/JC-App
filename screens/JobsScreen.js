import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as React from "react";

export default function JobsScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello from Jobs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
