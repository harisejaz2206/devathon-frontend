import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // const token = useSelector(selectAuthToken);

  // useLayoutEffect(() => {
  //   if (token) {
  //     HttpService.setToken(token);
  //     localStorage.setItem("token", token);
  //     console.log("Token set globally");
  //   }
  // }, [token]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
