import itemService from "../services/itemService";

const url = "/api/messages";

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_MESSAGES":
      return action.payload;
    case "CREATE_MESSAGE":
      return [...state, action.payload];
    case "UPDATE_MESSAGE":
      return state.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        else return item;
      });
    case "DELETE_MESSAGE":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export const initializeMessages = () => {
  return async (dispatch) => {
    try {
      const messages = await itemService.getAll(`${url}`);
      dispatch({
        type: "INITIALIZE_MESSAGES",
        payload: messages,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createOneMessage = (message) => {
  return async (dispatch) => {
    try {
      const newMessage = await itemService.createOne(url, message);
      dispatch({
        type: "CREATE_MESSAGE",
        payload: newMessage,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateOneMessage = (message) => {
  return async (dispatch) => {
    try {
      const updatedMessage = await itemService.updateOne(url, message);
      dispatch({
        type: "UPDATE_MESSAGE",
        payload: updatedMessage,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOneMessage = (id) => {
  return async (dispatch) => {
    try {
      await itemService.deleteOne(url, id);
      dispatch({
        type: "DELETE_MESSAGE",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default messageReducer;
