

export default function Header() {
    return (
        <div className="Header-Anchor">
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" title="Toggle Menu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                <a className="nav-link"></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                <a className="nav-link"></a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                
                {/* Navbar Search
                <li className="nav-item">
                <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                    <i className="fas fa-search" />
                </a>
                <div className="navbar-search-block">
                    <form className="form-inline">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                        </button>
                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                            <i className="fas fa-times" />
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </li>
                {/* End Navbar Search */}

                {/* Messages Dropdown Menu */}

                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown" title="Notifications">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell" />
                    <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-envelope mr-2" /> 4 Expired License
                    <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-users mr-2" /> 8 Salary Card Requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-file mr-2" /> 3 New COD
                    <span className="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
                </li>
                {/* Navbar user panel */}
                <li className="nav-item">
                <a className="nav-link" data-slide="true" title="User Profile" href="#" role="button">
                    <div className="info">
                        <a href="#" className="d-block">Waqas Bhati</a>
                    </div>
                </a>
                </li>
                {/* Navbar Logout User */}
                <li className="nav-item">
                <a className="nav-link" data-widget="logout" title="Logout" href="#" role="button">
                    <i className="fa fa-sign-out" />
                </a>
                </li>
                {/* Navbar Expand Window */}
                <li className="nav-item">
                <a className="nav-link" data-widget="fullscreen" title="Expand Window" href="#" role="button">
                    <i className="fas fa-expand-arrows-alt" />
                </a>
                </li>
            </ul>
            </nav>
            {/* /.navbar */}

        </div>
    )
}
