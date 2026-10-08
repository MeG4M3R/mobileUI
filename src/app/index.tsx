import {
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionCard from "../components/ActionCard";
import SectionCard from "../components/SectionCard";
import { COLORS } from "../constants/colors";
import type { Account } from "../utils/account";

const ACTIONS = [
  { id: "transfer", label: "Interac e-Transfer", icon: "➤" },
  { id: "move", label: "Transfer", icon: "⇄" },
  { id: "pay", label: "Pay Bills", icon: "▤" },
  { id: "deposit", label: "Deposit Cheque", icon: "▣" },
  { id: "global", label: "TD Global Transfer", icon: "◎" },
  { id: "request", label: "Request Money", icon: "↻" },
];

const ACCOUNTS: Account[] = [
  {
    id: "ac1",
    name: "TD STUDENT CHEQUING ACCOUNT",
    balance: 111111.11,
    accountNumber: "1111111111111111",
  },
  {
    id: "ac2",
    name: "TD EVERY DAY SAVINGS ACCOUNT",
    balance: 222222.22,
    accountNumber: "2222222222222222",
  },
  {
    id: "ac3",
    name: "TD CASH BACK VISA* CARD",
    balance: 33333.33,
    accountNumber: "3333333333333333",
  },
  {
    id: "ac4",
    name: "MULTI-HOLDING TFSA",
    balance: 444444.44,
    accountNumber: "4444444444444444",
  },
];

const SECTIONS = [
  {
    id: "banking",
    name: "Banking",
    subtitle: "2 accounts",
    accountIds: ["ac1", "ac2"],
    showTotalBalance: true,
    collapsible: true,
  },
  { id: "cards", name: "Credit Cards", accountIds: ["ac3"] },
  { id: "investing", name: "Personal Investing", accountIds: ["ac4"] },
];

const NAV_ITEMS = [
  { label: "Home", icon: "⌂" },
  { label: "Accounts", icon: "▱" },
  { label: "Move Money", icon: "$" },
  { label: "Rewards", icon: "♧" },
  { label: "More", icon: "☰" },
];

export default function Index() {
  const accountsById = new Map(
    ACCOUNTS.map((account) => [account.id, account]),
  );

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.green} />
      <SafeAreaView edges={["top"]} style={styles.safeHeader}>
        <View style={styles.hero}>
          <View style={styles.messageButton}>
            <Text style={styles.messageIcon}>✉</Text>
          </View>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Good afternoon</Text>
            <Text style={styles.nameText}>HENRY</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.actions}
            contentContainerStyle={styles.actionContent}
          >
            {ACTIONS.map((action) => (
              <ActionCard
                key={action.id}
                label={action.label}
                icon={action.icon}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.accountScroll}
        contentContainerStyle={styles.accountContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.accountsHeading}>
          <View style={styles.headingTitle}>
            <Text style={styles.pageTitle}>My Accounts</Text>
            <Text style={styles.headingChevron}>›</Text>
          </View>
          <Text style={styles.moreButton}>•••</Text>
        </View>

        {SECTIONS.map((section) => {
          const accounts = section.accountIds
            .map((id) => accountsById.get(id))
            .filter((account): account is Account => account !== undefined);

          return (
            <SectionCard
              key={section.id}
              title={section.name}
              subtitle={section.subtitle}
              accounts={accounts}
              showTotalBalance={section.showTotalBalance}
              collapsible={section.collapsible}
            />
          );
        })}

        <Pressable
          accessibilityRole="button"
          onPress={() => Alert.alert("Alert", "Alert Button pressed")}
          style={({ pressed }) => [
            styles.alertButton,
            pressed && styles.alertButtonPressed,
          ]}
        >
          <Text style={styles.alertButtonText}>Alert</Text>
        </Pressable>
      </ScrollView>

      <SafeAreaView edges={["bottom"]} style={styles.safeNavigation}>
        <View style={styles.navigation}>
          {NAV_ITEMS.map((item, index) => (
            <View
              key={item.label}
              style={[styles.navItem, index === 0 && styles.activeNavItem]}
            >
              <Text
                style={[styles.navIcon, index === 0 && styles.activeNavIcon]}
              >
                {item.icon}
              </Text>
              <Text
                style={[styles.navLabel, index === 0 && styles.activeNavLabel]}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  safeHeader: {
    backgroundColor: COLORS.green,
    zIndex: 1,
    elevation: 1,
  },
  hero: {
    height: 135,
    backgroundColor: COLORS.green,
    paddingHorizontal: 24,
  },
  messageButton: {
    position: "absolute",
    right: 24,
    top: 18,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
  },
  messageIcon: {
    color: COLORS.accent,
    fontSize: 26,
  },
  greeting: {
    marginTop: 33,
  },
  greetingText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "600",
  },
  nameText: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "700",
    marginTop: 2,
  },
  actions: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -36,
    height: 76,
  },
  actionContent: {
    paddingHorizontal: 24,
    alignItems: "center",
    gap: 12,
  },
  accountScroll: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  accountContent: {
    paddingHorizontal: 20,
    paddingTop: 54,
    paddingBottom: 24,
  },
  accountsHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
    paddingHorizontal: 4,
  },
  alertButton: {
    minHeight: 48,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 24,
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
  },
  alertButtonPressed: {
    opacity: 0.8,
  },
  alertButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  headingTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  pageTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "700",
  },
  headingChevron: {
    color: COLORS.accent,
    fontSize: 40,
    lineHeight: 42,
    marginTop: -5,
  },
  moreButton: {
    color: COLORS.lightGray,
    fontSize: 20,
    letterSpacing: 2,
  },
  safeNavigation: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  navigation: {
    minHeight: 72,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.divider,
    backgroundColor: COLORS.darkGray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 4,
    marginBottom: 6,
  },
  navItem: {
    flex: 1,
    minHeight: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 34,
  },
  activeNavItem: {
    backgroundColor: COLORS.black,
  },
  navIcon: {
    color: COLORS.white,
    fontSize: 25,
    lineHeight: 29,
  },
  activeNavIcon: {
    color: COLORS.accent,
  },
  navLabel: {
    color: COLORS.white,
    fontSize: 11,
    marginTop: 2,
  },
  activeNavLabel: {
    fontWeight: "600",
  },
});
