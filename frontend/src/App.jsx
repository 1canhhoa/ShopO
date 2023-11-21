import { BrowserRouter, useNavigate, Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes, privateRoutesShop } from './routes/routes'
import DefaultLayout from './layouts/defaultLayout/DefaultLayout'
import { Fragment, useEffect } from 'react'
import { loadSeller, loadUser } from "~/Redux/actions/user";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import ProtectedRouts from './routes/ProtectedRouts';
import ProtectedRoutsShop from './routes/ProtectedRoutsShop';
import Loader from '~/components/Loader';
import { ActionGetAllEvent } from './Redux/actions/event';
import { ActionGetAllCart } from './Redux/actions/cart';
import LoaderBig from './components/LoaderBig';
import ChatClient from './components/ChatClient/ChatClient';
import { server } from '~/contants/contant'
// import './App.css'
function App() {
  const dispatch = useDispatch()
  axios.defaults.baseURL = server
  axios.defaults.withCredentials = true
  const { loading, user, isAthenticated } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(loadUser())
    dispatch(loadSeller())
    dispatch(ActionGetAllEvent())
  }, [dispatch])

  useEffect(() => {
    if (user) {
      dispatch(ActionGetAllCart(user?.email))
    }
  }, [dispatch, user])

  return (
    <>
      {loading ?
        <LoaderBig />
        :
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout
              let Component1 = route.component1
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
              let Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                      {Component1 && user && <Component1 />}
                    </Layout>
                  }
                />
              )
            })}
            {privateRoutes.map((route, index) => {
              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
              let Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={

                    <ProtectedRouts>
                      <Layout>
                        <Page />
                        <ChatClient />
                      </Layout>
                    </ProtectedRouts>
                  }
                />
              )
            })}
            {privateRoutesShop.map((route, index) => {
              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
              let Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <ProtectedRoutsShop>
                      <Layout>
                        <Page />
                      </Layout>
                    </ProtectedRoutsShop>
                  }
                />
              )
            })}
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

        </BrowserRouter>
      }
    </>

  )
}

export default App
