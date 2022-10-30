import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ManagerPage from "./pages/ManagerPage";
import PersonalPage from "./pages/PersonalPage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        {authContext.isLoggedIn && (
          <Route path="/manager" element={<ManagerPage />}></Route>
        )}
        {authContext.isLoggedIn && (
          <Route path="/personal" element={<PersonalPage />}></Route>
        )}
        {!authContext.isLoggedIn && (
          <Route path="/*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Layout>
  );
}

export default App;
