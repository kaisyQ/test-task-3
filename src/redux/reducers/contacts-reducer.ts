import { Dispatch } from "redux"
import { conctactApi } from "../../api/api"

const SET_CONTACTS = 'SET_CONTACTS'
const CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const CHANGE_ITEM_NAME = 'CHANGE_ITEM_NAME'
const ADD_FILTER_PARAMS = 'ADD_FILTER_PARAMS'


const initialState = {
    items : [],
    filterName: ''
}

export const setContacts = (contactArr: any[]) => ({ type: SET_CONTACTS, contactArr })
export const createContact = (contactName: string, id: number) => ({ type: CREATE_NEW_CONTACT, newItem: {id, contact: {name: contactName}} })
export const deleteContact = (id: number) => ({ type: DELETE_CONTACT, id })
export const changeName = (newName: string, id: number) => ({ type: CHANGE_ITEM_NAME, newName, id })
export const setFilterParams = (filterName: string) => ({ type: ADD_FILTER_PARAMS, filterName })

export const setContactsThnk = (userId: number) => (dispatch: Dispatch) => {
    conctactApi.getContacts(userId).then(response => {
        dispatch(setContacts(response.data.map((res: any) => ({contact: res.contact, id: res.id}))))
    })
}

export const createContactThnk = (contactName: string, currentUserID: number, tempId: number) => (dispatch: Dispatch) => {
    conctactApi.createContact({ id: tempId, userId: currentUserID, contact: { name :contactName }}).then(response => {
        if (response.statusText === 'Created') {
            dispatch(createContact(contactName, tempId))
        }
    })
}

export const deleteContactThnk = (id: number) => (dispatch: Dispatch) => {
    conctactApi.deleteContact(id).then(response => {
            dispatch(deleteContact(id))
        }
    )
}

export const editContactThnk = (newName: string, id: number, userId: number) => (dispatch: Dispatch) => {
    conctactApi.editContact(id, {userId, contact : {name : newName }}).then(response => {
        dispatch(changeName(newName, id))
    })
}

export default function contactReducer (state: any = initialState, action: any) {
    switch(action.type) {
        case SET_CONTACTS :
            return {
                ...state,
                items: action.contactArr,

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
        case CHANGE_ITEM_NAME :
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            contact: {
                                name: action.newName
                            }
                        }
                    }
                    return item
                })
            }
        case ADD_FILTER_PARAMS :
            return {
                ...state,
                filterName: action.filterName
            }
        default : 
            return state
    }
}