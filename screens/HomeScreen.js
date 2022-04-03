import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={tw`text-red-600`}>HomeScreen</Text>
      </View>
      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;
