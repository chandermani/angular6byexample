import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorkoutRunnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
