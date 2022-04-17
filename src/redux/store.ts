import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer }                    from "./reducers/users/UsersSlice";




const rootReducer = combineReducers({
  users: usersReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
