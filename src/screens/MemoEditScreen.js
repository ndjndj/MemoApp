import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoEditInput}>
          <Text>HI</Text>
        </View>
        <CircleButton name="check" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default MemoEditScreen;
