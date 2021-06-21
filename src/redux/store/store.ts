
import { createStore } from "redux";
import { rootReducer } from "../rootReducer/rootReducer";


export const store = createStore(rootReducer)