import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MoveMoneyOption from "../../components/MoveMoneyOption";
import { COLORS } from "../../constants/colors";

const OPTIONS = [
  {
    id: "etransfer",
    icon: "➤",
    title: "Interac e-Transfer®",
    description:
      "Send money, view your payment history and manage your contacts",
    italicTitle: true,
  },
  {
    id: "transfer",
    icon: "⇄",
    title: "Transfer Between Accounts",
    description: "Transfer between your TD accounts",
  },
  {
    id: "bills",
    icon: "▤",
    title: "Bill Payments",
    description: "Pay bills and manage your scheduled payments and payees",
  },
  {
    id: "bring-money",
    icon: "↗",
    title: "Bring Money to TD",
    description:
      "Bring money to your TD account from your account at an external financial institution with Interac e-Transfer®.",
  },
  {
    id: "deposit",
    icon: "▣",
    title: "Deposit Cheque",
    description:
      "Take a photo of your cheque for deposit and view mobile deposit history",
  },
  {
    id: "request",
    icon: "$",
    title: "Request Money",
    description:
      "Request money from a person or business using Interac e-Transfer®",
  },
  {
    id: "global-transfer",
    icon: "◎",
    title: "TD Global Transfer",
    description: "Securely send money internationally",
  },
  {
    id: "foreign-currency",
    icon: "↻",
    title: "Order Foreign Currency",
    description:
      "Order online and pick up at your nearest branch within 3-7 business days",
  },
];

export default function MoveMoneyScreen() {
  return (
    <SafeAreaView edges={["top"]} style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Move Money</Text>
        <View style={styles.optionsCard}>
          {OPTIONS.map((option, index) => (
            <MoveMoneyOption
              key={option.id}
              icon={option.icon}
              title={option.title}
              description={option.description}
              italicTitle={option.italicTitle}
              isLast={index === OPTIONS.length - 1}
            />
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
    paddingHorizontal: 16,
    paddingTop: 62,
    paddingBottom: 24,
  },
  title: {
    color: COLORS.white,
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "700",
    marginBottom: 26,
  },
  optionsCard: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingLeft: 18,
    overflow: "hidden",
  },
});
