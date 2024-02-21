import HomePage from './pages/HomePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './navigation/RootLayout'
import OtherPage from './pages/OtherPage'

import { Provider } from 'react-redux'
import store from './store'

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout />,
      children:[
        { path:"/", element: <HomePage />},
        { path:"/others", element: <OtherPage />},
      ]
    }
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  )
}

export default App
