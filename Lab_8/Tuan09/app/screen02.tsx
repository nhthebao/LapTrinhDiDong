import { faCheckCircle, faPenToSquare, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { clearTasks, createTable, getTasks, insertTask } from "./database";

const API_URL = "https://68e6175321dd31f22cc41c7a.mockapi.io/todo";

export default function Task() {
  const router = useRouter();
  const { name } = useLocalSearchParams<{ name: string }>();
  const searchRef = useRef<TextInput | null>(null);

  const [tasks, setTasks] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  
  const syncData = useCallback(async () => {
    try {
      setLoading(true);
      const localData = getTasks();

      if (localData && localData.length > 0 && !refreshing) {
        console.log("📦 Dùng dữ liệu từ SQLite");
        setTasks(localData);
        setLoading(false);
        return;
      }

      const res = await fetch(API_URL);
      const data = await res.json();

      clearTasks();
      data.forEach((t : any) => insertTask(t.id, t.name));

      setTasks(data);
    } catch (err) {
      console.error("❌ Lỗi sync dữ liệu:", err);
      const localData = getTasks();
      setTasks(localData);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [refreshing]);

  useEffect(() => {
    createTable();
    syncData();
  }, [syncData]);

  useFocusEffect(
    useCallback(() => {
      syncData();
    }, [syncData])
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    syncData();
  }, [syncData]);

  const handleSearch = useCallback(() => {
    if (!search.trim()) {
      syncData();
      return;
    }
    const filtered = tasks.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase())
    );
    setTasks(filtered);
    searchRef.current?.clear();
  }, [search, tasks, syncData]);

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#00BDD5" />
        <Text style={{ marginTop: 8 }}>Đang tải dữ liệu...</Text>
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header chào user */}
      <View style={styles.header}>
        <Image source={require("../assets/avt.png")} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Hi {name}</Text>
          <Text style={{ color: "gray" }}>Have a great day ahead!</Text>
        </View>
      </View>

      {/* Ô tìm kiếm */}
      <View style={styles.searchBox}>
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesomeIcon icon={faSearch} size={20} color="#000" />
        </TouchableOpacity>
        <TextInput
          ref={searchRef}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor="rgba(0,0,0,0.3)"
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={memoizedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size={20}
                color="#00BDD5"
                style={{ marginRight: 8 }}
              />
              <Text>{item.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push(`/add?id=${item.id}&name=${item.name}`)}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                size={20}
                color="white"
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      {/* Nút thêm công việc */}
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/add")}
        >
          <FontAwesomeIcon icon={faPlus} size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// 🎨 STYLE
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  greeting: { fontSize: 18, fontWeight: "bold" },
  searchBox: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: { flex: 1, paddingVertical: 8, marginLeft: 8 },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E5E8EA",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  editIcon: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: "#00BDD5",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
