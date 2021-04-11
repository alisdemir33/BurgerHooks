
import {configure,shallow} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import {BurgerBuilder} from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


configure ({adapter : new Adapter() })

describe('<BurgerBuilder/> ', () =>{

    let wrapper=shallow(<BurgerBuilder onInitIngredients = {  () => {}}/>)
    
    it('should render <BuildControls/> if Ingredients exists', ()=>{
        wrapper.setProps({ings:{salad:0, bacon:0, meat:0, cheese:0}})
        expect (wrapper.find(BuildControls)).toHaveLength(1);

    })
})