import { Stack, useNavigation } from 'expo-router'
import HeaderBar from '../components/HeaderBar'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Colors from '@/constants/Colors'

export const unstable_settings = {
  initialRouteName: 'index',
}

const RootLayoutNav = () => {
  const navigation = useNavigation()

  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            header: () => <HeaderBar />
          }} 
        />
        <Stack.Screen 
          name="(modal)/filter"
          options={{
            headerTitle: 'Filter',
            presentation: 'modal',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGray,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.goBack}
              >
                <Ionicons 
                  name="close-outline" 
                  size={28}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            )
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  )
}

export default RootLayoutNav

// styles
const styles = StyleSheet.create({
  goBack: {
    paddingRight: 10
  }
})
