import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*">
            <ProtectedRoute path="/dashboard/*" element={<Dashboard />} />
          </Route>

          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
