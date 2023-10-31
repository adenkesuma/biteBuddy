import { 
  View, 
  TouchableOpacity,
  StyleSheet, 
  TextInput
} from 'react-native'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            name='search-outline'
            size={20}
            color={Colors.medium}
          />
          <TextInput 
            style={styles.inputField}
            placeholder='Restaurants, groceries, dishes'
          />
        </View>

        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons 
              name='options-outline'
              size={24}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

export default SearchBar

// styles
const styles = StyleSheet.create({
  searchBarContainer: {
    paddingTop: 10,
    height: 70,
    backgroundColor: '#fff'
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  searchField: {
    paddingLeft: 8,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: Colors.lightGray
  },
  inputField: {
    padding: 10,
    color: Colors.medium
  },
  optionButton: {
    padding: 10,
    borderRadius: 10
  }
})
