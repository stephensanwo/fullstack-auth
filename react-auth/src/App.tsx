import { Route, Routes } from "react-router-dom";
import { Home, Layout, Error } from "./pages";
import { SignIn, SignUp } from "./pages/Auth";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
