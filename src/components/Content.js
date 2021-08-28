import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import AccChart from "./AccChart"
import CashOnDelivery from "./CashOnDelivery"
import Deductions from "./Deductions"
import Customers from "./Customers"
import Vendors from "./Vendors"
import Dashboard from "./Dashboard"
import Button from '@material-ui/core/Button';
//ximport MaterialTable from 'material-table'

export default function Home() {
  
    return (
        <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header" id="topishere">
                <div className="container-fluid">
                <div className="row mb-1">
                </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}  
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                <Switch>
                    <Route name="chart-of-accounts" exact path="/AccChart">
                        <AccChart />
                    </Route>
                    <Route name="cash-on-delivery" exact path="/CashOnDelivery">
                        <CashOnDelivery />
                    </Route>
                    <Route name="deductions" exact path="/Deductions">
                        <Deductions />
                    </Route>
                    <Route name="customers" exact path="/Customers">
                        <Customers />
                    </Route>
                    <Route name="vendors" exact path="/Vendors">
                        <Vendors />
                    </Route>

                    
                    <Route name="/" exact path="/">
                        <Dashboard />
                    </Route>
                </Switch>

                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
            </div>
            {/* /.content-wrapper */}
        </>
    )
}
