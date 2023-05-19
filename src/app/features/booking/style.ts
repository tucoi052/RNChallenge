import {useMemo} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from '@theme';
import {sizeScale} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyle = () => {
  const theme = useTheme();
  const {width, height} = useWindowDimensions();
  const {top, bottom} = useSafeAreaInsets();

  return useMemo(
    () =>
      StyleSheet.create({
        item: {
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginHorizontal: sizeScale(60),
          alignItems: 'center',
          justifyContent: 'center',
        },
        flex: {
          width: width,
          height: height - top - bottom,
        },
        box: {
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [],
  );
};
