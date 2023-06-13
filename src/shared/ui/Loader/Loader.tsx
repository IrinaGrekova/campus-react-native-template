import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {Box} from 'native-base';

type LoaderProps = {};

const colors = ['#4C7CD6', '#689DFC', '#C285F5', '#3973DE', '#9C50DC', '#68BEFC'];
const duration = 1000;

export const Loader: React.FC<LoaderProps> = () => {
  const animatedValues = useRef(colors.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = colors.map((color, i) => {
      return Animated.loop(
        Animated.timing(animatedValues[i], {
          toValue: 1,
          duration,
          useNativeDriver: false,
        })
      );
    });

    const sequence = Animated.stagger(duration / colors.length, animations);
    sequence.start();

    return () => {
      sequence.stop();
    };
  }, [animatedValues]);

  const animatedStyles = animatedValues.map((animatedValue, index) => ({
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [colors[index], colors[(index + 1) % colors.length]],
    }),
  }));


  return (
    <Box style={styles.container}>
      <Box>
        <Box style={styles.row}>
          <Animated.View style={[styles.box, animatedStyles[0]]} />
          <Animated.View style={[styles.box, animatedStyles[1]]} />
          <Animated.View style={[styles.box, animatedStyles[2]]} />
        </Box>
        <Box style={styles.row}>
          <Animated.View style={[styles.box, animatedStyles[3]]} />
          <Animated.View style={[styles.box, animatedStyles[4]]} />
        </Box>
        <Box style={styles.row}>
          <Animated.View style={[styles.box, animatedStyles[5]]} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  row: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  box: {
    width: 20,
    height: 20,
    marginLeft: 2,
    marginBottom: 2,
  },
});
