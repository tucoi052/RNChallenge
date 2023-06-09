import {createDeepEqualSelector} from '@common';
import {RootState} from '@store/all-reducers';

export const selectAppConfig = createDeepEqualSelector(
  (state: RootState) => state.app,
  app => ({
    loadingApp: app.loadingApp,
    showDialog: app.showDialog,
    theme: app.theme,
  }),
);

export const selectChecklist = createDeepEqualSelector(
  (state: RootState) => state.checklist,
  checklist => checklist.listDataChecklist,
);
