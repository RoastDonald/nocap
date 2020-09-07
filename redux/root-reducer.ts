import { combineReducers } from 'redux';
import metaReducer from './meta/meta.reducer';

const rootReducer = combineReducers({
  meta: metaReducer,
});
export type rootReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
