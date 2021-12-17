const initalState = {
	productModal: false,
	suppliesModal: false,
	messageModal: false
};

const modalReducer = (state = initalState, action) => {
	switch (action.type) {
    case "TOGGLE_PRODUCT_MODAL":
			return { ...state, productModal: !state.productModal }
    case "TOGGLE_SUPPLY_MODAL":
      console.log(state.suppliesModal);
			return { ...state, suppliesModal: !state.suppliesModal };
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

export const toggleSuppliesModal = () => {
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