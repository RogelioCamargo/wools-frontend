import itemService from "../services/itemService";

const url = "http://localhost:3001/api/messages";

const announcementReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_ANNOUNCEMENTS":
      return action.payload;
    case "CREATE_ANNOUNCEMENT":
      return [...state, action.payload];
    case "UPDATE_ANNOUNCEMENT":
      return state.map((blog) => {
        if (blog.id === action.payload.id) return action.payload;
        else return blog;
      });
    case "DELETE_ANNOUNCEMENT":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

export const initializeAnnouncements = () => {
  return async (dispatch) => {
    try {
      const items = await itemService.getAll(`${url}/?type=announcement`);
      dispatch({
        type: "INITIALIZE_ANNOUNCEMENTS",
        payload: items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createOneAnnouncement = (message) => {
  return async (dispatch) => {
    try {
      const newMessage = await itemService.createOne(url, message);
      dispatch({
        type: "CREATE_ANNOUNCEMENT",
        payload: newMessage,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateOneAnnouncement = (message) => {
  return async (dispatch) => {
    try {
      const updatedMessage = await itemService.updateOne(
        url,
        message
      );
      dispatch({
        type: "UPDATE_ANNOUNCEMENT",
        payload: updatedMessage,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOneAnnouncement = (id) => {
  return async (dispatch) => {
    try {
      await itemService.deleteOne(url, id);
      dispatch({
        type: "DELETE_ANNOUNCEMENT",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default announcementReducer;
