import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FinishComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    WorkoutRunnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
