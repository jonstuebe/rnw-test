import { ExclamationCircleOutline } from "@smartrent/icons";
import {
  Banner,
  BannerActions,
  BannerIcon,
  useTheme,
  VStack,
} from "@smartrent/ui";
import { View } from "react-native";

function App() {
  const { colors, spacing } = useTheme();

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
