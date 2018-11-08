import {combineReducers} from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";
// reducer is a function that returns a piece of app state
// reducers produces de value of the state
const rootReducer = combineReducers({
  books: BooksReducer, // global application state
  activeBook: ActiveBook
});

export default rootReducer;
