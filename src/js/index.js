//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'
import "../styles/index.css";//include your index.scss file into the bundle
import Layout from './Layout.js'//import your own components
//

const root = createRoot(document.querySelector("#app"))
root.render(<Layout/>) //render your react application

