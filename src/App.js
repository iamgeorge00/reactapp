import React from "react"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import Content from "./components/Content"
import Headercss from "./components/Header.css"
import Contentcss from "./components/Content.css"
import Footercss from "./components/Footer.css"
import sideNavcss from "./components/sideNav.css"
//import codcss from "./components/CashOnDelivery.css"
//import Customers from "./components/Customers.css"
import Footer from "./components/Footer"
//import MaterialTable from 'material-table'

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"

function App() {
  
  return (
    <Router>
        <Header />
        <SideNav />
        <Content />
        <Footer />
    </Router>
  );
}

export default App;
