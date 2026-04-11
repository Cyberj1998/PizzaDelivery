import { Image } from "expo-image";
import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tienda",
          tabBarIcon: () => (
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../assets/images/store.png")}
              contentFit="cover"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Carrito",
          tabBarIcon: () => (
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../assets/images/cart.png")}
              contentFit="cover"
            />
          ),
        }}
      />
    </Tabs>
  );
}
