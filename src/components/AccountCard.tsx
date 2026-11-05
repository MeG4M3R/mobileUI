import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { formatBalance, type Account } from "../utils/account";

type AccountCardProps = {
  account: Account;
  isLast?: boolean;
  onPress?: (account: Account) => void;
};

export default function AccountCard({
  account,
  isLast = false,
  onPress,
}: AccountCardProps) {
  const content = (
    <>
      <View style={styles.details}>
        <Text style={styles.name}>{account.name}</Text>
        <Text style={styles.number}>{account.accountNumber}</Text>
      </View>
      <Text style={styles.balance}>{formatBalance(account.balance)}</Text>
    </>
  );
  const rowStyle = [styles.row, isLast && styles.lastRow];

  if (!onPress) {
    return <View style={rowStyle}>{content}</View>;
  }

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress(account)}
      style={({ pressed }) => [rowStyle, pressed && styles.pressed]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 112,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    gap: 12,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  pressed: {
    opacity: 0.75,
  },
  details: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    color: COLORS.accent,
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
  },
  number: {
    color: COLORS.lightGray,
    fontSize: 13,
    marginTop: 4,
    letterSpacing: 0.3,
  },
  balance: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
  },
});