import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ManagerPage from "./pages/ManagerPage";
import PersonalPage from "./pages/PersonalPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/manager" element={<ManagerPage />}></Route>
        <Route path="/personal" element={<PersonalPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
