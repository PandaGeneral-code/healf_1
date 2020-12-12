import { combineReducers, createStore } from "redux";

import utils from "./utils";

export const createCleanStore = () => createStore(combineReducers({ utils }));
