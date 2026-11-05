import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

type MoreMenuItem = {
  id: string;
  icon: string;
  label: string;
};

type MoreMenuSectionProps = {
  title: string;
  items: MoreMenuItem[];
};

export default function MoreMenuSection({
  title,
  items,
}: MoreMenuSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>
        {items.map((item, index) => (
          <View key={item.id}>
            <View style={styles.row}>
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
            {index < items.length - 1 ? <View style={styles.divider} /> : null}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 38,
  },
  sectionTitle: {
    color: COLORS.lightGray,
    fontSize: 16,
    marginBottom: 18,
  },
  card: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 15,
    paddingHorizontal: 16,
    overflow: "hidden",
  },
  row: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  icon: {
    width: 44,
    color: COLORS.accent,
    fontSize: 32,
    textAlign: "center",
  },
  label: {
    flex: 1,
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
  chevron: {
    color: "#A8A8A8",
    fontSize: 32,
    lineHeight: 36,
    paddingRight: 2,
  },
  divider: {
    height: 1,
    marginLeft: 58,
    backgroundColor: COLORS.divider,
  },
});
