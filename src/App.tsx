import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text aria-level={1} role="heading">
          Hello World
        </Text>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
