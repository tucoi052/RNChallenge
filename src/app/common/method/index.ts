/* eslint-disable @typescript-eslint/no-explicit-any */
import {Alert, Platform} from 'react-native';

import {ERROR_NETWORK_CODE} from '@config/api';
import {ResponseBase} from '@config/type';
import {appActions} from '@redux-slice';
import {remove} from '@storage';
import {translate} from '@utils/i18n/translate';

import {STORAGE_KEY_TOKEN} from '../constant';
import {dispatch} from '../redux';

type TypesBase =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined';

export const onShowErrorBase = (msg: string) => {
  Alert.alert(msg);
};
export const onCheckType = (
  source: any,
  type: TypesBase,
): source is TypesBase => {
  return typeof source === type;
};
export const checkKeyInObject = (T: Record<string, unknown>, key: string) => {
  return Object.keys(T).includes(key);
};

export const propsToStyle = (arrStyle: Array<any>) => {
  return arrStyle.filter(
    x =>
      x !== undefined &&
      !Object.values(x).some(v => v === undefined || Number.isNaN(v)),
  );
};

export const execFunc = <Fn extends (...args: any[]) => any>(
  func?: Fn,
  ...args: Parameters<Fn>
) => {
  if (onCheckType(func, 'function')) {
    func(...args);
  }
};

export const isIos = Platform.OS === 'ios';

export const logout = () => {
  dispatch(appActions.logout());
  remove(STORAGE_KEY_TOKEN);
};

const handleData = (responseError: ResponseBase<null>) => {
  return responseError;
};
