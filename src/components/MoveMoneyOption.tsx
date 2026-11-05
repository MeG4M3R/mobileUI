import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

type MoveMoneyOptionProps = {
  icon: string;
  title: string;
  description: string;
  italicTitle?: boolean;
  isLast?: boolean;
};

export default function MoveMoneyOption({
  icon,
  title,
  description,
  italicTitle = false,
  isLast = false,
}: MoveMoneyOptionProps) {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.icon}>{icon}</Text>
        <View style={styles.copy}>
          <Text style={[styles.title, italicTitle && styles.italicTitle]}>
            {title}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </View>
      {!isLast ? <View style={styles.divider} /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 86,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  divider: {
    height: 1,
    marginLeft: 40,
    backgroundColor: COLORS.divider,
  },
  icon: {
    width: 28,
    color: COLORS.accent,
    fontSize: 36,
    textAlign: "center",
    fontWeight: "400",
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    color: COLORS.white,
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
  },
  italicTitle: {
    fontStyle: "italic",
  },
  description: {
    color: COLORS.lightGray,
    fontSize: 15,
    lineHeight: 21,
    marginTop: 2,
  },
  chevron: {
    color: "#A8A8A8",
    fontSize: 32,
    lineHeight: 36,
    marginLeft: 2,
  },
});
