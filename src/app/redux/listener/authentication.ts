import {takeLatestListeners} from '@listener';
import {authenticationActions} from '../action-slice/authentication';

// takeLatestListeners(true)({
//   actionCreator: authenticationActions.login,
//   effect: async (action, listenerApi) => {
//     const {body} = action.payload;
//     await listenerApi.delay(1000);
//     const response = await NetWorkService.Post({
//       url: ApiConstants.LOGIN,
//       body,
//     });
//     if (!response) {
//       return;
//     }
//   },
// });
