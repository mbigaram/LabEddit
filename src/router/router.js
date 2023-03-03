import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../page/loginPage/Login";
import Register from "../page/registerPage/Register";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PostsPage from "../page/postPage/Posts";
// import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";

function Router() {


 return (
   <BrowserRouter>
   <Routes>
       <Route
         path="/"
          element={
           <Login />
           }
        />
       <Route
          path="/register"
          element={
            <Register />
          }
        />
        <Route
          path="/posts"
          element={
            <PostsPage />
          }
        />
        {/*<Route
          path="*"
          element={
            <NotFoundPage />
          }
        /> */}
      </Routes>
    </BrowserRouter>
 );
}

export default Router;