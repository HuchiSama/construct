import React from 'react'
import { observer } from 'mobx-react-lite'

import Dashboard from '@components/dashboard'
import { provider } from '@provider'

import './styles/app.less'
import './styles/antd.less'

const App = observer(() => {
  return <Dashboard />;
});

export default provider(App)
