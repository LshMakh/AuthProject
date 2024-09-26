import { NgModule } from "@angular/core";   
import { Route, RouterModule,Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { HeaderComponent } from "./header/header.component";
import { Card } from "../card.model";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";



const routes : Routes = [
    {
        path:'',
        component:MainComponent
    }
];

@NgModule({
    declarations:[
        MainComponent,
        HeaderComponent,
        CardComponent],
    imports:[CommonModule, RouterModule.forChild(routes)],
})
export class MainModule{}