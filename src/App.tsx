import { ExclamationCircleOutline } from "@smartrent/icons";
import {
  Banner,
  BannerActions,
  BannerIcon,
  useTheme,
  VStack,
} from "@smartrent/ui";
import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
function App() {
  const { colors, spacing } = useTheme();

  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    opacity.value = withDelay(500, withSpring(1, { damping: 12 }));
  }, [opacity]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.pageBackground,
      }}
    >
      <VStack spacing={spacing.md} style={{ maxWidth: 448 }}>
        <Animated.View style={animatedStyle}>
          <View style={{ height: 100, width: 100, backgroundColor: "red" }} />
        </Animated.View>
        <Banner
          title="Your hub connection is not stable"
          leftDetail={<BannerIcon icon={ExclamationCircleOutline} />}
          bottomDetail={
            <BannerActions
              actions={[
                {
                  label: "Connect",
                  onPress: () => {
                    alert("connect action triggered");
                  },
                },
                {
                  label: "Dismiss",
                  onPress: () => {
                    alert("dismiss action triggered");
                  },
                },
              ]}
            />
          }
          onClose={() => {
            alert("Banner onClose triggered");
          }}
          color="success"
        >
          Please connect to Wi-Fi or Ethernet network for the best experience.
        </Banner>
      </VStack>
    </View>
  );
}

export default App;
