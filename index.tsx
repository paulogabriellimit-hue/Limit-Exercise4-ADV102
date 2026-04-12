import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const apps = [
  "Camera", "Phone", "Messages", "Browser",
  "Gallery", "Music", "Settings", "Maps",
  "Store", "Email", "Games", "Health"
];

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#2c2c54", "#706fd3"]}
      style={styles.container}
    >
      {/* Time */}
      <Text style={styles.time}>19:54</Text>
      <Text style={styles.date}>Saturday, February 28</Text>

      {/* Status */}
      <View style={styles.statusRow}>
        <Text style={styles.status}>🌤 31°C</Text>
        <Text style={styles.status}>🔋 72%</Text>
        <Text style={styles.status}>📶 4G</Text>
      </View>

      {/* Apps Grid */}
      <FlatList
        data={apps}
        numColumns={4}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.appBox}>
            <View style={styles.icon} />
            <Text style={styles.appText}>{item}</Text>
          </View>
        )}
      />

      {/* Dock */}
      <View style={styles.dock}>
        <Text style={styles.dockItem}>📞</Text>
        <Text style={styles.dockItem}>💬</Text>
        <Text style={styles.dockItem}>🌐</Text>
        <Text style={styles.dockItem}>📷</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  time: {
    fontSize: 48,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  date: {
    textAlign: "center",
    color: "#ddd",
    marginBottom: 10,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  status: {
    color: "#fff",
    fontSize: 14,
  },
  grid: {
    paddingHorizontal: 20,
  },
  appBox: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 5,
  },
  appText: {
    color: "#fff",
    fontSize: 12,
  },
  dock: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  dockItem: {
    fontSize: 24,
  },
});
