import React, { useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ListingEditScreen from "../screens/ListingEditScreen"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as Notifications from "expo-notifications"

import FeedNavigator from "./FeedNavigator"
import AccountNavigator from "./AccountNavigator"
import NewListingButtton from "./NewListingButtton"
import routes from "./routes"

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  const registerForPushNotifications = async () => {
    const permission = await Notifications.getPermissionsAsync()
    if (!permission.granted) return

    try {
      const token = await Notifications.getExpoPushTokenAsync()
      console.log(token)
    } catch (error) {
      console.log("Error getting Push Notification Token", error)
    }
  }

  useEffect(() => {
    registerForPushNotifications()
  }, [])

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Feed"
        component={FeedNavigator}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButtton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name={routes.ACCOUNT}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator
