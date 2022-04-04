import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    title: "Awareness",
    image: "http://clipart-library.com/images/gTeEeygnc.png",
    screen: "AwareScreen",
  },
  {
    id: "456",
    title: "Stop Watch",
    image: "http://clipart-library.com/images/BigE5M4AT.png",
    screen: "StopWatchScreen", // Change in future...
  },
];
// Navigate to different functionality
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      style={tw`flex`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 rounded-xl bg-gray-200 m-4 mt-48 w-40`}
        >
          <View>
            <Image
              style={{ width: 100, height: 140, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
