export const loadUser = () => {
  try {
    const userData = localStorage.getItem("user");
    if (userData === null) {
      return undefined;
    }
    return JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    return undefined;
  }
};

export const loadReminder = () => {
  try {
    const reminderData = localStorage.getItem("reminderData");
    if (reminderData === null) {
      return undefined;
    }
    return JSON.parse(localStorage.getItem("reminderData"));
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("reminderData", JSON.stringify(state.reminder));
  } catch (err) {}
};
