import * as actionTypes from './actionTypes';
import nanoid from 'nanoid';

const createAction = (type, payload) => ({type, payload});

export const addTask = (column, text) => createAction(actionTypes.ADD_TASK,  { column, text, id: nanoid() });
export const moveTask = ({destination, source}) => createAction(actionTypes.MOVE_TASK, {destination, source});