import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MembersStyle = ({ member }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>Name: {member.name}</Text>
      <Text style={styles.title}>Age: {member.age}</Text>
      <Text style={styles.title}>Phone: {member.phone}</Text>
      <Text style={styles.title}>Email: {member.email}</Text>
      <Text style={styles.title}>Address: {member.address}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#a3c4fa",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
});

export default MembersStyle;
