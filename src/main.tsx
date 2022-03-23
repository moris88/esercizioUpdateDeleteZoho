import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { EmbeddedAppData } from '../lib/ZDK'

const { ZOHO } = window

ZOHO.embeddedApp.on('PageLoad', (data: EmbeddedAppData) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
})
ZOHO.embeddedApp.init()

