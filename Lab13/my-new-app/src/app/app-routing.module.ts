import { RouterModule, Routes } from "@angular/router";

// import { HomeComponent } from "./home.component";
// import { AboutusComponent } from "./aboutus.component";
// import { RouteComponent } from "./params/route.component";
// import { QueryComponent } from "./params/query.component";
// import { FragmentComponent } from "./params/fragment.component";
// import { PreserveComponent } from "./params/preserve.component";
// import { ParentComponent } from "./parentchild/parent.component";
// import { ChildComponent } from "./parentchild/child.component";
// import { GuardsComponent } from "./guards/guards.component";

// import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
// import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";
import {HomepageComponent} from './homepage/homepage.component';
import {FarmsComponent} from './farms/farms.component';
import { FarmDetailsComponent } from "./farm-details/farm-details.component";
// import { MyCanActivateGuard } from "./mycanactivate.guard";
// import { ErrorComponent } from "./error/error.component";

const MY_ROUTES: Routes = [
    //  { path: '', component: HomeComponent },
    //  { path: 'aboutus', component: AboutusComponent }
    {path: 'homepage', component: HomepageComponent},
    {path: 'farms', component: FarmsComponent},
    // {path: 'profile/:id', component: ProfileComponent, canActivate: [ProfileGuard]},

    // {path: 'farmDetails/:id', component: FarmDetailsComponent, canActivate:[MyCanActivateGuard]},

    {path: 'farmDetails/:id', component: FarmDetailsComponent},

//   {path: 'error', component: ErrorComponent}
  
    // { path: 'farmDetails/:id', component: FarmsComponent, children: [
    //     { path: '', component: FarmDetailsComponent }] },
     
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
