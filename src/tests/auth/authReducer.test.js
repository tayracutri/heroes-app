
import { authReducer } from "../../components/auth/authReducer";
import { types } from "../../components/types/types";


describe('test on authReducer', () => {


    test('should return the default value', () => {

        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false })
    })


    test('should authenticate the user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Tay'
            }
        }

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({ logged: true, name: 'Tay' })
    })

    test('should manage the logout', () => {

        const action = {
            type: types.logout

        }

        const state = authReducer({ logged: true, name: 'Tay' }, action);

        expect(state).toEqual({ logged: false })
    })

})
