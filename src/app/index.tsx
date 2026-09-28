import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.greeting}>Good Morning </Text>
      <Text style={styles.name}>Hi, Markron </Text>

      <TextInput
        style={styles.search}
        placeholder="Search..."
      />

      <Text style={styles.section}>Featured</Text>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Welcome!</Text>
        <Text style={styles.bannerText}>
          Build beautiful apps with React Native.
        </Text>
      </View>

      <Text style={styles.section}>Categories</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.category}>
          <Text>Mobile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text>Web</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text>Design</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.section}>Popular</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>React Native Basic</Text>
        <Text>Beginner</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>JavaScript Essentials</Text>
        <Text>Intermediate</Text>
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
  },

  greeting: {
    fontSize: 18,
    color: "#666",
    marginTop: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  search: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  section: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },

  banner: {
    backgroundColor: "#4A90E2",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  bannerText: {
    color: "#fff",
    marginTop: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  category: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});