import { Ionicons } from '@expo/vector-icons'
import { 
  StyleSheet,
  SafeAreaView, 
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import Colors from '../constants/Colors'
import SearchBar from './SearchBar'

const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.saveView}>
      <View style={styles.containerHeaderBar}>
        <View style={styles.containerLeftHeader}>
          <TouchableOpacity>
            <Image 
              source={require('../assets/images/favicon.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.titleHeaderBar}>
            <Text style={styles.subTitle}>Delivery . Now</Text>
            <View style={styles.titleHeaderRow}>
              <Text style={styles.title}>San Francisco, CA</Text>
              <Ionicons 
                name="chevron-down"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.profileHeaderBar}>
          <Ionicons 
            name="person-outline" 
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>

      <SearchBar />
    </SafeAreaView>
  )
}

export default HeaderBar

// styles
const styles = StyleSheet.create({
  saveView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  containerHeaderBar: {
    paddingHorizontal: 20,
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
  },
  containerLeftHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  titleHeaderBar: {
  },
  titleHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  profileHeaderBar: {
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    color: '#1a1a1a'
  },
  subTitle: {
    fontSize: 14,
    color: Colors.medium
  },
  logo: {
    width: 30,
    height: 30
  }
})
