import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem
} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useNavigation } from 'expo-router'
import { useState, useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

import categories from '@/constants/json/filter.json'
import { Category } from '@/constants/types/Interface'
import Colors from '@/constants/Colors'
import ItemBox from '@/components/ItemBox'

const FilterModal = () => {
  const navigation = useNavigation()
  const [items, setItems] = useState<Category[]>(categories)
  const [selected, setSelected] = useState<Category[]>([])
  const flexWidth = useSharedValue(0)

  useEffect(() => {
    const hasSelected = selected.length > 0
    const selectedItems = items.filter(item => item.checked)
    const newSelected = selectedItems.length > 0

    if (hasSelected !== newSelected) {
      flexWidth.value = newSelected ? 150 : 0
    }

    setSelected(selectedItems)
  }, [items])

  const handleClearAll = () => {
    const updatedItems = items.map((item) => {
      item.checked = false
      return item
    })

   setItems(updatedItems)
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: flexWidth.value
    }
  })

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.categoryContainer} >
      <Text style={styles.categoryText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox 
        iconStyle={{ borderColor: Colors.primary, borderRadius: 4, borderWidth: 2 }}
        innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4, borderWidth: 2 }}
        fillColor={Colors.primary} 
        disableBuiltInState
        unfillColor='#fff'
        isChecked={items[index].checked}
        onPress={() => {
          const isChecked = items[index].checked
          
          const updatedItems = items.map((item) => {
            if (item.name == items[index].name) {
              item.checked = !isChecked
            }

            return item
          })

          setItems(updatedItems)
        }} 
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        ListHeaderComponent={<ItemBox />}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />

      <View style={styles.footer}>
        <View style={styles.btnContainerRow}>
          <Animated.View style={[animatedStyle, styles.footerButtonOutline]}>
            <TouchableOpacity onPress={handleClearAll}>
              <Text style={styles.footerButtonTextOutline}>
                Clear all
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.goBack()}>
            <Text style={styles.footerButtonText}>
              Done
            </Text>
          </TouchableOpacity>
        </View>

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
  flatList: {
    marginBottom: 38
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
    borderRadius: 8,
    flex: 1,
    height: 56
  },
  footerButtonText: {
    color: Colors.lightGray,
    fontWeight: '600',
    fontSize: 16
  },
  footerButtonOutline: {
    borderColor: Colors.primary,
    borderWidth: 2,
    // padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    height: 56
  },
  footerButtonTextOutline: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 16
  },
  btnContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ffff'
  },
  categoryText: {
    flex: 1
  }
})
