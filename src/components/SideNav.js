import logoD from "./logo-dark.png"
import logoL from "./logo-light.png"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import {Link} from 'react-router-dom'
import AccChart from "./AccChart"
import Deductions from "./Deductions"
import CashOnDelivery from "./CashOnDelivery"
import VisaCharges from "./VisaCharges"
import VisaLoans from "./VisaLoans"
import EmployeeAdv from "./EmployeeAdv"
import Customers from "./Customers"
import Vendors from "./Vendors"

export default function SideNav() {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="./" className="brand-link">
                <img src={logoD} alt="logo" className="brand-image img-circle elevation-3" style={{opacity: '.9'}} />
                <span className="brand-text font-weight-light">SA•DeliveryServices</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    
                    <li className="nav-item" id="Accounting">
                    <a href="#" className="nav-link">
                    <i class="far fa-plus-square"></i>
                        <p>
                        Accounting
                        <i className="fas fa-angle-left right" />
                        <span className="right badge badge-danger">2</span>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <Link to="/AccChart">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Chart of Accounts</p>
                        </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Journal Entry</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item" id="LoanSideNav">
                        <a href="#" className="nav-link">
                        <i class="far fa-plus-square"></i>
                            <p>
                            Loan
                            <i className="fas fa-angle-left right" />
                            <span className="right badge badge-danger">2</span>
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <Link to="/VisaCharges">
                            <a className="nav-link">
                            <i class="fas fa-caret-right"></i>
                                <p>Visa Charges</p>
                            </a>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/VisaLoans">
                            <a className="nav-link">
                            <i class="fas fa-caret-right"></i>
                                <p>Visa Loan</p>
                            </a>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Deductions">
                            <a className="nav-link">
                            <i class="fas fa-caret-right"></i>
                                <p>Other Deductions</p>
                            </a>
                            </Link>
                            </li>
                        </ul>
                        </li>
                    <li className="nav-item" id="EmployeesSideNav">
                    <a href="#" className="nav-link">
                    <i class="far fa-plus-square"></i>
                        <p>
                        Employees
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
            
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Employee List</p>
                        </a>

                        </li>
                        <li className="nav-item">
                        <Link to="/EmployeeAdv">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Employee Advances</p>
                        </a>
                        </Link>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item" id="CODSideNav">
                    <Link to="/CashOnDelivery">
                    <a className="nav-link">
                    <i class="far fa-plus-square"></i>
                        <p>
                        Cash On Delivery
                        </p>
                    </a>
                    </Link>
                    </li>
                    <li className="nav-item" id="CustomersSideNav">
                    <Link to="/Customers">
                    <a href="#" className="nav-link">
                    <i class="far fa-plus-square"></i>
                        <p>
                        Customers
                        </p>
                    </a>
                    </Link>
                    </li>
                    <li className="nav-item" id="VendorsSideNav">
                    <Link to="/Vendors">
                    <a href="#" className="nav-link">
                    <i class="far fa-plus-square"></i>
                        <p>
                        Vendors
                        </p>
                    </a>
                    </Link>
                    </li>
                    <li className="nav-item" id="FleetSideNav">
                    <a href="#" className="nav-link">
                    <i class="far fa-plus-square"></i>
                        <p>
                        Fleet
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Mulkiya</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Bike List</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Bike Activity</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item" id="ReportsSideNav">
                    <a href="#" className="nav-link">
                    <i class="far fa-plus-square"></i>
                        <p>
                        Reports
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Report 1</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Report 2</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Report 3</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item" id="SettingsSideNav">
                    <a href="#" className="nav-link">
                    <i class="far fa-plus-square"></i>
                        <p>
                        Settings
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Users</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">
                        <i class="fas fa-caret-right"></i>
                            <p>Activity Log</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>


        </div>
    )
}
