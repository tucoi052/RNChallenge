import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {Screen, Text} from '@components';
import {useStyle} from './style';
import {View} from 'react-native';
import {useTheme} from '@theme';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  PinchGestureHandlerGestureEvent,
  PanGestureHandlerGestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PinchGestureHandler,
} from 'react-native-gesture-handler';
import {Preview, ItemSeat} from './components';

const BookingComponent = () => {
  const styles = useStyle();
  const theme = useTheme();

  const zoom = useSharedValue(1);
  const preScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: (event, ctx: any) => {
        if (ctx.start) {
          zoom.value = event.scale * preScale.value;
        }
      },
      onStart: (event, ctx: any) => {
        if (event.numberOfPointers == 2) {
          ctx.start = true;
        }
      },
      onEnd: event => {
        preScale.value = zoom.value;
      },
    });

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    any
  >({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX / zoom.value + context.translateX;
      translateY.value = event.translationY / zoom.value + context.translateY;
    },
    onEnd: () => {},
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: zoom.value},
        {translateX: translateX.value},
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <Screen
      statusBarStyle={'dark-content'}
      backgroundColor={theme.colors.background}>
      <View style={styles.flex}>
        <Preview scale={zoom} translateX={translateX} translateY={translateY} />

        <GestureHandlerRootView style={styles.flex}>
          <PanGestureHandler
            minPointers={1}
            maxPointers={1}
            onGestureEvent={panGestureEvent}>
            <Animated.View>
              <PinchGestureHandler onGestureEvent={pinchHandler}>
                <Animated.View style={[styles.box, rStyle]}>
                  <Text>Màn Hình</Text>
                  <Animated.View style={[styles.item]}>
                    {new Array(100).fill(0).map((_, ind) => (
                      <ItemSeat key={ind} text={ind + 1} />
                    ))}
                  </Animated.View>
                </Animated.View>
              </PinchGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </View>
    </Screen>
  );
};
export const Booking = memo(BookingComponent, isEqual);
