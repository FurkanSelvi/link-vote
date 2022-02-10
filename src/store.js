import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { applyMiddleware, createStore } from "redux";
import appReducer from "./redux/reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistedReducers = persistReducer(
  {
    key: "items:root",
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['notification'],
  },
  appReducer
);

const middleWare = applyMiddleware(thunk);
export const store = createStore(persistedReducers, middleWare);

export const persist = persistStore(store);
