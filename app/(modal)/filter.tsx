import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem
} from 'react-native'
import { useNavigation } from 'expo-router'

import Colors from '@/constants/Colors'
import categories from '@/constants/json/filter.json'
import { Category } from '@/constants/types/Interface'
import { Ionicons } from '@expo/vector-icons'

const ItemBox = () => {
  return (
    <>
      <View 
        style={styles.itemContainer}
      >
        <TouchableOpacity
          style={styles.item}
          >
          <Ionicons 
            name='arrow-down-outline'
            size={20}
            color={Colors.medium}
          />
          <Text
            style={styles.filterText}
          >
            Sort
          </Text>
          <Ionicons 
            name="chevron-forward"
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={styles.header}
      >
        Categories
      </Text>
    </>
  )
}

const FilterModal = () => {
  const navigation = useNavigation()

  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  )

  return (
    <View 
      style={styles.container}
    >
      <FlatList 
        data={categories}
        ListHeaderComponent={<ItemBox />}
        renderItem={renderItem}
      />


      <View
        style={styles.footer}
      >
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={styles.footerButtonText}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FilterModal

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGray
  },
  footer: {
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor:  Colors.lightGray
  },
  footerButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: 'center',
    borderRadius: 8
  },
  footerButtonText: {
    color: Colors.lightGray,
    fontWeight: '600',
    fontSize: 16
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16
  },
  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderColor: Colors.gray,
    borderBottomWidth: 1
  },
  filterText: {
    flex: 1
  }
})
