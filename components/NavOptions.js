import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

// Navigate to different functionality
const NavOptions = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        onPress={() => navigation.navigate("AwareScreen")}
      >
        <Text>Aware</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
        <Text>Stop watch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavOptions;
