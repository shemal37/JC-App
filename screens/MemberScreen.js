import { StyleSheet, FlatList, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as React from "react";
import MembersStyle from "../components/MembersComponent";

export default function MemberScreen({ member }) {
  return (
    <View style={styles.container}>
      <MembersStyle member={member} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
