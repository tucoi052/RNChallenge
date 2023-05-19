import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {useTheme} from '@theme';
import {sizeScale} from '@common';

export const useStyle = () => {
  const theme = useTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        item: {
          backgroundColor: theme.colors.grey,
          width: sizeScale(30),
          height: sizeScale(30),
          margin: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [theme.colors.text],
  );
};
