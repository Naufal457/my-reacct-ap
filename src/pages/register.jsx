//import {Link} from "react-router-dom"
import AuthLayouts from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormRegister/>
           
        </AuthLayouts>
    )
}

export default RegisterPage

//https://youtu.be/SYJpUJmYBRk?si=Dpg3BMK7-7NPu4Ks  Tutorial React JS Bahasa Indonesia : 6.React Router