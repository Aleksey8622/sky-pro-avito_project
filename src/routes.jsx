import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import UsersAnnouncement from "./pages/UsersAnnouncement/UsersAnnouncement";
import PersonalAccount from "./pages/PersonalAccount/PersonalAccount";
import UsersAccount from "./pages/UsersAccount/UsersAccount";
import Atclsettings from "./components/modal/atclsettings/Atclsettings";
import Reviews from "./components/modal/reviews/Reviews";
import Layout from "./components/layout/Layout";
import Addnewat from "./components/modal/addnewat/Addnewat";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./components/NotFound/NotFound";

function AppRoutes() {
  const location = useLocation();
  const background = location && location?.state?.background;
  return (
    <AuthProvider>
      <Layout>
        <Routes location={background || location}>
          <Route path="/" element={<HomePage />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/article/:id/*" element={<UsersAnnouncement />}>
              <Route path="edit" element={<Atclsettings />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="/profile" element={<PersonalAccount />}></Route>
            <Route
              path="/sellerprofile/:id/*"
              element={<UsersAccount />}
            ></Route>
          </Route>

          <Route path="/login" element={<AuthPage isLoginMode={true} />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {background && (
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/add" element={<Addnewat />}></Route>
            </Route>
          </Routes>
        )}
      </Layout>
    </AuthProvider>
  );
}

export default AppRoutes;
