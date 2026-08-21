import { getHubTool } from "@/data/hub";
import { Link, useLocalSearchParams } from "expo-router";
import { Linking, Text, View } from "react-native";

export default function HubToolPage() {
  const { tool: toolId } = useLocalSearchParams<{ tool: string }>();
  const tool = getHubTool(toolId ?? "");

  if (!tool) {
    return (
      <View className="px-4 py-12">
        <Text>Tool not found.</Text>
        <Link href="/hub">
          <Text className="mt-4 underline">back to hub</Text>
        </Link>
      </View>
    );
  }

  return (
    <View className="max-w-4xl bg-white px-4 pb-16 pt-10 lg:px-6">
      <Text className="text-[11px] lowercase tracking-wide text-base-500">
        <Link href="/hub">
          <Text className="text-base-500">knowledge hub</Text>
        </Link>
        {" / "}
        {tool.id}
      </Text>
      <Text className="mt-2 font-serif text-4xl font-light text-base-950">
        {tool.name}
      </Text>
      <Text className="mt-4 max-w-xl text-sm leading-relaxed text-base-600">
        {tool.description}
      </Text>
      {tool.homeUrl ? (
        <Text
          className="mt-4 text-[11px] lowercase underline"
          onPress={() => Linking.openURL(tool.homeUrl!)}
        >
          open {tool.name} ↗
        </Text>
      ) : null}

      <View className="mt-12 gap-10">
        {tool.folders.map((folder) => (
          <View key={folder.name} className="border-t border-base-200 pt-8">
            <Text className="font-serif text-xl lowercase text-base-950">
              {folder.name}
            </Text>
            <Text className="mt-2 text-[11px] lowercase text-base-500">
              {folder.description}
            </Text>
            <View className="mt-4 gap-2">
              {folder.links.map((link) => (
                <View key={link.label} className="flex-row flex-wrap gap-2">
                  {link.href ? (
                    <Link href={link.href as `/hub/${string}`}>
                      <Text className="text-sm underline">{link.label}</Text>
                    </Link>
                  ) : (
                    <Text className="text-sm text-base-800">{link.label}</Text>
                  )}
                  {link.note ? (
                    <Text className="text-[11px] lowercase text-base-400">
                      — {link.note}
                    </Text>
                  ) : null}
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
