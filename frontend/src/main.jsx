import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// redux
import { Provider } from "react-redux";
import persistor, { store } from './Redux/store.jsx';
import { PersistGate } from 'redux-persist/integration/react'
// material
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./Theme";
import { StyledEngineProvider } from '@mui/material/styles';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={theme}>
        <CssBaseline>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </CssBaseline>
      </CssVarsProvider>
    </StyledEngineProvider>
  </Provider>,
)
