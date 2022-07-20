const initialState = {
  color: '#03C9D7',
  mode: 'Light',
  themeSettings: false,
};

// Action Types
const SET_COLOR = 'SET_COLOR';
const SET_MODE = 'SET_MODE';
const SET_THEME_SETTINGS = 'SET_THEME_SETTINGS';

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
        themeSettings: false
      };
      case SET_MODE:
        return {
          ...state,
          mode: action.payload,
          themeSettings: false
      };
    case SET_THEME_SETTINGS:
      return {
        ...state,
        themeSettings: action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;

// Actions Creators
export const setColor = (color) => {
  window.localStorage.setItem('themeColor', color);
  return {
    type: SET_COLOR,
    payload: color
  };
};

export const setMode = (mode) => {
  window.localStorage.setItem('themeMode', mode);
  return {
    type: SET_MODE,
    payload: mode
  };
};

export const setThemeSettings = (currentState) => {
  return {
    type: SET_THEME_SETTINGS,
    payload: currentState
  };
};
