import { 
  forwardRef, 
  useCallback, 
  useMemo 
} from 'react'
import { 
  BottomSheetBackdrop, 
  BottomSheetModal, 
  useBottomSheetModal 
} from '@gorhom/bottom-sheet'
import { 
  StyleSheet,
  View, 
  Text, 
  TouchableOpacity
} from 'react-native'

import Colors from '../constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], [])
  const renderBackdrop = useCallback((props: any) => 
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, 
  [])
  const { dismiss } = useBottomSheetModal()

  return (
    <BottomSheetModal 
      handleIndicatorStyle={{ display: 'none' }}
      overDragResistanceFactor={0}
      ref={ref} 
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      style={styles.containerBottomModal}
    >
      <View 
        style={styles.containerContent}
      >
        <View 
          style={styles.toggle}
        >
          <TouchableOpacity
            style={styles.toggleActive}
          >
            <Text
              style={styles.activeText}
            >
              Delivery
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toggleInactive}
          >
            <Text
              style={styles.inactiveText}
            >
              Pickup
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={styles.subheader}
        >
          Your Location
        </Text>

        <Link 
          href={'/'}
          asChild
        >
          <TouchableOpacity>
            <View
              style={styles.location}
            >
              <Ionicons 
                name='location-outline'
                size={20}
                color={Colors.medium}
              />
              <Text
                style={styles.locationText}
              >
                Current location
              </Text>
              <Ionicons 
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <Text
          style={styles.subheader}
        >
          Arrival time
        </Text>

        <Link 
          href={'/'}
          asChild
        >
          <TouchableOpacity>
            <View
              style={styles.location}
            >
              <Ionicons 
                name='stopwatch-outline'
                size={20}
                color={Colors.medium}
              />
              <Text
                style={styles.locationText}
              >
                Now
              </Text>
              <Ionicons 
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          onPress={() => dismiss()}
          style={styles.confirmButton}
        >
          <Text 
            style={styles.textButton}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  )
})

export default BottomSheet

// styles
const styles = StyleSheet.create({
  containerBottomModal: {
    borderRadius: 0,
    backgroundColor: Colors.lightGray
  },
  containerContent: {
    flex: 1
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 32
  },
  toggleActive: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    borderRadius: 20
  },
  toggleInactive: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  activeText: {
    color: Colors.lightGray,
    fontWeight: '600'
  },
  inactiveText: {
    color: Colors.primary,
    fontWeight: '600'
  },
  subheader: {
    fontSize: 16,
    fontWeight: '600',
    margin: 16,
    color: '#666'
  },
  location: {
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
    borderColor: Colors.gray,
    borderWidth: 1
  },
  locationText: {
    flex: 1
  },
  confirmButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: 'center'
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  }
})
