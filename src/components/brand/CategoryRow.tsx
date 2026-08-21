import { Link } from "expo-router";
import type { ImageSourcePropType } from "react-native";
import { Image, Text, useWindowDimensions, View } from "react-native";

export type CategoryTile = {
  image: ImageSourcePropType;
  label: string;
  href: string;
};

type Props = { items: CategoryTile[] };

export function CategoryRow({ items }: Props) {
  const { width } = useWindowDimensions();
  const cols = width >= 1024 ? 4 : 2;
  const gap = 8;
  const tileW = (width - 16 - gap * (cols - 1)) / cols;

  return (
    <View className="flex-row flex-wrap gap-2 px-2">
      {items.map((item) => (
        <Link key={item.label} href={item.href as `/shop/${string}`}>
          <View style={{ width: tileW }}>
            <Image
              source={item.image}
              style={{ width: tileW, height: tileW * 1.33 }}
              resizeMode="cover"
              accessibilityLabel={item.label}
            />
            <Text className="mt-2 font-serif text-sm lowercase text-base-900">
              {item.label}
            </Text>
          </View>
        </Link>
      ))}
    </View>
  );
}
