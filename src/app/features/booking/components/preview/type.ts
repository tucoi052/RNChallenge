import {SharedValue} from 'react-native-reanimated';

export interface PreviewI {
  scale: SharedValue<number>;
  translateX: SharedValue<number>;
  translateY: SharedValue<number>;
}
