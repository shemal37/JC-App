import { StyleSheet, FlatList, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as React from "react";
import members from "../Data/members";
import MembersStyle from "../components/MembersComponent";

export default function MemberScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        renderItem={({ item }) => <MembersStyle member={item}></MembersStyle>}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
