import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@constants/colorConstants';
import React from 'react';

const ListItem = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{color: COLORS.WHITE}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MATTE_RED,
    padding: 5,
    marginRight: 5,
    marginVertical: 5,
    borderRadius: 4,
  },
});
