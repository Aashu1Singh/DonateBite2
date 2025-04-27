 import React from "react";
import NavButton from "./NavButton";
import SideNav from "./sideNav";
import { Individuals } from "./Individuals";
//  import SideNav from "../../components/admin/orgrequestlist/sideNav";
//  import OrganizationRequestList from "../../components/admin/organizationRequestList";
//  import NavButton from "../../components/admin/orgrequestlist/NavButton";
 
 export default function DashboarIndivi (){
 
     return(
         <>
             <NavButton/>
             <SideNav/>
             <Individuals/>
         </>
     )
 }