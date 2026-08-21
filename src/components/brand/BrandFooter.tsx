import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";

export function BrandFooter() {
  return (
    <View className="mt-16 border-t border-base-200 bg-white px-4 py-12 lg:px-6">
      <Text className="text-5xl font-bold leading-none tracking-tight text-base-950">
        Prism & Pollen
      </Text>
      <Text className="mt-6 max-w-md text-sm leading-relaxed text-base-700">
        Soft structures, honest fabrics, and color that splits the light. Being
        thoughtful is the most sustainable option. We&apos;re working on #2.
      </Text>

      <View className="mt-10 flex-row flex-wrap gap-10">
        <View>
          <Text className="mb-3 text-[11px] font-medium lowercase text-base-900">
            shop
          </Text>
          <Link href="/shop/new">
            <Text className="mb-2 text-[11px] lowercase text-base-600">new</Text>
          </Link>
          <Link href="/shop/clothing">
            <Text className="mb-2 text-[11px] lowercase text-base-600">
              clothing
            </Text>
          </Link>
          <Link href="/shop/sale">
            <Text className="mb-2 text-[11px] lowercase text-sale">sale</Text>
          </Link>
        </View>
        <View>
          <Text className="mb-3 text-[11px] font-medium lowercase text-base-900">
            tools
          </Text>
          <Link href="/hub/canva">
            <Text className="mb-2 text-[11px] lowercase text-base-600">
              canva
            </Text>
          </Link>
          <Link href="/hub/notion">
            <Text className="mb-2 text-[11px] lowercase text-base-600">
              notion
            </Text>
          </Link>
          <Link href="/hub/figma">
            <Text className="mb-2 text-[11px] lowercase text-base-600">
              figma
            </Text>
          </Link>
          <Link href="/hub/higgsfield">
            <Text className="mb-2 text-[11px] lowercase text-base-600">
              higgsfield
            </Text>
          </Link>
        </View>
      </View>

      <View className="mt-12 max-w-lg flex-row items-end gap-3">
        <TextInput
          placeholder="email for early access"
          placeholderTextColor="#a3a3a3"
          className="flex-1 border-b border-base-900 py-2 text-sm text-base-900"
          keyboardType="email-address"
        />
        <View className="bg-base-950 px-6 py-3">
          <Text className="text-[11px] uppercase tracking-wider text-white">
            Sign up
          </Text>
        </View>
      </View>

      <Text className="mt-10 text-[10px] lowercase text-base-400">
        © {new Date().getFullYear()} prism & pollen
      </Text>
    </View>
  );
}
