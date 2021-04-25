import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxi from '../Auxi/Auxi';
import useHttpErrorHandler from '../../hooks/http-error-handler'

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
       
        const [error, errorHandler] = useHttpErrorHandler(axios);

        return (
            <Auxi>
                <Modal
                    show={error}
                    modalClosed={errorHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxi>
        );
    }
}

export default withErrorHandler;