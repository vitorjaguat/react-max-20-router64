import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import RootLayout from './pages/Root';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> },
    ],
  },
  ,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
