import {configure,shallow} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem'
configure ({adapter : new Adapter() })

describe('<NavigationItem/>', () => {
   
   let wrapper ;

   beforeEach ( ()=>{
    wrapper= shallow(<NavigationItems/>)
   })

    it('should render TWO <NavigationITems/> if the user is NOT authenticated', ()=> {
        
            expect (wrapper.find(NavigationItem)).toHaveLength(2)
    });

    it('should render THREE <NavigationITems/> if the user is authenticated', ()=> {
            // wrapper= shallow(<NavigationItems isAuthenticated/>)
            wrapper.setProps({isAuthenticated:true})
            expect (wrapper.find(NavigationItem)).toHaveLength(3)
    });

    it('should render Logout <NavigationItem link="/logout">Logout</NavigationItem> if the user is authenticated', ()=> {
        // wrapper= shallow(<NavigationItems isAuthenticated/>)
        wrapper.setProps({isAuthenticated:true})
        expect (wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
});

});