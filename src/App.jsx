import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/userContext";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TourPage from "./pages/TourPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";
import { Toaster } from "react-hot-toast";
import Account from "./pages/Account";

const queryClient = new QueryClient();
function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path="/signup"
              element={
                <Layout>
                  <Signup />
                </Layout>
              }
            />
            <Route
              path="/account"
              element={
                <Layout>
                  <Account />
                </Layout>
              }
            />
            <Route
              path="/:slug"
              element={
                <Layout>
                  <TourPage />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
        <Toaster
          toastOptions={{
            style: {
              padding: "16px",
              fontSize: "16px",
              fontWeight: "500",
            },
          }}
        />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
