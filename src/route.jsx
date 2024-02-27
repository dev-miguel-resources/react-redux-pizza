// TEST ID: IIDSAT

import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/atoms/AppLayout/AppLayout'
import Error from './ui/atoms/Error/Error'
import Menu, { loader as menuLoader } from './features/molecules/Menu/Menu'
import Order, { loader as orderLoader } from './features/molecules/Order/Order'
import Cart from './features/molecules/Cart/Cart'
import CreateOrder from './features/molecules/Order/CreateOrder'
import Home from './features/molecules/Home/Home'

/*Routes + state remote -> rutas padres/hijas, actions, error, loading
// Swtich / Route / component -> react router: 5.x
Routes / Route / element -> 6.x */
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
])
