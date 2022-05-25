import { configureStore } from '@reduxjs/toolkit'
import neo4jForm from './ducks/neo4j-form.duck';
import uiReducer from './ducks/ui.duck';

export const store = configureStore({
  reducer: {
      ui: uiReducer,
      neo4jForm: neo4jForm
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch