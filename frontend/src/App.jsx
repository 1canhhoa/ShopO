import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/routes'
import DefaultLayout from './layouts/defaultLayout/DefaultLayout'
import { Fragment, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import store from "~/Redux/store";
import { loadUser } from "~/Redux/actions/user";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useSelector } from "react-redux";
function App() {
  const { loading } = useSelector(state => state.user)
  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.withCredentials = true
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <>
      {loading ? null :
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index) => {
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
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={2000}
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
