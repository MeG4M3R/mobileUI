import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

type ActionCardProps = {
  label: string;
  icon: string;
};

export default function ActionCard({ label, icon }: ActionCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 28,
    backgroundColor: COLORS.darkGray,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    color: COLORS.accent,
    fontSize: 21,
    fontWeight: "700",
  },
  label: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
});