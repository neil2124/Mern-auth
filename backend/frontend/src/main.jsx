import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter , 
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import PrivateRoutes from './components/PrivateRoutes';
import ProfileScreen from './screens/ProfileScreen.jsx';
import ViewProfileScreen from './screens/ViewProfileScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />}>
      <Route index={true} path='/' element={ <HomeScreen /> } />
      <Route path='/login' element={ <LoginScreen /> } />
      <Route path='/register' element={ <RegisterScreen /> } />
      <Route path='' element={<PrivateRoutes/>}>
        {/* Private Routes  */}
        <Route path='/profile' element={ <ProfileScreen /> } />
        <Route path='/viewProfile' element={ <ViewProfileScreen /> } />
      </Route>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store } >
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>,
  </Provider>
)
