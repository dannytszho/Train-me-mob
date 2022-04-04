import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const StopWatchScreen = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);
  return (
    <View>
      <Text>StopWatchScreen</Text>
    </View>
  );
};

export default StopWatchScreen;

const styles = StyleSheet.create({});
