import React, { useState } from 'react';
import { connect } from 'react-redux';

import Auxi from '../Auxi/Auxi';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout  = (props) =>
 {
  
    const [showSideDrawer, setshowSideDrawer] =useState(false);
  
   
   const sideDrawerClosedHandler = () => {
        setshowSideDrawer(false);       
    }

  const  sideDrawerToggleHandler = () => {        
        setshowSideDrawer(!showSideDrawer);
    }

   
        return (
            <Auxi>
                <Toolbar
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={props.isAuthenticated}
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Auxi>
        );
    
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( layout );