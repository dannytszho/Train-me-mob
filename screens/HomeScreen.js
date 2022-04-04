import { SafeAreaView, Text } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Train Me</Text>
      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;
