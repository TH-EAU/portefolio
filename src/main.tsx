import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider as ChackraProvider } from './components/ui/provider.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Loader } from '@chakra-ui/react'
import MicroMarketSimulator from '@/pages/projects/micromarket-simulator_page.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/micromarket-simulator",
    Component: MicroMarketSimulator
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChackraProvider>
      <RouterProvider router={router} />
    </ChackraProvider>
  </StrictMode>,
)
