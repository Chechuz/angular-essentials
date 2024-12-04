import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], //non standalone comp
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule ] // for standalone comp / DatePipe esta incluido en BrowserModule
    //tambien para importar otros Modules
})
export class AppModule{}