import { TestBed, inject, async, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { WorkoutService } from './workout.service';
import { WorkoutPlan, Exercise } from './model';

describe('WorkoutService', () => {
  const collectionUrl = 'https://api.mongolab.com/api/1/databases/personaltrainer/collections';
  const apiKey = '9xfTWt1ilKhqIqzV9Z_8jvCzo5ksjexx';
  const params = '?apiKey=' + apiKey;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let workoutService: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ WorkoutService ],
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    workoutService = TestBed.get(WorkoutService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));

  it('can instantiate service with "new"', inject([HttpClient], (http: HttpClient) => {
      expect(http).not.toBeNull('http should be provided');
      const service = new WorkoutService(http);
      expect(service instanceof WorkoutService).toBe(true, 'new service should be ok');
  }));

  it('should should return all workout plans', () => {
    let expectedWorkouts: WorkoutPlan[];
    let actualWorkouts: WorkoutPlan[];

    expectedWorkouts = [
      { name: 'Workout1', title: 'workout1' },
      { name: 'Workout2', title: 'workout2' },
      { name: 'Workout3', title: 'workout3' },
      { name: 'Workout4', title: 'workout4' }
    ] as WorkoutPlan[];

     workoutService.getWorkouts().subscribe(
      workouts => actualWorkouts = workouts,
      fail
    );
    const req = httpTestingController.expectOne(workoutService.collectionsUrl  + '/workouts' + params );
    expect(req.request.method).toEqual('GET');
    req.flush(expectedWorkouts);
    expect(actualWorkouts === expectedWorkouts);
  });

  it('should return a workout plan with a specific name', () => {
    let actualWorkout: WorkoutPlan;
    let expectedWorkout: WorkoutPlan;
    let exercise: any;

    exercise = { name: 'Exercise1' };

    expectedWorkout = {
      name : 'Workout1',
      title : 'Workout 1' ,
      restBetweenExercise: 10,
      totalWorkoutDuration: null,
      exercises : [ { exercise, duration: 20 } ]
    };

    workoutService.getWorkout('Workout1').subscribe(
        workout => actualWorkout = workout,
        fail
    );

    const req1 = httpTestingController.expectOne(workoutService.collectionsUrl  + '/workouts/Workout1' + params);
    expect(req1.request.method).toEqual('GET');
    req1.flush(expectedWorkout);

    const req2 = httpTestingController.expectOne(workoutService.collectionsUrl  + '/exercises' + params);
    expect(req2.request.method).toEqual('GET');
    req2.flush([]);

    expect(actualWorkout === expectedWorkout);
    expect(actualWorkout.name === 'Workout1');
  });

  it('should map exercises to workout plan correctly in getWorkout', () => {
    let actualWorkout: WorkoutPlan;
    let expectedWorkout: WorkoutPlan;
    let exercise2: any;
    let exercise4: any;
    let allExercises: Exercise[];

    exercise2 = { name: 'Exercise2' };
    exercise4 = { name: 'Exercise4' };

    allExercises = [
      { name: 'Exercise1', title: 'Exercise 1', description: 'desc', image: 'img'},
      { name: 'Exercise2', title: 'Exercise 2', description: 'desc', image: 'img'},
      { name: 'Exercise3', title: 'Exercise 3', description: 'desc', image: 'img'},
      { name: 'Exercise4', title: 'Exercise 4', description: 'desc', image: 'img'}
    ];

    expectedWorkout = {
      name : 'Workout1',
      title : 'Workout 1' ,
      restBetweenExercise: 10,
      totalWorkoutDuration: null,
      exercises : [
        { exercise: exercise2, duration: 20 },
        { exercise: exercise4, duration: 30 }
      ]
    };

    workoutService.getWorkout('Workout1').subscribe(
        workout => actualWorkout = workout,
        fail
    );

    const req1 = httpTestingController.expectOne(workoutService.collectionsUrl  + '/exercises' + params);
    expect(req1.request.method).toEqual('GET');
    req1.flush(allExercises);

    const req2 = httpTestingController.expectOne(workoutService.collectionsUrl  + '/workouts/Workout1' + params);
    expect(req2.request.method).toEqual('GET');
    req2.flush(expectedWorkout);
    expect(actualWorkout === expectedWorkout);
    expect(actualWorkout.name).toBe('Workout1');
    expect(actualWorkout.exercises.length).toBe(2);
    expect(actualWorkout.exercises[0].exercise === allExercises[1]);
    expect(actualWorkout.exercises[1].exercise === allExercises[3]);
  });
});
