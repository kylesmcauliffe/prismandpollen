import { Link } from "expo-router";
import { Image, Text, useWindowDimensions, View } from "react-native";
import type { Product } from "@/data/products";

type TileProps = { product: Product; width: number };

function ProductTile({ product, width }: TileProps) {
  return (
    <Link href={`/store/${product.id}`}>
      <View style={{ width }}>
        <Image
          source={product.image}
          style={{ width, height: width * 1.33 }}
          resizeMode="cover"
          accessibilityLabel={product.title}
        />
        <View className="mt-2 flex-row items-baseline justify-between gap-2">
          <Text className="flex-1 text-[11px] lowercase text-base-900">
            {product.badge ? (
              <Text className="text-sale">{product.badge} </Text>
            ) : null}
            {product.title}
          </Text>
          <Text className="text-[11px] lowercase text-base-600">
            ${product.price}
          </Text>
        </View>
      </View>
    </Link>
  );
}

type GridProps = { products: Product[] };

export function ProductGrid({ products }: GridProps) {
  const { width } = useWindowDimensions();
  const cols = width >= 1024 ? 4 : 2;
  const gap = 8;
  const tileW = (width - 16 - gap * (cols - 1)) / cols;

  return (
    <View className="flex-row flex-wrap gap-2 gap-y-8 px-2">
      {products.map((product) => (
        <ProductTile key={product.id} product={product} width={tileW} />
      ))}
    </View>
  );
}
