import React, {forwardRef, useMemo} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {propsToStyle, sizeScale} from '@common';
import {useTheme} from '@theme';

import {BoxProps} from './type';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export const Box = forwardRef(
  (
    {
      left,
      flex,
      top,
      block,
      right,
      w,
      h,
      border,
      middle,
      bottom,
      zIndex,
      m,
      shadow,
      opacity,
      p,
      children,
      maxWidth,
      overflow,
      position,
      flexWrap,
      minWidth,
      alignSelf,
      maxHeight,
      minHeight,
      mt,
      ml,
      alignItems,
      colorTheme,
      pt,
      mr,
      borderStyle,
      pl,
      borderColor,
      borderWidth,
      borderRadius,
      pr,
      mb,
      pb,
      mh,
      mv,
      borderTopColor,
      justifyContent,
      borderTopWidth,
      pv,
      borderLeftWidth,
      borderLeftColor,
      borderRightColor,
      borderRightWidth,
      borderColorTheme,
      ph,
      borderBottomColor,
      borderBottomWidth,
      borderTopLeftRadius,
      borderTopRightRadius,
      color: backgroundColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      direction: flexDirection,
      shadowConfig = {},
      style = {},
      ...rest
    }: BoxProps,
    ref: React.ForwardedRef<View>,
  ) => {
    // state
    const theme = useTheme();

    const styleComponent = useMemo<StyleProp<ViewStyle>>(
      () => [
        block === true && styles.block,
        border === true && {
          borderWidth: 1,
          borderColor: '#bbb',
        },
        colorTheme && {backgroundColor: theme.colors[colorTheme]},
        borderColorTheme && {borderColor: theme.colors[borderColorTheme]},
        middle && {alignItems: 'center'},
        shadow && {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          ...shadowConfig,
        },
        propsToStyle([
          {margin: sizeScale(m!)},
          {marginLeft: sizeScale(ml!)},
          {marginRight: sizeScale(mr!)},
          {marginTop: sizeScale(mt!)},
          {marginBottom: sizeScale(mb!)},
          {marginVertical: sizeScale(mv!)},
          {marginHorizontal: sizeScale(mh!)},
          {flexDirection},
          {padding: sizeScale(p!)},
          {paddingRight: sizeScale(pr!)},
          {paddingBottom: sizeScale(pb!)},
          {paddingLeft: sizeScale(pl!)},
          {paddingTop: sizeScale(pt!)},
          {paddingHorizontal: sizeScale(ph!)},
          {paddingVertical: pv},
          {width: typeof w === 'number' ? sizeScale(w!) : w},
          {height: typeof h === 'number' ? sizeScale(h!) : h},
          {
            maxHeight:
              typeof maxHeight === 'number' ? sizeScale(maxHeight!) : maxHeight,
          },
          {
            maxWidth:
              typeof maxWidth === 'number' ? sizeScale(maxWidth!) : maxWidth,
          },
          {
            minHeight:
              typeof minHeight === 'number' ? sizeScale(minHeight!) : minHeight,
          },
          {
            minWidth:
              typeof minWidth === 'number' ? sizeScale(minWidth!) : minWidth,
          },
          {borderWidth},
          {borderColor},
          {backgroundColor},
          {justifyContent},
          {alignItems},
          {alignSelf},
          {borderRadius},
          {flex},
          {position},
          {flexWrap},
          {left},
          {right},
          {bottom},
          {top},
          {zIndex},
          {overflow},
          {borderBottomColor},
          {borderBottomLeftRadius},
          {borderBottomRightRadius},
          {borderLeftColor},
          {borderRightColor},
          {borderStyle},
          {borderTopColor},
          {borderTopLeftRadius},
          {borderTopRightRadius},
          {opacity},
          {borderBottomWidth},
          {borderLeftWidth},
          {borderRightWidth},
          {borderTopWidth},
        ]),
        style,
      ],
      [
        block,
        border,
        colorTheme,
        theme.colors,
        borderColorTheme,
        middle,
        shadow,
        shadowConfig,
        m,
        ml,
        mr,
        mt,
        mb,
        flexDirection,
        p,
        pr,
        pb,
        pl,
        pt,
        ph,
        pv,
        w,
        h,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        borderWidth,
        borderColor,
        backgroundColor,
        justifyContent,
        alignItems,
        alignSelf,
        borderRadius,
        flex,
        position,
        flexWrap,
        left,
        right,
        bottom,
        top,
        zIndex,
        overflow,
        borderBottomColor,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderLeftColor,
        borderRightColor,
        borderStyle,
        borderTopColor,
        borderTopLeftRadius,
        borderTopRightRadius,
        opacity,
        borderBottomWidth,
        borderLeftWidth,
        borderRightWidth,
        borderTopWidth,
        style,
      ],
    );

    // render
    return (
      <View style={styleComponent} {...rest} ref={ref} children={children} />
    );
  },
);
