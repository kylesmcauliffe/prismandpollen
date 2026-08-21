import { Link } from "expo-router";
import type { ImageSourcePropType } from "react-native";
import { Image, Text, View } from "react-native";

type Props = {
  image: ImageSourcePropType;
  headline: string;
  ctaLabel: string;
  ctaHref: string;
  tone?: "light" | "dark";
};

export function HeroBanner({
  image,
  headline,
  ctaLabel,
  ctaHref,
  tone = "light",
}: Props) {
  const textClass = tone === "dark" ? "text-white" : "text-base-950";

  return (
    <View className="relative w-full overflow-hidden">
      <Image
        source={image}
        className="h-[420px] w-full"
        resizeMode="cover"
        accessibilityLabel={headline}
      />
      <View className="absolute inset-0 justify-center px-6 lg:px-12">
        <Text className={`font-serif text-4xl font-light tracking-tight sm:text-5xl ${textClass}`}>
          {headline}
        </Text>
        <Link href={ctaHref as `/shop/${string}` | "/shop" | "/hub"}>
          <Text
            className={`mt-3 text-[12px] font-semibold lowercase underline underline-offset-4 ${textClass}`}
          >
            {ctaLabel}
          </Text>
        </Link>
      </View>
    </View>
  );
}
