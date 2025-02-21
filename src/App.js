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
import Urology from "./pages/Urology";
import Orthopedic from "./pages/Orthopedic";
import Cardiology from "./pages/Cardiology";
import Ophthalmology from "./pages/Ophthalmology";
import AnalysisPage from "./pages/AnalysisPage";
import ChatbotPage from "./pages/ChatbotPage";
import Neurology from "./pages/Neurology";
import Pediatrics from "./pages/Pediatrics";
import Surgery from "./pages/Surgery";
import Pkgpage from "./pages/Pkgpage";
import Chatdoc from "./pages/Chatdoc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/pediatrics" element={<Pediatrics/>} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/Neurology" element={<Neurology />} />
          <Route path="/Pkgpage" element={<Pkgpage />} />
          <Route path="/Chatdoc" element={<Chatdoc/>} />
      
          <Route path="/srg" element={<Surgery />} />
          <Route
            path="/dashboard/*"
            element={<ProtectedRoute element={<PatientDashboard />} />}
          />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
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
