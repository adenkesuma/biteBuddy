import { 
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native"
import { Ionicons } from "@expo/vector-icons"

import Colors from "@/constants/Colors"

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
        <TouchableOpacity
          style={styles.item}
          >
          <Ionicons 
            name='fast-food-outline'
            size={20}
            color={Colors.medium}
          />
          <Text
            style={styles.filterText}
          >
            Hygiene rating
          </Text>
          <Ionicons 
            name="chevron-forward"
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          >
          <Ionicons 
            name='pricetag-outline'
            size={20}
            color={Colors.medium}
          />
          <Text
            style={styles.filterText}
          >
            Offers
          </Text>
          <Ionicons 
            name="chevron-forward"
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>        
         <TouchableOpacity
          style={styles.item}
          >
          <Ionicons 
            name='nutrition-outline'
            size={20}
            color={Colors.medium}
          />
          <Text
            style={styles.filterText}
          >
            Dietary
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

export default ItemBox

// styles
const styles = StyleSheet.create({
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
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderColor: Colors.gray,
    borderBottomWidth: 1
  },
  filterText: {
    flex: 1
  }
})
