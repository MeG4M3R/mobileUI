import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { formatBalance, type Account } from "../utils/account";
import AccountCard from "./AccountCard";

type SectionCardProps = {
  title: string;
  subtitle?: string;
  accounts: Account[];
  showTotalBalance?: boolean;
  collapsible?: boolean;
};

export default function SectionCard({
  title,
  subtitle,
  accounts,
  showTotalBalance = false,
  collapsible = false,
}: SectionCardProps) {
  const totalBalance = accounts.reduce(
    (total, account) => total + account.balance,
    0,
  );

  return (
    <View style={styles.card}>
      <View style={styles.heading}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        {showTotalBalance ? (
          <Text style={styles.balance}>{formatBalance(totalBalance)}</Text>
        ) : null}
        {collapsible ? <Text style={styles.collapseIcon}>⌃</Text> : null}
      </View>
      {accounts.map((account, index) => (
        <AccountCard
          key={account.id}
          account={account}
          isLast={index === accounts.length - 1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 14,
    marginBottom: 14,
    overflow: "hidden",
  },
  heading: {
    minHeight: 88,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    color: COLORS.lightGray,
    fontSize: 14,
    marginTop: 3,
  },
  balance: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "600",
    marginLeft: "auto",
  },
  collapseIcon: {
    color: COLORS.lightGray,
    fontSize: 26,
    marginLeft: 14,
    transform: [{ translateY: 4 }],
  },
});