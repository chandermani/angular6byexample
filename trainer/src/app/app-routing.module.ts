import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutRunnerComponent } from './workout-runner/workout-runner.component';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'workout', component: WorkoutRunnerComponent },
    { path: 'finish', component: FinishComponent },
    { path: '**', redirectTo: '/start' }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        // { enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
