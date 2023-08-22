import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { appRoutingModule } from "./app.routing";
import { landingComponent } from "./landing/landing.component";
import { RouterModule } from "@angular/router";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        appRoutingModule
    ],
    exports: [RouterModule],
    declarations: [
        AppComponent,
        landingComponent
    ]
})
export class AppModule{
    
}