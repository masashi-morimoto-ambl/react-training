import React from 'react'
import { Amplify } from 'aws-amplify'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

if (process.env.REACT_APP_API_MOCKING === 'enabled') {
  // eslint-disable-next-line
  require('@/repositories/mocks').start()
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
