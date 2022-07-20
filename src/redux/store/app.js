
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
  menu: true,
  screenSize: undefined
};

// Action Types
const TOGGLE_MENU = 'TOGGLE_MENU';
const TOGGLE_CART = 'TOGGLE_CART';
const TOGGLE_CHAT = 'TOGGLE_CHAT';
const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS';
const TOGGLE_USER_PROFILE = 'TOGGLE_USER_PROFILE';
const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: !action.payload
      };
    case TOGGLE_CART:
      return {
        ...state,
        chat: false,
        userProfile: false,
        notifications: false,
        cart: !action.payload
      };
    case TOGGLE_CHAT:
      return {
        ...state,
        cart: false,
        userProfile: false,
        notifications: false,
        chat: !action.payload
      };
    case TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        chat: false,
        cart: false,
        userProfile: false,
        notifications: !action.payload
      };
    case TOGGLE_USER_PROFILE:
      return {
        ...state,
        chat: false,
        cart: false,
        notifications: false,
        userProfile: !action.payload
      };
    case SET_SCREEN_SIZE:
      return {
        ...state,
        screenSize: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;

// Action Creators
export const toggleMenu = (currentState) => {
  return {
    type: TOGGLE_MENU,
    payload: currentState
  };
};

export const toggleCart = (currentState) => {
  return {
    type: TOGGLE_CART,
    payload: currentState
  };
};

export const toggleChat = (currentState) => {
  return {
    type: TOGGLE_CHAT,
    payload: currentState
  };
};

export const toggleNotifications = (currentState) => {
  return {
    type: TOGGLE_NOTIFICATIONS,
    payload: currentState
  };
};

export const toggleUserProfile = (currentState) => {
  return {
    type: TOGGLE_USER_PROFILE,
    payload: currentState
  };
};

export const setScreenSize = (size) => {
  return {
    type: SET_SCREEN_SIZE,
    payload: size
  };
};
