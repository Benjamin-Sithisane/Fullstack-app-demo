import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
         createBrowserRouter, 
         createRoutesFromElements, 
         Route, 
         RouterProvider 
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import PrivateRoute from './components/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
        <Route index='true' path='/' element={<HomeScreen />}/>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        {/* Private Routes */}
        <Route path='' element={<PrivateRoute />}>
          <Route path='/profile' element={<ProfileScreen />} />
        </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  </Provider>
)
