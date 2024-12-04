import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import user from '../features/user/userSlice';
import { listenerMiddleware } from "../middleware/auth";
// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user
    },
    middleware: (getDeafaultMiddleware) => getDeafaultMiddleware()
        .concat(api.middleware)
        .prepend(listenerMiddleware.middleware),
});
