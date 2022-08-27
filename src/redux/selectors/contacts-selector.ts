export const getContacts = (state: any) => ([...state.contacts.items])

export const getContactsToShow = (state: any) => {
    if (state.contacts.filterName !== '') {
        return state.contacts.items.filter((item: any) => item.contact.name === state.contact.filterName)
    }
    return [...state.contacts.items]
}