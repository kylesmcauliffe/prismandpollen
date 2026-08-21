import { hubTools } from "@/data/hub";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HubIndex() {
  return (
    <View className="max-w-5xl bg-white px-4 pb-16 pt-10 lg:px-6">
      <Text className="text-[11px] lowercase tracking-wide text-base-500">
        knowledge hub
      </Text>
      <Text className="mt-2 font-serif text-4xl font-light text-base-950">
        Workspaces
      </Text>
      <Text className="mt-4 max-w-xl text-sm leading-relaxed text-base-600">
        Prism & Pollen creative ops — folders for Canva, Notion, Figma, and
        Higgsfield. Paste your real board and doc links into each tool page when
        ready.
      </Text>

      <View className="mt-12 gap-4 sm:flex-row sm:flex-wrap">
        {hubTools.map((tool) => (
          <Link key={tool.id} href={`/hub/${tool.id}`} className="sm:w-[48%]">
            <View className="border border-base-200 p-6">
              <Text className="text-[11px] lowercase text-base-500">
                {tool.tagline}
              </Text>
              <Text className="mt-2 font-serif text-2xl text-base-950">
                {tool.name}
              </Text>
              <Text className="mt-3 text-sm leading-relaxed text-base-600">
                {tool.description}
              </Text>
              <Text className="mt-6 text-[11px] lowercase text-base-900">
                {tool.folders.length} folders →
              </Text>
            </View>
          </Link>
        ))}
      </View>
    </View>
  );
}
