
import { Stack } from 'expo-router'

export const unstable_settings = {
  initialRouteName: 'index',
}

const RootLayoutNav = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{}} />
    </Stack>
  )
}

export default RootLayoutNav
