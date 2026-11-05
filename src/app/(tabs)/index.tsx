import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionCard from "../../components/ActionCard";
import SectionCard from "../../components/SectionCard";
import { ACCOUNTS, SECTIONS } from "../../data/accounts";
import { QUICK_ACTIONS } from "../../data/quickActions";
import { COLORS } from "../../constants/colors";
import type { Account } from "../../utils/account";

export default function Index() {
  const router = useRouter();
  const accountsById = new Map(
    ACCOUNTS.map((account) => [account.id, account]),
  );

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
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
            {QUICK_ACTIONS.map((action) => (
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
              onAccountPress={
                section.id === "banking"
                  ? (account) =>
                      router.push({
                        pathname: "/account-detail",
                        params: { accountId: account.id },
                      })
                  : undefined
              }
            />
          );
        })}
      </ScrollView>
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
});
