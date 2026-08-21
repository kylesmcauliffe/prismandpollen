import { Link } from "expo-router";
import { Text, View } from "react-native";

type Props = { href?: string; label?: string };

export function ShopAllButton({
  href = "/shop",
  label = "shop all",
}: Props) {
  return (
    <View className="items-center py-10">
      <Link href={href as "/shop"}>
        <View className="bg-base-950 px-10 py-3.5">
          <Text className="text-[11px] uppercase tracking-wider text-white">
            {label}
          </Text>
        </View>
      </Link>
    </View>
  );
}
