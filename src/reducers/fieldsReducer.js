const initalState = {
  id: "",
  name: "",
  content: "",
  level: "0",
  type: "announcement",
	quantity: "",
  brand: "",
};

const fieldsReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET": 
      return { ...state, ...action.payload };
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_LEVEL":
      return { ...state, level: action.payload };
    case "UPDATE_BRAND":
      return { ...state, brand: action.payload };
    case "UPDATE_CONTENT":
      return { ...state, content: action.payload };
    case "UPDATE_TYPE":
      return { ...state, type: action.payload };
		case "UPDATE_QUANTITY":
      return { ...state, quantity: action.payload };
    case "RESET":
      return initalState;
    default:
      return state;
  }
};

export const set = (details) => {
  return {
    type: "SET",
    payload: details
  };
};

export const updateName = (name) => {
  return {
    type: "UPDATE_NAME",
    payload: name,
  };
};

export const updateContent = (content) => {
  return {
    type: "UPDATE_CONTENT",
    payload: content,
  };
};

export const updateLevel = (level) => {
  return {
    type: "UPDATE_LEVEL",
    payload: level,
  };
};

export const updateType = (type) => {
  return {
    type: "UPDATE_TYPE",
    payload: type,
  };
};

export const updateBrand = (brand) => {
  return {
    type: "UPDATE_BRAND",
    payload: brand,
  };
};

export const updateQuantity = (quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: quantity,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export default fieldsReducer;
