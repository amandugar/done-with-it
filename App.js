import React from "react"
import AppPicker from "./app/components/AppPicker"
import AppText from "./app/components/AppText"
import AppTextInput from "./app/components/AppTextInput"
import Screen from "./app/components/Screen"
import ListingsScreen from "./app/screens/ListingsScreen"

export default function App() {
  return (
    <Screen>
      <AppTextInput icon={"email"} placeholder="username" />
      <AppPicker icon="apps" placeholder={"Category"} />
    </Screen>
  )
}
