
import { ADDRESS_LABEL, FORMAT_ADDRESS_LABEL } from "../constants/ActionTypes";

const INIT_STATE = {
  addressLabel: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADDRESS_LABEL: {
      return { ...state, addressLabel: action.payload };
    }
    case FORMAT_ADDRESS_LABEL: {
      return { ...state, addressLabel: "" };
    }

    default:
      return state;
  }
};
