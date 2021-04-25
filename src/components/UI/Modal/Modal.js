import React, { useEffect }  from 'react';

import classes from './Modal.css';
import Auxi from '../../../hoc/Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const  modal = (props) => {

  useEffect( (nextProps, nextState) =>
   { 
       return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
},[]);
   
       
    
    
   
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