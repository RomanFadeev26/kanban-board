import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({cardId, index, children}) => (
    <Draggable draggableId={cardId} index={index}>
        {(provided) => (
            <div ref={provided.innerRef}
                 className={styles.Card} {...provided.draggableProps} {...provided.dragHandleProps}><div className={styles.inner}>{children}</div></div>
        )}
    </Draggable>
);

Card.propTypes = {
    cardId: PropTypes.string,
    index: PropTypes.number,
    children: PropTypes.node
};

export default Card;
