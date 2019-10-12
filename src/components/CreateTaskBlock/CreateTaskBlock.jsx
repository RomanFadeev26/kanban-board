import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateTaskBlock.module.css';

const CreateTaskBlock = ({
    handleChange,
    handleCreateBtnClick,
    handleCancelBtnClick
}) => (
    <div className={styles.newCard}>
        <textarea onChange={handleChange} />
        <div className={styles.buttons}>
            <button
                onClick={handleCreateBtnClick}
                className={styles.addTextBtn}
            >
                Create!
            </button>
            <button onClick={handleCancelBtnClick} className={styles.cancelBtn}>×
            </button>
        </div>
    </div>
);

CreateTaskBlock.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleCreateBtnClick: PropTypes.func.isRequired,
    handleCancelBtnClick: PropTypes.func.isRequired
}

export default CreateTaskBlock;
