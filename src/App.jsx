import React, {useReducer, useCallback} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from './components/Column';
import styles from './App.module.css';
import reducer, {initialState} from './state/reducer';
import {addTask, moveTask} from "./state/actions";

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddBtnClick = useCallback((droppableId, text) => dispatch(addTask(droppableId, text)), [dispatch]);
    const handleDragEnd = useCallback((draggable) => dispatch(moveTask(draggable)), [dispatch])

    return (
        <DragDropContext
            onDragEnd={handleDragEnd}
        >
            <div className={styles.App}>
                    {Object.keys(state).map(droppableId => (
                        <Column
                            key={droppableId}
                            droppableId={droppableId}
                            handleAddBtnClick={handleAddBtnClick}>
                            {state[droppableId]}
                        </Column>
                    ))}
            </div>
        </DragDropContext>
    );
}

export default App;
