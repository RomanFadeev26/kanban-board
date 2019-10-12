import * as actionTypes from './actionTypes';

export const initialState = {
    'ToDo': [],
    'In Progress': [],
    'Done': []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            const { column, text, id } = action.payload;
            const tasksInColumn = [...state[column], {text, id}];

            return {
                ...state,
                [column]: tasksInColumn
            };
        case actionTypes.MOVE_TASK:
            const {destination, source} = action.payload;
            if(!destination || !source) {
                return state;
            }
            const tasksForRemove = [...state[source.droppableId]];
            const newTaskInList = tasksForRemove.splice(source.index, 1);
            const tasksForInsert = [...state[destination.droppableId]];
            if(destination.droppableId === source.droppableId) {
                tasksForRemove.splice(destination.index, 0, ...newTaskInList);
                console.log(tasksForRemove);
                return {
                    ...state,
                    [destination.droppableId]: tasksForRemove
                }
            }
            tasksForInsert.splice(destination.index, 0, ...newTaskInList);
            return {
                ...state,
                [source.droppableId]: tasksForRemove,
                [destination.droppableId]: tasksForInsert
            }
        default:
            return state;
    }
};

export default reducer;