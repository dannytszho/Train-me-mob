import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";

const screen = Dimensions.get("window");

// color list
const COLORS = ["bg-yellow-400", "bg-blue-600", "bg-red-600"];

const AwareScreen = () => {
  const [color, setColor] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((c) => (c === 2 ? 0 : c + 1));
      setNumber(Math.floor(Math.random() * 10 + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={tw`flex w-full h-full ${COLORS[color]}`}>
      <Text style={[tw`text-center m-auto`, styles.text]}>{number}</Text>
    </View>
  );
};

export default AwareScreen;

const styles = StyleSheet.create({
  text: {
    borderWidth: 15,
    fontSize: 230,
    width: screen.width / 1.2,
    height: screen.width / 1.2,
    borderRadius: screen.width / 2,
  },
});
