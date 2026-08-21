import { CategoryRow } from "@/components/brand/CategoryRow";
import { HeroBanner } from "@/components/brand/HeroBanner";
import { ProductGrid } from "@/components/brand/ProductGrid";
import { ShopAllButton } from "@/components/brand/ShopAllButton";
import { brandImages, products } from "@/data/products";
import { View } from "react-native";

export default function HomeScreen() {
  const gridOne = products.slice(0, 4);
  const gridTwo = products.slice(4, 8);

  const categories = [
    {
      image: brandImages.catDress,
      label: "dress shop",
      href: "/shop/dresses",
    },
    {
      image: brandImages.catNew,
      label: "new this week",
      href: "/shop/new",
    },
    {
      image: brandImages.catEssentials,
      label: "essentials",
      href: "/shop/tops",
    },
    {
      image: brandImages.catAccessories,
      label: "accessories",
      href: "/shop/accessories",
    },
  ];

  return (
    <View className="bg-white pb-8">
      <HeroBanner
        image={brandImages.heroDenim}
        headline="Soft denim"
        ctaLabel="right here"
        ctaHref="/shop/jeans"
        tone="light"
      />
      <View className="mt-2">
        <CategoryRow items={categories} />
      </View>
      <View className="mt-2">
        <HeroBanner
          image={brandImages.heroBestsellers}
          headline="You really like us"
          ctaLabel="shop bestsellers"
          ctaHref="/shop/clothing"
          tone="dark"
        />
      </View>
      <View className="mt-8">
        <ProductGrid products={gridOne} />
      </View>
      <ShopAllButton href="/shop" label="shop all" />
      <HeroBanner
        image={brandImages.heroSale}
        headline="Sale — selected pieces"
        ctaLabel="shop responsibly"
        ctaHref="/shop/sale"
        tone="dark"
      />
      <View className="mt-8">
        <ProductGrid products={gridTwo} />
      </View>
      <ShopAllButton href="/shop" label="show more" />
    </View>
  );
}
