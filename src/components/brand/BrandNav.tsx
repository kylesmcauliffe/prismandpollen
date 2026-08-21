import { Link } from "expo-router";
import { ScrollView, Text, TextInput, View } from "react-native";

const categories = [
  { label: "new", href: "/shop/new" as const },
  { label: "clothing", href: "/shop/clothing" as const },
  { label: "dresses", href: "/shop/dresses" as const },
  { label: "tops", href: "/shop/tops" as const },
  { label: "jeans", href: "/shop/jeans" as const },
  { label: "sweaters", href: "/shop/sweaters" as const },
  { label: "shoes", href: "/shop/shoes" as const },
  { label: "accessories", href: "/shop/accessories" as const },
  { label: "hub", href: "/hub" as const },
  { label: "sale", href: "/shop/sale" as const, sale: true },
];

export function BrandNav() {
  return (
    <View className="border-b border-base-100 bg-white px-4 pb-4 pt-3 lg:px-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-3"
        contentContainerClassName="items-center gap-3"
      >
        {categories.map((item) => (
          <Link key={item.label} href={item.href}>
            <Text
              className={`text-[11px] lowercase tracking-wide ${
                item.sale ? "font-medium text-sale" : "text-base-900"
              }`}
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </ScrollView>

      <View className="mb-3 flex-row flex-wrap items-center gap-4">
        <View className="min-w-[100px] flex-1 flex-row items-center gap-2">
          <Text className="text-[11px] lowercase text-base-900">search</Text>
          <TextInput
            className="flex-1 border-b border-base-900 py-0.5 text-[11px] text-base-900"
            placeholder=""
          />
        </View>
        <Link href="/hub">
          <Text className="text-[11px] lowercase text-base-900">account</Text>
        </Link>
        <Link href="/shop">
          <Text className="text-[11px] lowercase text-base-900">bag (0)</Text>
        </Link>
      </View>

      <Link href="/">
        <Text className="text-4xl font-bold tracking-tight text-base-950 sm:text-5xl">
          Prism & Pollen
        </Text>
      </Link>
    </View>
  );
}
