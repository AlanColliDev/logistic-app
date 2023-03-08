// React JS
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate, } from 'react-router-dom';

// Styles
import './assets/styles/styles.css';
import './assets/styles/index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Components
import { Login } from './components/Login';
// import { HomePage } from './components/HomePage';
import { DashLogistica } from './layouts/DashLogistica';
import Combustible from './views/logistica/Combustible';
import { UserProvider } from './context/UserProvider';



const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/logistica',
        element: <DashLogistica />,
        children: [
            {
                path: '/logistica/combustible',
                element: <Combustible />,
            },
            {
                path: '/logistica/settings',
                element: <p>Hola soy componente de settings</p>
            }
        ]
    },
    {
        path: '/another-url',
        element: <Navigate to='/' />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
