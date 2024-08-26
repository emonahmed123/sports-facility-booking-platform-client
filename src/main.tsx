import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}/>
      <RouterProvider router={router} />
            

      </Provider>
      
  </StrictMode>,
)
