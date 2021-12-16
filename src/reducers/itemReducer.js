import itemService from "../services/itemService";

const url = "http://localhost:3001/api/supplies";

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_ITEMS":
      return action.payload;
    case "CREATE_ITEM":
      return [...state, action.payload];
    case "UPDATE_ITEM":
      return state.map((blog) => {
        if (blog.id === action.payload.id) return action.payload;
        else return blog;
      });
    case "DELETE_ITEM":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

export const initializeItems = () => {
  return async (dispatch) => {
    try {
      const items = await itemService.getAll(url);
      dispatch({
        type: "INITIALIZE_ITEMS",
        payload: items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createOneItem = (item) => {
  return async (dispatch) => {
    try {
      const newItem = await itemService.createOne(url, item);
      dispatch({
        type: "CREATE_ITEM",
        payload: newItem,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateOneItem = (item) => {
  return async (dispatch) => {
    try {
      const updatedItem = await itemService.updateOne(
        url,
        item
      );
      dispatch({
        type: "UPDATE_ITEM",
        payload: updatedItem,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOneItem = (id) => {
  return async (dispatch) => {
    try {
      await itemService.deleteOne(url, id);
      dispatch({
        type: "DELETE_ITEM",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default itemReducer;
