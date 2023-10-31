import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Text>SearchBar</Text>
    </View>
  )
}

export default SearchBar

// styles
const styles = StyleSheet.create({
  searchBarContainer: {
    height: 60,
    backgroundColor: 'red'
  }
})
