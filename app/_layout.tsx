import { Stack } from 'expo-router'
import HeaderBar from '../components/HeaderBar'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

export const unstable_settings = {
  initialRouteName: 'index',
}

const RootLayoutNav = () => {
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            header: () => <HeaderBar />
          }} 
        />
      </Stack>
    </BottomSheetModalProvider>
  )
}

export default RootLayoutNav
