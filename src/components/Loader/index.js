import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';

export default memo(({visible}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" style={styles.indicator} />
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
    backgroundColor: 'black',
  },
  indicator: {
    flex: 1,
  },
});
