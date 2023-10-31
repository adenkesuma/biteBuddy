import { Stack } from 'expo-router'
import HeaderBar from '../components/HeaderBar'

export const unstable_settings = {
  initialRouteName: 'index',
}

const RootLayoutNav = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          header: () => <HeaderBar />
        }} 
      />

    </Stack>
  )
}

export default RootLayoutNav
