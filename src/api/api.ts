import axios from "axios";

interface IlogUser {
    email: string,
    password: string
} 

const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const authApi = {
    login: ({ email, password }: IlogUser) => instance.get(`users/?email=${email}&password=${password}`)
}

export const conctactApi = {
    getContacts: (userId: number) => instance.get(`contacts/?userId=${userId}`),
    createContact: (newContactObject: any) => instance.post(`contacts`, newContactObject),
    deleteContact: (id: number) => instance.delete(`contacts/${id}`),
    editContact: (id: number, newDataObj: any) => instance.put(`contacts/${id}`, newDataObj)
}