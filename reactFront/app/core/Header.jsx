import { useEffect, useState } from "react";




const Header = () => {
    const [publishers, setPublishers] = useState([]);

    /* manage side effects */
    // useEffect(() => {
    //     (async () => await load())();
    // }, []);

    return (



<div>
    
    <div className="p-3 mb-3 border-bottom">
   <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a class="navbar-brand" href="/">SP1</a>
         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/warehouse" className="nav-link px-2 link-body-emphasis">Warehouses</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Entities 2</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Entities 3</a></li>
         </ul>
         <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search"> <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input> </form>
        <a class="navbar-brand" href="/">Profile</a>
         <div className="dropdown text-end">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> 
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"></img> </a> 
            <ul className="dropdown-menu text-small">
               <li><a className="dropdown-item" href="#">New project...</a></li>
               <li><a className="dropdown-item" href="#">Settings</a></li>
               <li><a className="dropdown-item" href="#">Profile</a></li>
               <li>
                  <hr className="dropdown-divider"></hr>
               </li>
               <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
         </div>
      </div>
   </div>
   </div>
</div>
    );
}

export default Header;