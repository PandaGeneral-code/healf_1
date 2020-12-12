import containers from "../../containers";
import screens from "../../screens";

export const SET_DRAWER_VISIBILITY = "utils/SET_DRAWER_VISIBILITY";

const initialState = { containers, drawerVisibility: false, screens };

const utilsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_DRAWER_VISIBILITY:
      return { ...state, drawerVisibility: payload.drawerVisibility };
    default:
      return state;
  }
};

export default utilsReducer;
