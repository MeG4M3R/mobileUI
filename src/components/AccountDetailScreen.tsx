import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionCard from "./ActionCard";
import { COLORS } from "../constants/colors";
import { QUICK_ACTIONS } from "../data/quickActions";
import { getAccountTransactions } from "../data/accountTransactions";
import { formatBalance, type Account } from "../utils/account";

type AccountDetailScreenProps = {
  account: Account;
};

export default function AccountDetailScreen({
  account,
}: AccountDetailScreenProps) {
  const transactions = getAccountTransactions(account.id, account.balance);
  const groupedTransactions = transactions.reduce<
    { date: string; transactions: typeof transactions }[]
  >((groups, transaction) => {
    const lastGroup = groups[groups.length - 1];
    if (lastGroup?.date === transaction.date) {
      lastGroup.transactions.push(transaction);
    } else {
      groups.push({ date: transaction.date, transactions: [transaction] });
    }
    return groups;
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back to accounts"
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.backIcon}>‹</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Banking</Text>
          <View style={styles.topBarSpacer} />
        </View>

        <View style={styles.accountHeader}>
          <Text style={styles.accountNumber}>{account.accountNumber}</Text>
          <Text style={styles.accountName}>{account.name}</Text>
          <Text style={styles.balance}>{formatBalance(account.balance)}</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.actions}
          contentContainerStyle={styles.actionContent}
        >
          {QUICK_ACTIONS.map((action) => (
            <ActionCard
              key={action.id}
              label={action.label}
              icon={action.icon}
            />
          ))}
        </ScrollView>

        <View style={styles.sectionTabs}>
          {(["Activity", "Details", "Manage"] as const).map((label, index) => {
            const isActive = index === 0;

            return (
              <View
                key={label}
                style={[styles.sectionTab, isActive && styles.sectionTabActive]}
              >
                <Text
                  style={[
                    styles.sectionTabText,
                    isActive && styles.sectionTabActiveText,
                  ]}
                >
                  {label}
                </Text>
              </View>
            );
          })}
        </View>

        <View style={styles.transactionsHeading}>
          <Text style={styles.transactionsTitle}>Transactions</Text>
          <View style={styles.headingActions}>
            <View style={styles.headingAction}>
              <Text style={styles.headingActionIcon}>▣</Text>
            </View>
            <View style={styles.headingAction}>
              <Text style={styles.headingActionIcon}>⌕</Text>
            </View>
          </View>
        </View>

        <View style={styles.transactionCard}>
          {groupedTransactions.map((group) => (
            <View key={group.date}>
              <Text style={styles.dateHeading}>{group.date}</Text>
              {group.transactions.map((transaction, index) => (
                <View
                  key={transaction.id}
                  style={[
                    styles.transactionRow,
                    index === group.transactions.length - 1 &&
                      styles.lastTransactionInGroup,
                  ]}
                >
                  <Text style={styles.transactionName}>
                    {transaction.description}
                  </Text>
                  <View style={styles.transactionAmounts}>
                    <Text style={styles.transactionAmount}>
                      {formatBalance(transaction.amountCents / 100)}
                    </Text>
                    <Text style={styles.runningBalance}>
                      {formatBalance(transaction.balanceAfterCents / 100)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  content: {
    paddingBottom: 24,
  },
  topBar: {
    height: 72,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.darkGray,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  backIcon: {
    color: COLORS.white,
    fontSize: 46,
    lineHeight: 48,
    marginTop: -5,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "600",
  },
  topBarSpacer: {
    width: 52,
  },
  accountHeader: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  accountNumber: {
    color: COLORS.lightGray,
    fontSize: 16,
    marginBottom: 8,
  },
  accountName: {
    color: COLORS.white,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "600",
  },
  balance: {
    color: COLORS.white,
    fontSize: 42,
    lineHeight: 52,
    fontWeight: "700",
    marginTop: 36,
  },
  actions: {
    marginTop: 38,
    height: 68,
  },
  actionContent: {
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 12,
  },
  sectionTabs: {
    marginTop: 38,
    height: 62,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    flexDirection: "row",
    alignItems: "stretch",
  },
  sectionTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTabActive: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.accent,
  },
  sectionTabActiveText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
  sectionTabText: {
    color: COLORS.accent,
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  transactionsHeading: {
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transactionsTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "700",
  },
  headingActions: {
    flexDirection: "row",
    gap: 12,
  },
  headingAction: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: COLORS.darkGray,
    alignItems: "center",
    justifyContent: "center",
  },
  headingActionIcon: {
    color: COLORS.accent,
    fontSize: 31,
    lineHeight: 36,
  },
  transactionCard: {
    marginHorizontal: 16,
    backgroundColor: COLORS.darkGray,
    borderRadius: 15,
    overflow: "hidden",
  },
  dateHeading: {
    color: COLORS.lightGray,
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  transactionRow: {
    minHeight: 94,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    gap: 12,
  },
  lastTransactionInGroup: {
    borderBottomWidth: 0,
  },
  transactionName: {
    flex: 1,
    color: COLORS.white,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
  },
  transactionAmounts: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "500",
  },
  runningBalance: {
    color: COLORS.lightGray,
    fontSize: 13,
    marginTop: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
