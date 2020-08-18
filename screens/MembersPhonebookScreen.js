import React from "react";
import { View, Text } from "react-native";
import AlphabetSectionList from "../AlphabetSectionList/src/AlphabetSectionList";
import { TouchableOpacity } from "react-native-gesture-handler";
import members from "../Data/membersScroll";

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        marginLeft: 10,
        paddingVertical: 10,
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.5,
      }}
    >
      <TouchableOpacity onPress={() => {}}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
const renderHeader = () => {
  return (
    <View>
      <Text>header1</Text>
      <Text>header2</Text>
    </View>
  );
};
const renderSectionHeader = ({ section: { title } }) => {
  return (
    <View
      style={{
        paddingLeft: 10,
        backgroundColor: "#f1f2f3",
        paddingVertical: 5,
      }}
    >
      <Text style={{ color: "blue" }}>{title}</Text>
    </View>
  );
};
const MembersPhonebookScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AlphabetSectionList
        data={members}
        renderItem={renderItem}
        // renderHeader={this.renderHeader}
        // custom section header
        renderSectionHeader={renderSectionHeader}
        // default section header styles
        // sectionHeaderStyle={{ paddingVertical: 5 }}
        // sectionHeaderTextStyle={{ fontSize: 16, color: "blue" }}
      />
    </View>
  );
};

export default { MembersPhonebookScreen, renderItem };
