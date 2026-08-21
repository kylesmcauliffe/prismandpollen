import { getProduct } from "@/data/products";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = getProduct(id ?? "");

  if (!product) {
    return (
      <View className="px-4 py-12">
        <Text className="text-sm text-base-600">Product not found.</Text>
        <Link href="/shop">
          <Text className="mt-4 text-[11px] underline">back to shop</Text>
        </Link>
      </View>
    );
  }

  return (
    <View className="bg-white px-4 py-8 lg:px-6">
      <Link href="/shop">
        <Text className="text-[11px] lowercase text-base-500">← back</Text>
      </Link>

      <View className="mt-6 gap-8 lg:flex-row">
        <View className="flex-1 gap-2">
          <Image
            source={product.image}
            className="aspect-[3/4] w-full"
            resizeMode="cover"
            accessibilityLabel={product.title}
          />
          {product.images.map((img, i) => (
            <Image
              key={i}
              source={img}
              className="aspect-[3/4] w-full"
              resizeMode="cover"
            />
          ))}
        </View>

        <View className="flex-1">
          {product.badge ? (
            <Text className="mb-2 text-[11px] lowercase text-sale">
              {product.badge}
            </Text>
          ) : null}
          <Text className="font-serif text-3xl font-light text-base-950">
            {product.title}
          </Text>
          <Text className="mt-2 text-sm text-base-700">${product.price}</Text>
          <Text className="mt-6 text-sm leading-relaxed text-base-600">
            {product.description}
          </Text>
          <View className="mt-8 self-start bg-base-950 px-10 py-3.5">
            <Text className="text-[11px] uppercase tracking-wider text-white">
              Add to bag — ${product.price}
            </Text>
          </View>
          <View className="mt-10 gap-2">
            {product.highlights.map((h) => (
              <Text key={h} className="text-[11px] lowercase text-base-600">
                — {h}
              </Text>
            ))}
          </View>
          <View className="mt-10 border-t border-base-200 pt-6">
            <Text className="mb-3 text-[11px] font-medium lowercase">
              details
            </Text>
            {product.specifications.map((spec) => (
              <Text
                key={spec.name}
                className="text-[11px] lowercase text-base-600"
              >
                <Text className="text-base-400">{spec.name}: </Text>
                {spec.value}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
