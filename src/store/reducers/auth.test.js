import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

describe ('Auth Reducer', () =>{

    it ('should return the initial state ' ,() =>{
        expect(reducer(undefined, {})).toEqual(
            {
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectPath: '/'
            }
        );
    });

    it('should store the token upon login', ()=>{
        expect (reducer( {
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        },
        { type: actionTypes.AUTH_SUCCESS, 
            idToken:'some-token',
            userId:'some-user'})).toEqual(
            {
                token: 'some-token',
                userId: 'some-user',
                error: null,
                loading: false,
                authRedirectPath: '/'
            }
        )
    })


    it('should empty the user id and the token upon logout', ()=>{
        expect (reducer( {
            token: 'Some-Token',
            userId: '123123123123',
            error: null,
            loading: false,
            authRedirectPath: '/'
        },
        { type: actionTypes.AUTH_LOGOUT, 
            idToken:null,
            userId:null})).toEqual(
            {
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectPath: '/'
            }
        )
    })

});