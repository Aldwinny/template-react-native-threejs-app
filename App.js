/**
 * The following imports are for Navigation.
 * Check https://reactnavigation.org/docs/getting-started
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**
 * SafeAreaProvider & GestureHandlerRootView is a dependency for most of the libraries used in this application.
 * SafeAreaProvider also offers a convenient way to handle the Safe Area of the app.
 */
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

/**
 * The following import is for the use of React Native Paper components
 * Check https://callstack.github.io/react-native-paper/4.0/getting-started.html
 */
import { Provider as PaperProvider, TouchableRipple } from "react-native-paper";

/**
 * The following imports are related to Redux and Redux persist for State Management
 * of potentially persistent data. Example would be Theme data.
 *
 * Note: Do not use Redux/Persist on large data since it may the application to lag.
 */
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Text, View } from "react-native";
import { useState } from "react";

/**
 * This is the first function to be executed.
 *
 * The App function should only contain dependencies and libraries plus the navigator on use.
 *
 */
export default function App() {
  global.debug = false;

  // Changes the state of the screen
  const [color, setColor] = useState("blue");
  const colorSelection = ["red", "yellow", "blue", "green", "gray", "slate"];

  return (
    <GestureHandlerRootView className="flex-1">
      <PaperProvider>
        <SafeAreaProvider>
          {/* <NavigationContainer>*/}
          <TouchableRipple
            className={`flex-1 h-full items-center justify-center bg-${color}-400`}
            onPress={() => {
              let random = Math.floor(Math.random() * colorSelection.length);
              setColor(colorSelection[random]);
            }}
          >
            <Text className="text-center mx-3">
              Insert Your NavigatorContainer and Preferred Navigator here.
              Color: {color}
            </Text>
          </TouchableRipple>

          {/*</NavigationContainer> */}
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
