const initalState = {
	productModal: false,
	supplyModal: false,
	messageModal: false
};

const modalReducer = (state = initalState, payload) => {
	switch (payload.action) {
    case "TOGGLE_PRODUCT_MODAL":
			return { ...state, productModal: !state.productModal }
    case "TOGGLE_SUPPLY_MODAL":
			return { ...state, supplyModal: !state.supplyModal };
    case "TOGGLE_MESSAGE_MODAL":
			return { ...state, messageModal: !state.messageModal };
    default:
      return state;
  }
}

export const toggleProductModal = () => {
	return {
    type: "TOGGLE_PRODUCT_MODAL",
  };
};

export const toggleSupplyModal = () => {
	return {
    type: "TOGGLE_SUPPLY_MODAL",
  };
};

export const toggleMessageModal = () => {
	return {
    type: "TOGGLE_MESSAGE_MODAL",
  };
};

export default modalReducer;