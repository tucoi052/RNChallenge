import {useMemo} from 'react';
import {Dimensions, StyleSheet, useWindowDimensions} from 'react-native';

import {useTheme} from '@theme';
import {sizeScale} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const scalePreview = 0.3;

export const useStyle = () => {
  const theme = useTheme();
  const {width, height} = useWindowDimensions();

  const {top, bottom} = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        seat: {
          backgroundColor: 'grey',
          width: sizeScale(30 * scalePreview),
          height: sizeScale(30 * scalePreview),
          margin: 1 * scalePreview,
          alignItems: 'center',
          justifyContent: 'center',
        },
        rectangle: {
          width: width * scalePreview,
          height: (height - top - bottom) * scalePreview,
          backgroundColor: 'transparent',
          borderColor: 'red',
          borderWidth: 1,
          position: 'absolute',
          zIndex: 100,
        },
        itemLeft: {
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginHorizontal: sizeScale(60 * scalePreview),
          alignItems: 'center',
          justifyContent: 'center',
        },
        boxLeft: {
          alignItems: 'center',
          justifyContent: 'center',
          width: width * scalePreview,
          height: (height - top - bottom) * scalePreview,
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          top: 10,
          left: 10,
          overflow: 'hidden',
          zIndex: 99,
        },
      }),
    [],
  );
};
