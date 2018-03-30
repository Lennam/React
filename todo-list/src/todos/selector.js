import { createSelector } from "reselect";
import {FilterTypes} from '../Constants';

const getTodos = (state) => state.todos;
const getFilter = (state) => state.filter;

export const selectVisibleTodos = createSelector(
    [getFilter, getTodos],
    (filter, todos) => {
        switch (filter) {
            case FilterTypes.All:
                return todos;
            case FilterTypes.COMPLETED:
                return todos.filter((item) => item.completed);
            case FilterTypes.UNCOMPLETED:
                return todos.filter((item) => !item.completed);
            default:
                // throw new Error('unsupported filter');
        }
    }
)