import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './src/App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />} />
  )
)

export { router }