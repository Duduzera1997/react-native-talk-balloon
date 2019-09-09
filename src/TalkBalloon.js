import React from 'react';
import { View, StyleSheet, ViewPropTypes, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const defaultPropTypes = {
  width: 300,
  height: 50,
  borderColor: '#000000',
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: '#FFFFFF',
  triangleOffSet: '20%',
  triangleDirection: 'bottom',
  triangleSize: 10,
  containerStyle: null,
  onPress: null,
  onLongPress: null,
  children: <View />,
};

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  triangleOffSet: PropTypes.string,
  triangleDirection: PropTypes.string,
  triangleSize: PropTypes.number,
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node,
};

const TalkBalloon = ({
  width,
  height,
  borderColor,
  backgroundColor,
  borderRadius,
  borderWidth,
  containerStyle,
  triangleOffSet,
  triangleDirection,
  triangleSize,
  onPress,
  onLongPress,
  children,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
    },
    balloonContainer: {
      margin: triangleSize,
      width,
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
      padding: 8,
      flexDirection: 'row',
    },
    childrenContainer: {
      flex: 1,
    },
  });
  function triangleStyle() {
    const direction = triangleDirection;

    const base = {
      position: 'absolute',
      width: 0,
      height: 0,
      zIndex: 100,
    };
    switch (direction) {
      case 'top':
        return {
          ...base,
          top: 0,
          left: triangleOffSet,
          borderLeftColor: 'transparent',
          borderLeftWidth: triangleSize / 2,
          borderBottomWidth: triangleSize,
          borderBottomColor: borderColor,
          borderRightWidth: triangleSize / 2,
          borderRightColor: 'transparent',
        };
      case 'left':
        return {
          ...base,
          left: 0,
          top: triangleOffSet,
          borderTopColor: 'transparent',
          borderTopWidth: triangleSize / 2,
          borderRightWidth: triangleSize,
          borderRightColor: borderColor,
          borderBottomWidth: triangleSize / 2,
          borderBottomColor: 'transparent',
        };
      case 'right':
        return {
          ...base,
          right: 0,
          top: triangleOffSet,
          borderTopColor: 'transparent',
          borderTopWidth: triangleSize / 2,
          borderLeftWidth: triangleSize,
          borderLeftColor: borderColor,
          borderBottomWidth: triangleSize / 2,
          borderBottomColor: 'transparent',
        };
      default:
        return {
          ...base,
          bottom: 0,
          left: triangleOffSet,
          borderLeftColor: 'transparent',
          borderLeftWidth: triangleSize / 2,
          borderTopWidth: triangleSize,
          borderTopColor: borderColor,
          borderRightWidth: triangleSize / 2,
          borderRightColor: 'transparent',
        };
    }
  }

  function triangleInnerStyle() {
    const direction = triangleDirection;
    switch (direction) {
      case 'top':
        return {
          borderBottomColor: backgroundColor,
          top: borderWidth * 2,
        };
      case 'left':
        return {
          borderRightColor: backgroundColor,
          left: borderWidth * 2,
        };
      case 'right':
        return {
          borderLeftColor: backgroundColor,
          right: borderWidth * 2,
        };
      default:
        return {
          borderTopColor: backgroundColor,
          bottom: borderWidth * 2,
        };
    }
  }
  const ComponentBalloon = onPress || onLongPress ? TouchableOpacity : View;
  return (
    <ComponentBalloon style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <View
        style={[
          styles.balloonContainer,
          width,
          height,
          borderColor,
          borderWidth,
          borderRadius,
          backgroundColor,
          triangleSize,
          containerStyle,
        ]}
      >
        <View style={styles.childrenContainer}>{children}</View>
      </View>
      <View style={[triangleStyle()]} />
      <View style={[triangleStyle(), triangleInnerStyle()]} />
    </ComponentBalloon>
  );
};

TalkBalloon.propTypes = propTypes;
TalkBalloon.defaultProps = defaultPropTypes;

export default TalkBalloon;
