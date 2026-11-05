import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MoreMenuSection from "../../components/MoreMenuSection";
import { COLORS } from "../../constants/colors";

const SECTIONS = [
  {
    id: "about-you",
    title: "About You",
    items: [
      { id: "profile", icon: "▣", label: "Profile" },
      { id: "settings", icon: "⚙", label: "Settings" },
    ],
  },
  {
    id: "products",
    title: "Products and Services",
    items: [
      { id: "add-accounts", icon: "⊕", label: "Add Accounts and Services" },
      { id: "pre-approved", icon: "✣", label: "Pre-Approved Credit" },
      { id: "banking", icon: "♜", label: "Banking Services" },
      { id: "credit-score", icon: "◴", label: "Credit Score" },
      { id: "direct-deposit", icon: "▱", label: "Paycheque Direct Deposit" },
      { id: "invest", icon: "⌁", label: "Ways to Invest" },
      { id: "markets", icon: "▤", label: "Markets and Research" },
      { id: "refer", icon: "⊕", label: "Refer a Friend" },
    ],
  },
  {
    id: "support",
    title: "Help and Support",
    items: [
      { id: "faq", icon: "▤", label: "FAQ" },
      { id: "contact", icon: "☏", label: "Contact Us" },
      { id: "privacy", icon: "⬡", label: "Privacy, Security and Legal" },
    ],
  },
  {
    id: "verification",
    title: "Verification",
    items: [{ id: "verification-requests", icon: "♙", label: "Verification Requests" }],
  },
];

export default function MoreScreen() {
  return (
    <SafeAreaView edges={["top"]} style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>More</Text>

        <View style={styles.shortcuts}>
          <View style={styles.shortcut}>
            <Text style={styles.shortcutIcon}>⇥</Text>
            <Text style={styles.shortcutLabel}>Log Out</Text>
          </View>
          <View style={styles.shortcut}>
            <Text style={styles.shortcutIcon}>♧</Text>
            <Text style={styles.shortcutLabel}>TD Clari</Text>
          </View>
        </View>

        {SECTIONS.map((section) => (
          <MoreMenuSection
            key={section.id}
            title={section.title}
            items={section.items}
          />
        ))}

        <Text style={styles.version}>Version 26.09.1</Text>
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
    paddingHorizontal: 16,
    paddingTop: 62,
    paddingBottom: 28,
  },
  pageTitle: {
    color: COLORS.white,
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "700",
  },
  shortcuts: {
    flexDirection: "row",
    gap: 12,
    marginTop: 34,
    marginBottom: 46,
  },
  shortcut: {
    minHeight: 56,
    paddingHorizontal: 18,
    borderRadius: 30,
    backgroundColor: COLORS.darkGray,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  shortcutIcon: {
    color: COLORS.accent,
    fontSize: 26,
  },
  shortcutLabel: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  version: {
    color: COLORS.lightGray,
    fontSize: 14,
    textAlign: "center",
    marginTop: 42,
    marginBottom: 14,
  },
});
