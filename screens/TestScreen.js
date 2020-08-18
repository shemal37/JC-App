import React from "react";
import { View, Text } from "react-native";
import AlphabetSectionList from "react-native-alphabet-sectionlist";
import members from "../Data/membersScroll";
import { TouchableOpacity } from "react-native-gesture-handler";

const TestSc = ({ item, onClick }) => {
  return (
    <View
      style={{
        marginLeft: 10,
        paddingVertical: 10,
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.5,
      }}
    >
      <TouchableOpacity onPress={onClick}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const TestCo = ({ item }) => {
  return (
    <View
      style={{
        marginLeft: 10,
        paddingVertical: 10,
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.5,
      }}
    >
      <Text style={{ color: "red", fontSize: 20 }}>{item.name}</Text>
    </View>
  );
};

const onClick = () => {
  this.setState((state) => {
    bool: !state.bool;
  });
};

class TestScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bool: true };
  }

  renderItem = ({ item }) => {
    return this.state.bool ? (
      <TestSc
        item={item}
        onClick={() =>
          this.setState((state) => {
            console.log("his");
            console.log(state);
            bool: !state.bool;
          })
        }
      />
    ) : (
      <TestCo item={item} bool={false} />
    );
    // return <TestSc item={item} />;
  };

  renderHeader = () => {
    return (
      <View>
        <Text>header1</Text>
        <Text>header2</Text>
      </View>
    );
  };

  renderSectionHeader = ({ section: { title } }) => {
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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AlphabetSectionList
          data={members}
          renderItem={this.renderItem}
          renderHeader={this.renderHeader}
          // custom section header
          renderSectionHeader={this.renderSectionHeader}
          // default section header styles
          // sectionHeaderStyle={{ paddingVertical: 5 }}
          // sectionHeaderTextStyle={{ fontSize: 16, color: 'blue' }}
        />
      </View>
    );
  }
}

export default TestScreen;
