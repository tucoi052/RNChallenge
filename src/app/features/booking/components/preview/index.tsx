import {sizeScale} from '@common';
import {Box, Text} from '@components';
import {useTheme} from '@theme';
import React, {memo} from 'react';
import {useStyle} from './style';
import {PreviewI} from './type';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import isEqual from 'react-fast-compare';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const scalePreview = 0.3;
const Seat = ({text}: {text: number}) => {
  const styles = useStyle();

  return (
    <Box key={text} style={styles.seat}>
      <Text style={{fontSize: 16 * scalePreview}}>{text}</Text>
    </Box>
  );
};

const PreviewComponent = ({scale, translateX, translateY}: PreviewI) => {
  const theme = useTheme();
  const styles = useStyle();
  const {top, bottom} = useSafeAreaInsets();

  const recStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: 1 / scale.value},
        {translateX: -translateX.value * scalePreview},
        {
          translateY: -translateY.value * scalePreview,
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.boxLeft]}>
      <Animated.View style={[styles.rectangle, recStyle]} />
      <Text fontSize={sizeScale(16 * scalePreview)}> Màn Hình</Text>
      <Animated.View style={[styles.itemLeft]}>
        {new Array(100).fill(0).map((_, ind) => (
          <Seat key={'seat' + ind} text={ind + 1} />
        ))}
      </Animated.View>
    </Animated.View>
  );
};

export const Preview = memo(PreviewComponent, isEqual);
