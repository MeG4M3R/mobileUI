import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { formatBalance, type Account } from "../utils/account";

type AccountCardProps = {
  account: Account;
  isLast?: boolean;
};

export default function AccountCard({
  account,
  isLast = false,
}: AccountCardProps) {
  return (
    <View style={[styles.row, isLast && styles.lastRow]}>
      <View style={styles.details}>
        <Text style={styles.name}>{account.name}</Text>
        <Text style={styles.number}>{account.accountNumber}</Text>
      </View>
      <Text style={styles.balance}>{formatBalance(account.balance)}</Text>
    </View>
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