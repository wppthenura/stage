import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { PrivateRoute, PublicRoute } from "./routes/AuthRoutes"; // ✅ must match exports

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><SignUpPage /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
