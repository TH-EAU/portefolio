import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider as ChackraProvider } from './components/ui/provider.tsx'
import './index.css'
import { ColorModeProvider } from './components/ui/color-mode.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChackraProvider>
      <ColorModeProvider forcedTheme='dark' >
        <App />
      </ColorModeProvider>
    </ChackraProvider>
  </StrictMode>,
)
