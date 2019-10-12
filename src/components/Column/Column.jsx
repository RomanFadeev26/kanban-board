import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Droppable} from 'react-beautiful-dnd';
import Card from '../Card';
import CreateTaskBlock from '../CreateTaskBlock';
import styles from './Column.module.css';

const renderCards = ({text, id}, index) => (<Card cardId={id} key={id} index={index}>{text}</Card>);

const Column = ({droppableId, handleAddBtnClick, children}) => {
    const [isCreating, setIsCreating] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (text && !isCreating) {
            handleAddBtnClick(droppableId, text);
            setText('');
        }
    }, [isCreating, text, handleAddBtnClick, droppableId]);

    const handleCreateBtnClick = useCallback(() => setIsCreating(false), [setIsCreating]);
    const handleChange = useCallback(e => setText(e.target.value), [setText]);
    const handleCancelBtnClick = useCallback(() => {
        setText('');
        setIsCreating(false);
    }, [setText, setIsCreating]);
    const handleAddTaskBtnClick = useCallback(() => setIsCreating(true), [setIsCreating]);

    return (
        <section className={styles.Column}>
            <h2 className={styles.title}>{droppableId}</h2>
            <Droppable
                droppableId={droppableId}
            >
                {(provided, snapshot) => (
                    <React.Fragment>
                        <div
                            className={styles.droppable}
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {children.map(renderCards)}
                            {provided.placeholder}
                            {isCreating && (
                                <CreateTaskBlock
                                    handleCancelBtnClick={handleCancelBtnClick}
                                    handleChange={handleChange}
                                    handleCreateBtnClick={handleCreateBtnClick}
                                />)}

                        </div>
                        <button className={styles.addTaskBtn} onClick={handleAddTaskBtnClick}>+ Добавить задачу
                        </button>
                    </React.Fragment>
                )}
            </Droppable>
        </section>
    );
}

Column.propTypes = {
    droppableId: PropTypes.string,
    handleAddBtnClick: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
    }))
};

export default Column;