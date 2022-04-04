import HomeScreen from "./screens/HomeScreen";
import AwareScreen from "./screens/AwareScreen";
import StopWatchScreen from "./screens/StopWatchScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AwareScreen"
            component={AwareScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StopWatchScreen"
            component={StopWatchScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
