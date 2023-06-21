import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Shopping from './pages/Shopping/Shopping';
import Products from './pages/Products/Products';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/shopping',
      element: <Shopping />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/products',
      element: <Products />,
    },
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
