import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage/LoginPage";
import SignupPage from "../page/SignupPage/SignupPage";
import HomePage from "../page/HomePage/HomePage";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/homepage" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router