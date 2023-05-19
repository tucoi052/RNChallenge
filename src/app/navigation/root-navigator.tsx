import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {APP_SCREEN, RootStackParamList} from '@navigation/screen-types';
import {createStackNavigator} from '@react-navigation/stack';
import {Booking} from '@features/booking';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  // effect
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({fade: true});
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  // render
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Group screenOptions={{}}>
        <RootStack.Screen name={APP_SCREEN.HOME} component={Booking} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
