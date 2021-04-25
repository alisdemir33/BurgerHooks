import React, { Component } from 'react';

import classes from './Modal.css';
import Auxi from '../../../hoc/Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {

  const  shouldComponentUpdate = ( nextProps, nextState ) => {
        return nextProps.show !== props.show || nextProps.children !== props.children;
    
    }
   
        return (
            <Auxi>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    {props.children}
                </div>
            </Auxi>
        )
   
}

export default Modal;