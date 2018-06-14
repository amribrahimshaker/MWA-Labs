import { RouterModule, Routes } from "@angular/router";


import { UsersComponent } from "./users/users.component";
import { ThankyouComponent } from "./thankyou/thankyou.component";

const MY_ROUTES: Routes = [
     { path: '', component: UsersComponent },
     { path: 'thankyou', component: ThankyouComponent }
     
    //  { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
