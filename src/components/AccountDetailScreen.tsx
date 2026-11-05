import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import { formatBalance, type Account } from "../utils/account";

type AccountDetailScreenProps = {
  account: Account;
};

export default function AccountDetailScreen({
  account,
}: AccountDetailScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back to accounts"
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.backText}>‹ My Accounts</Text>
        </Pressable>

        <Text style={styles.title}>{account.name}</Text>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available balance</Text>
          <Text style={styles.balance}>{formatBalance(account.balance)}</Text>
          <Text style={styles.accountNumber}>
            Account number  •••• {account.accountNumber.slice(-4)}
          </Text>
        </View>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderTitle}>Account details</Text>
          <Text style={styles.placeholderText}>
            Account activity and features will be added here.
          </Text>
        </View>
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
    padding: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingRight: 12,
    marginBottom: 24,
  },
  backText: {
    color: COLORS.accent,
    fontSize: 17,
    fontWeight: "600",
  },
  title: {
    color: COLORS.white,
    fontSize: 23,
    lineHeight: 30,
    fontWeight: "700",
    marginBottom: 20,
  },
  balanceCard: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  balanceLabel: {
    color: COLORS.lightGray,
    fontSize: 14,
  },
  balance: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "700",
    marginTop: 8,
  },
  accountNumber: {
    color: COLORS.lightGray,
    fontSize: 14,
    marginTop: 14,
  },
  placeholder: {
    marginTop: 20,
    backgroundColor: COLORS.darkGray,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  placeholderTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  placeholderText: {
    color: COLORS.lightGray,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
