import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_POINT,
  SUM_POINT,
  RESET_ITEMS,
} from "./types";

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, ...[action.payload]],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case ADD_POINT:
      return {
        ...state,
        items: state.items.map((i) => {
          const newItem = { ...i };
          if (newItem.id === action.payload && newItem.point < 10)
            newItem.point += 1;
          return newItem;
        }),
      };
    case SUM_POINT:
      return {
        ...state,
        items: state.items.map((i) => {
          const newItem = { ...i };
          if (newItem.id === action.payload)
            newItem.point -= 1;
          return newItem;
        }),
      };
    case RESET_ITEMS:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}
