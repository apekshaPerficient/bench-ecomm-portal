import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/slices/userSlice'
export const rootReducer = combineReducers({user: userReducer});