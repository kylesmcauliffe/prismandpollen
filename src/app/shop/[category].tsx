import { ProductGrid } from "@/components/brand/ProductGrid";
import { filterByCategory } from "@/data/products";
import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ShopCategory() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const slug = category ?? "clothing";
  const list = filterByCategory(slug);

  return (
    <View className="bg-white pb-12">
      <View className="px-4 pb-4 pt-8 lg:px-6">
        <Text className="font-serif text-3xl font-light lowercase text-base-950">
          {slug}
        </Text>
        <Text className="mt-2 text-[11px] lowercase text-base-500">
          {list.length} pieces
        </Text>
      </View>
      {list.length > 0 ? (
        <ProductGrid products={list} />
      ) : (
        <View className="px-4 pb-16 lg:px-6">
          <Text className="text-sm lowercase text-base-500">
            nothing here yet —{" "}
            <Link href="/shop">
              <Text className="underline">shop all</Text>
            </Link>
          </Text>
        </View>
      )}
    </View>
  );
}
