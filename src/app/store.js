import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import reminderSlice from "../features/reminderSlice";
import { loadUser, loadReminder, saveState } from "../utils/localStorage";

const rootReducer = {
  user: userReducer,
  reminder: reminderSlice,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    user: loadUser(),
    reminder: loadReminder(),
  },
});

store.subscribe(() => {
  saveState({
    user: store.getState().user,
    reminder: store.getState().reminder,
  });
});

export default store;
