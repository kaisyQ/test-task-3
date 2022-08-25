import { Route, Routes } from "react-router-dom"
import LoginContainer from "./components/Login/LoginContainer"
import ContactContainer from "./components/Contacts/ContactContainer"
import { BrowserRouter } from "react-router-dom"
import { connect } from "react-redux"

const App = (props: any) => {
    return <div className="App">
        <BrowserRouter>
            {props.user ? <h1>{props.user.name}</h1> : null}
            <Routes>
                <Route path="/" element={<ContactContainer />} />
                <Route path="/login" element={<LoginContainer />} />
            </Routes>
        </BrowserRouter>
    </div>
}

const mstp = (state: any) => {
    return {
        user: state.auth.user
    }
}
export default connect(mstp, {})(App)