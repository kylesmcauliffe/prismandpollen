import "../global.css";

import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts as useInter,
} from "@expo-google-fonts/inter";
import {
  Newsreader_300Light,
  Newsreader_400Regular,
  useFonts as useNewsreader,
} from "@expo-google-fonts/newsreader";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { AnnouncementBar } from "@/components/brand/AnnouncementBar";
import { BrandFooter } from "@/components/brand/BrandFooter";
import { BrandNav } from "@/components/brand/BrandNav";

export default function RootLayout() {
  const [interLoaded] = useInter({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const [newsLoaded] = useNewsreader({
    Newsreader_400Regular,
    Newsreader_300Light,
  });

  if (!interLoaded || !newsLoaded) {
    return <View className="flex-1 bg-white" />;
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView className="flex-1" contentContainerClassName="grow">
        <AnnouncementBar message="Soft denim just landed. Shop the edit." />
        <BrandNav />
        <Slot />
        <BrandFooter />
      </ScrollView>
    </View>
  );
}
