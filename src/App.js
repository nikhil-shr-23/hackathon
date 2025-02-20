import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SingnIn";
import Contact from "./components/ContactUs";
import PatientDashboard from "./pages/PatientDashboard";
import ProtectedRoute from "./utils/Protected";
import TranslationService from "./utils/TranslationService";
import ComparePage from "./pages/ComparePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/dashboard/*"
            element={<ProtectedRoute element={<PatientDashboard />} />}
          />

          <Route path="/compare" element={<ComparePage />} />
        </Route>
      </Routes>
      <TranslationService />
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
