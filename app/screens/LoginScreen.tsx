import { NavigationProp, useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, Screen, Text } from "app/components"
import { AppStackParamList, AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle } from "react-native"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(props) {
  // Pull in one of our MST stores
  const {} = useStores()

  // Pull in navigation via hook
  return (
    <Screen style={$root} preset="scroll">
      <Text text="login fksfsd fsdmflkds fsdmflksd fsdmkfsld fsdlfmksd fsdlmfsd fsdlmfsd flsdmkfs dfsdmfksd fsdlkfmsdlkfmsdlkfm ldfsdflsf sdjlf sdlk fjsldfj slf sdlf jsldfj sldfj sldf" />
      <Button onPress={() => props.navigation.navigate("Welcome")}>Welcome</Button>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
