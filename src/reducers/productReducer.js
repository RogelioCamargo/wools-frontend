import itemService from "../services/itemService";

const url = "http://localhost:3001/api/products";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return action.payload;
    case "CREATE_PRODUCT":
      return [...state, action.payload];
    case "UPDATE_PRODUCT":
      return state.map((blog) => {
        if (blog.id === action.payload.id) return action.payload;
        else return blog;
      });
    case "DELETE_PRODUCT":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

export const initializeProducts = () => {
  return async (dispatch) => {
    try {
      const items = await itemService.getAll(url);
      dispatch({
        type: "INITIALIZE_PRODUCTS",
        payload: items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createOneProduct = (item) => {
  return async (dispatch) => {
    try {
      const newItem = await itemService.createOne(url, item);
      dispatch({
        type: "CREATE_PRODUCT",
        payload: newItem,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateOneProduct = (item) => {
  return async (dispatch) => {
    try {
      const updatedItem = await itemService.updateOne(
        `${url}/${item.id}`,
        item
      );
      dispatch({
        type: "UPDATE_PRODUCT",
        payload: updatedItem,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOneProduct = (id) => {
  return async (dispatch) => {
    try {
      await itemService.deleteOne(`${url}/${id}`, id);
      dispatch({
        type: "DELETE_PRODUCT",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default productReducer;
