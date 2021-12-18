import itemService from "../services/itemService";

const url = "http://localhost:3001/api/messages";

const reminderReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_REMINDERS":
      return action.payload;
    case "CREATE_REMINDER":
      return [...state, action.payload];
    case "UPDATE_REMINDER":
      return state.map((blog) => {
        if (blog.id === action.payload.id) return action.payload;
        else return blog;
      });
    case "DELETE_REMINDER":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

export const initializeReminders = () => {
  return async (dispatch) => {
    try {
      const items = await itemService.getAll(`${url}/?type=reminder`);
      console.log(items);
      dispatch({
        type: "INITIALIZE_REMINDERS",
        payload: items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createOneReminder = (message) => {
  return async (dispatch) => {
    try {
      const newMessage = await itemService.createOne(url, message);
      dispatch({
        type: "CREATE_REMINDER",
        payload: newMessage,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateOneReminder = (message) => {
  return async (dispatch) => {
    try {
      const updatedMessage = await itemService.updateOne(
        url,
        message
      );
      dispatch({
        type: "UPDATE_REMINDER",
        payload: updatedMessage,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOneReminder = (id) => {
  return async (dispatch) => {
    try {
      await itemService.deleteOne(url, id);
      dispatch({
        type: "DELETE_REMINDER",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default reminderReducer;
