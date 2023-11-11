import React, {memo} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '@constants/colorConstants';
import {X, Hexagon} from 'react-native-feather';
import DrawerPressable from '@components/DrawerButton';

const CustomDrawer = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.alignToRight}>
        <View style={styles.mainMargins}>
          <View style={styles.upperSection}>
            <View style={styles.avatar}>
              <Hexagon stroke={'#808080'} width={30} height={30} />
            </View>
            <View style={styles.headerWrapper}>
              <Text style={styles.headerTitle}>Settings</Text>
            </View>
            <DrawerPressable
              label={'Clear all Data'}
              Icon={Hexagon}
              onPress={() => {}}
              customStyles={{}}
            />
          </View>
          <View style={styles.bottomInteractionButtonWrapper}>
            <TouchableOpacity onPress={onPress} style={styles.avatar}>
              <X stroke={'#808080'} width={30} height={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(CustomDrawer);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.BLACK},
  alignToRight: {
    alignItems: 'flex-end',
    height: '100%',
  },
  mainMargins: {
    marginRight: 30,
    marginVertical: 30,
  },
  headerWrapper: {
    marginVertical: 10,
  },
  upperSection: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  headerTitle: {color: COLORS.WHITE, fontSize: 20, fontWeight: '700'},
  avatar: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
  },
  bottomInteractionButtonWrapper: {alignItems: 'flex-end'},
});
