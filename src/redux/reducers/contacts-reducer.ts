import { Dispatch } from "redux"
import { conctactApi } from "../../api/api"

const SET_CONTACTS = 'SET_CONTACTS'
const CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT'

const initialState = {
    items : []
}

export const setContacts = (contactArr: any[]) => ({ type: SET_CONTACTS, contactArr })
export const createContact = (contactName: string) => ({ type: CREATE_NEW_CONTACT, contactName })

export const setContactsThnk = (userId: number) => (dispatch: Dispatch) => {
    conctactApi.getContacts(userId).then(response => {
        dispatch(setContacts(response.data.map((res: any) => res.contact)))
    })
}

export const createContactThnk = (contactName: string, currentUserID: number) => (dispatch: Dispatch) => {
    conctactApi.createContact({contact: { name :contactName }}).then(response => {
        if (response.statusText === 'Created') {
            dispatch(createContact(contactName))
        }
    })
}

export default function contactReducer (state: any = initialState, action: any) {
    switch(action.type) {
        case SET_CONTACTS :
            return {
                ...state,
                items: action.contactArr

            }
        case CREATE_NEW_CONTACT :
            return {
                ...state,
                items: [...state.items, action.contactName]
            }
        default : 
            return state
    }
}