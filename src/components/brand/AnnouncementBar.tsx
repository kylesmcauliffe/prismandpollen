import { Text, View } from "react-native";

type Props = { message?: string };

export function AnnouncementBar({
  message = "Free shipping on everything.",
}: Props) {
  return (
    <View className="bg-base-950 px-4 py-2.5">
      <Text className="text-center text-[11px] tracking-wide text-white">
        {message}
      </Text>
    </View>
  );
}
