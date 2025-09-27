import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/Search";
import { PrivateRoute, PublicRoute } from "./routes/AuthRoutes"; // ✅ must match exports

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><SignUpPage /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/search" element={<SearchPage />} /> 
    </Routes>
  );
}

export default App;
