import itemService from "../services/itemService";

const url = "http://localhost:3001/api/messages";

const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_TICKETS":
      return action.payload;
    case "CREATE_TICKET":
      return [...state, action.payload];
    case "UPDATE_TICKET":
      return state.map((blog) => {
        if (blog.id === action.payload.id) return action.payload;
        else return blog;
      });
    case "DELETE_TICKET":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

export const initializeTickets = () => {
  return async (dispatch) => {
		try {
			const items = await itemService.getAll(`${url}/?type=ticket`);
			dispatch({
				type: "INITIALIZE_TICKETS",
				payload: items,
			});
		} catch (error) {
			console.log(error);
		}
  };
};

export const createOneTicket = (message) => {
  return async (dispatch) => {
		try {
			const newMessage = await itemService.createOne(url, message);
			dispatch({
				type: "CREATE_TICKET",
				payload: newMessage,
			});
		} catch (error) {
			console.log(error);
		}
  };
};

export const updateOneTicket = (message) => {
  return async (dispatch) => {
		try {
			const updatedMessage = await itemService.updateOne(
				url,
				message
			);
			dispatch({
				type: "UPDATE_TICKET",
				payload: updatedMessage,
			});
		} catch (error) {
			console.log(error);
		}
  };
};

export const deleteOneTicket = (id) => {
  return async (dispatch) => {
		try {
			await itemService.deleteOne(url, id);
			dispatch({
				type: "DELETE_TICKET",
				payload: id,
			});
		} catch (error) {
			console.log(error);
		}
  };
};

export default ticketReducer;
