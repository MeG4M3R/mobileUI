import { Tabs, useRouter, type Href } from "expo-router";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";

type TabRouteName = "index" | "move-money" | "more";
type TabRoutePath =
  | "/(tabs)"
  | "/(tabs)/move-money"
  | "/(tabs)/more";

type NavItem = {
  label: string;
  icon: string;
  route?: {
    name: TabRouteName;
    path: TabRoutePath;
  };
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    icon: "⌂",
    route: { name: "index", path: "/(tabs)" },
  },
  { label: "Accounts", icon: "▱" },
  {
    label: "Move Money",
    icon: "$",
    route: { name: "move-money", path: "/(tabs)/move-money" },
  },
  { label: "Rewards", icon: "♧" },
  { label: "More", icon: "☰", route: { name: "more", path: "/(tabs)/more" } },
] as const;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <AppTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="move-money" options={{ title: "Move Money" }} />
      <Tabs.Screen name="more" options={{ title: "More" }} />
    </Tabs>
  );
}

type TabBarProps = Parameters<
  NonNullable<ComponentProps<typeof Tabs>["tabBar"]>
>[0];

function AppTabBar({ state }: TabBarProps) {
  const router = useRouter();
  const currentRoute = state.routes[state.index]?.name;
  const activeRoute = currentRoute;

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.bar}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.route?.name === activeRoute;
          const contents = (
            <>
              <Text style={[styles.icon, isActive && styles.activeIcon]}>
                {item.icon}
              </Text>
              <Text style={styles.label}>{item.label}</Text>
            </>
          );

          if (!item.route) {
            return (
              <View key={item.label} style={styles.item}>
                {contents}
              </View>
            );
          }

          const route = item.route;

          return (
            <Pressable
              key={item.label}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              onPress={() => router.navigate(route.path as Href)}
              style={[styles.item, isActive && styles.activeItem]}
            >
              {contents}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  bar: {
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
  item: {
    flex: 1,
    minHeight: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 34,
  },
  activeItem: {
    backgroundColor: COLORS.black,
  },
  icon: {
    color: COLORS.white,
    fontSize: 25,
    lineHeight: 29,
  },
  activeIcon: {
    color: COLORS.accent,
  },
  label: {
    color: COLORS.white,
    fontSize: 11,
    marginTop: 2,
  },
});
