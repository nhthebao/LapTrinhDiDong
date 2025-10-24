import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { Image, Pressable, StatusBar, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const router = useRouter();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Image source={require("../assets/page1.png")} />
      </View>

      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Text style={{ color: "#8353E2", fontSize: 26, fontWeight: "bold" }}>
          MANAGE YOUR TASK
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 40, alignItems: "center" }}>
        <FontAwesome name="envelope" size={14} color="black" style={{ position: "relative", left: 28 }} />
        <TextInput
          placeholder="Enter your name"
          style={{
            height: 40,
            width: 300,
            borderWidth: 1,
            paddingLeft: 36,
            color: "gray",
            borderColor: "gray",
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 80, alignItems: "center" }}>
        <Pressable
          style={{
            height: 40,
            width: 180,
            backgroundColor: "#00BDD6",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => router.push("/screen02")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            GET STARTED <FontAwesome name="long-arrow-right" color="white" size={16} />
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
