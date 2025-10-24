import { useLocalSearchParams, useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";
import { createTable, insertTask } from "./database";

export default function AddScreen() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams<{ id?: string; name?: string }>();
  const inputRef = useRef<TextInput | null>(null);
  const [value, setValue] = useState(name || "");

  // đảm bảo bảng tồn tại
  createTable();

  const handleSave = () => {
    if (!value.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập công việc");
      return;
    }

    try {
      const newId = id || uuid.v4().toString();
      insertTask(newId, value);
      router.back();
    } catch (error) {
      console.error(error);
      Alert.alert("Lỗi", "Không thể lưu dữ liệu");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <Text style={styles.title}>{id ? "Edit" : "Add"} your job</Text>

      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={setValue}
            placeholder="Input your job"
            placeholderTextColor="rgba(0,0,0,0.3)"
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.btnText}>Finish →</Text>
      </TouchableOpacity>

      <View style={{ alignItems: "center", marginTop: 70 }}>
        <Image
          style={{ width: 200, height: 200 }}
          // source={require("../assets/Image95.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 40,
  },
  row: { flexDirection: "row", alignItems: "center", paddingHorizontal: 5 },
  input: { paddingHorizontal: 15, paddingVertical: 10, width: "100%" },
  button: {
    backgroundColor: "#00BDD5",
    padding: 10,
    borderRadius: 10,
    width: 200,
    alignSelf: "center",
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
