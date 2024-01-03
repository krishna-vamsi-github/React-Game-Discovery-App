import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      // cacheTime: 100_000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
      {/* in production react query dev tools will be removed automatically */}
    </QueryClientProvider>
      
    </ChakraProvider>
  </React.StrictMode>,
)
