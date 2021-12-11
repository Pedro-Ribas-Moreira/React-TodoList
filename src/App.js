import React from "react";
// import { Outlet, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";

const App = (props) => {
  // return (
  //   <header className="header__lp">
  //     <nav className="nav__lp">
  //       <ul className="list__lp">
  //         <Link to="/ladingpage" className="link__lp">
  //           LandingPage
  //         </Link>
  //         <Link to="/dashboard" className="link__lp">
  //           Dashboard
  //         </Link>
  //       </ul>
  //     </nav>
  //     {/* <Outlet /> */}
  //   </header>
  // );
  return <Dashboard />;
};

export default App;
