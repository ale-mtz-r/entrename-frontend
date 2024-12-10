import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";


function Layout() {
    return ( 
        <>
            <Sidebar />
            {/* <Topbar /> */}
            <div className=" ml-sidebarWidth bg-white w-contentWidth h-svh z-10 overflow-x-hidden" >
                <div className="p-3 bg-slate-100 z-10">
                    <Outlet />
                </div>
            </div>
        </>
     );
}

export { Layout } ;