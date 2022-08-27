import { Dispatch } from "redux"
import { conctactApi } from "../../api/api"

const SET_CONTACTS = 'SET_CONTACTS'
const CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'

const initialState = {
    items : []
}

export const setContacts = (contactArr: any[]) => ({ type: SET_CONTACTS, contactArr })
export const createContact = (contactName: string) => ({ type: CREATE_NEW_CONTACT, newItem: {contact: {name: contactName}} })
export const deleteContact = (id: number) => ({ type: DELETE_CONTACT, id })

export const setContactsThnk = (userId: number) => (dispatch: Dispatch) => {
    conctactApi.getContacts(userId).then(response => {
        dispatch(setContacts(response.data.map((res: any) => ({contact: res.contact, id: res.id}))))
    })
}

export const createContactThnk = (contactName: string, currentUserID: number) => (dispatch: Dispatch) => {
    conctactApi.createContact({ userId: currentUserID, contact: { name :contactName }}).then(response => {
        if (response.statusText === 'Created') {
            dispatch(createContact(contactName))
        }
    })
}

export const deleteContactThnk = (id: number) => (dispatch: Dispatch) => {
    conctactApi.deleteContact(id).then(response =>{
            console.log(response)
            dispatch(deleteContact(id))
        }
    )
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
                items: [...state.items, action.newItem]
            }
        case DELETE_CONTACT :
            return {
                ...state,
                items: state.items.filter((item: any) => item.id !== action.id)
            } 
        default : 
            return state
    }
}