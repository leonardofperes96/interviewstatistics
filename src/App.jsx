import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Landing,
  Register,
  Dashboard,
  AllJobs,
  AddJob,
  Stats,
  Profile,
} from "./pages";
import { ToastContainer } from "react-toastify";
import { ProtectedRoute } from "./components";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route index element={<Stats />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
};

export default App;
