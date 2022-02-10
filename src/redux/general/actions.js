import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_POINT,
  SUM_POINT,
  RESET_ITEMS,
} from "./types";

export const addItem = (payload = null) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

export const resetItems = (payload) => ({
  type: RESET_ITEMS,
  payload,
});

export const addPoint = (payload = null) => ({
  type: ADD_POINT,
  payload,
});

export const sumPoint = (payload = null) => ({
  type: SUM_POINT,
  payload,
});
