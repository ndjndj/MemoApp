import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwesome');

class CircleButton extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { fontLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const {
      name,
      style,
      color,
      onPress,
    } = this.props;
    let bgColor = '#e31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e31676';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="tranceparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { Width: 0, Height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: '#fff',
    fontFamily: 'FontAwesome',
  },
});

export default CircleButton;
