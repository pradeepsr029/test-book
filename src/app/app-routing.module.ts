import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CarDetailsComponent } from './car-details/car-details.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
    {
        path: "",
        component: ListingComponent
    },
    {
        path: "details/:id",
        component: CarDetailsComponent
    }
]; // sets up routes constant where you define your routes

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }