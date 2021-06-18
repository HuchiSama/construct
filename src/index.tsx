import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, stores } from '@stores'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider value={stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
