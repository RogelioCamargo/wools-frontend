const initalState = {
  name: "",
  content: "",
  level: "0",
  type: "",
  brand: "",
};

const fieldsReducer = (state = initalState, action) => {
  switch (action.type) {
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
    case "RESET":
      return initalState;
    default:
      return state;
  }
};

export const updateName = (name) => {
  return {
    type: "UPATE_NAME",
    payload: name,
  };
};

export const updateContent = (content) => {
  return {
    type: "UPATE_CONTENT",
    payload: content,
  };
};

export const updateLevel = (level) => {
  return {
    type: "UPATE_LEVEL",
    payload: level,
  };
};

export const updateType = (type) => {
  return {
    type: "UPATE_TYPE",
    payload: type,
  };
};

export const updateBrand = (brand) => {
  return {
    type: "UPATE_BRAND",
    payload: brand,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export default fieldsReducer;
