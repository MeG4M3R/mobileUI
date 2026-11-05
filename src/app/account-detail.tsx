import { useLocalSearchParams } from "expo-router";
import AccountDetailScreen from "../components/AccountDetailScreen";
import PlaceholderScreen from "../components/PlaceholderScreen";
import { ACCOUNTS } from "../data/accounts";

export default function AccountDetailRoute() {
  const { accountId } = useLocalSearchParams<{ accountId: string }>();
  const account = ACCOUNTS.find((item) => item.id === accountId);

  if (!account || (account.id !== "ac1" && account.id !== "ac2")) {
    return (
      <PlaceholderScreen
        title="Account not found"
        message="This account is not part of the banking section."
      />
    );
  }

  return <AccountDetailScreen account={account} />;
}
