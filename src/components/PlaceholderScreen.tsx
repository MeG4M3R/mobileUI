import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";

type PlaceholderScreenProps = {
  title: string;
  message: string;
  icon?: string;
};

export default function PlaceholderScreen({
  title,
  message,
  icon,
}: PlaceholderScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        {icon ? <Text style={styles.icon}>{icon}</Text> : null}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 28,
  },
  icon: {
    color: COLORS.accent,
    fontSize: 40,
    marginBottom: 16,
  },
  title: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
  message: {
    color: COLORS.lightGray,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 10,
  },
});
