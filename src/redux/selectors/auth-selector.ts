export const getIsAuth = (state: any) => state.auth.isAuth

export const getUser = (state: any) => ({...state.auth.user})