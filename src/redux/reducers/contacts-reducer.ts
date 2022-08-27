import { Dispatch } from "redux"
import { conctactApi } from "../../api/api"

const SET_CONTACTS = 'SET_CONTACTS'

const initialState = {
    items : []
}

export const setContacts = (contactArr: any[]) => ({ type: SET_CONTACTS, contactArr })

export const setContactsThnk = (userId: number) => (dispatch: Dispatch) => {
    conctactApi.getContacts(userId).then(response => {
        dispatch(setContacts(response.data[0].users))
    })
}

export default function contactReducer (state: any = initialState, action: any) {
    switch(action.type) {
        case SET_CONTACTS :
            return {
                ...state,
                items: action.contactArr

            }
        default : 
            return state        
    }
}