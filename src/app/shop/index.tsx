import { ProductGrid } from "@/components/brand/ProductGrid";
import { products } from "@/data/products";
import { Text, View } from "react-native";

export default function ShopIndex() {
  return (
    <View className="bg-white pb-12">
      <View className="px-4 pb-4 pt-8 lg:px-6">
        <Text className="font-serif text-3xl font-light lowercase text-base-950">
          shop all
        </Text>
        <Text className="mt-2 text-[11px] lowercase text-base-500">
          {products.length} pieces
        </Text>
      </View>
      <ProductGrid products={products} />
    </View>
  );
}
