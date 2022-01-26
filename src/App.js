import React from 'react'
import {Layout} from './components/common'
import {ThemeProvider} from '@mui/material'
import {theme} from './theme'

function App() {
  return (
    <ThemeProvider {...{theme}}>
      <Layout>
        Test
      </Layout>
    </ThemeProvider>
  );
}

export default App;
