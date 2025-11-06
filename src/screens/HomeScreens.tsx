import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BannerCarousel from "../components/BannerCarousel";

const HomeScreens = () => {
  const [query, setQuery] = useState("");
  const products = [
    {
      id: "1",
      name: "Cow Milk Packet",
      price: 70,
      imageUrl:
        "https://cdn.zeptonow.com/production/tr:w-403,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/a05ee90f-d81b-43a5-8f40-8c16a981730e.jpeg",
    },
    {
      id: "2",
      name: "Buffalo Milk",
      price: 80,
      imageUrl:
        "https://www.bbassets.com/media/uploads/p/l/40149834_1-nandini-shubham-milk.jpg",
    },
    {
      id: "3",
      name: "Ghee (500g)",
      price: 500,
      imageUrl: "https://via.placeholder.com/300x200?text=Ghee",
    },
    {
      id: "4",
      name: "Paneer Block",
      price: 200,
      imageUrl: "https://via.placeholder.com/300x200?text=Paneer",
    },
  ];
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-green-700">
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="#15803d"
        translucent={false}
      />

      <View className="bg-green-700">
        <Header />
        <View className="px-4 pb-4">
          <SearchBar value={query} onchange={setQuery} />
        </View>
      </View>

      <ScrollView className="flex-1 bg-white rounded-t-3xl">
        <View className="pb-10">
          <View className="pt-4">
            <BannerCarousel />
          </View>

          {/* Categories */}
          <View className="px-4 mt-3">
            <View className="flex-row items-center mt-3 justify-between">
              <Text className="text-xl font-bold">Flash Sale</Text>
              <Text className="text-purple-600">View All</Text>
            </View>
          </View>

          <View className="px-4 mt-3">
            <View className="flex-row items-center mt-3 justify-between">
              <Text className="text-xl font-bold">Flash Sale</Text>
              <Text className="text-purple-600">View All</Text>
            </View>
          </View>

          <ScrollView>
            {products?.map((p) => (
              <View>
                <View className="h-32">
                  <Image
                    source={{ uri: p.imageUrl }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
