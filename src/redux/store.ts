import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer }                    from "./reducers/users/UsersSlice";
import { usersApi }                        from "./services/UsersService";
import { postsApi }                    from "./services/PostsService";




const rootReducer = combineReducers({
  users: usersReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(usersApi.middleware)
        .concat(postsApi.middleware)
  })
}

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
