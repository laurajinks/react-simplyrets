import React from 'react'
import {ThemeProvider} from '@mui/material'
import {theme} from './theme'
import {BrowserRouter, Routes} from "react-router-dom";
import {routes} from './routes'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider {...{theme}}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {routes}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
