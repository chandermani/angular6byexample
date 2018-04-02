import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Exercise } from '../../core/model';
import { AlphaNumericValidator } from '../alphanumeric-validator';
import { ExerciseBuilderService } from '../builder-services/exercise-builder.service';


@Component({  selector: 'abe-exercise',
  templateUrl: './exercise.component.html',
  styles: []
})
export class ExerciseComponent implements OnInit, OnDestroy {
  public exercise: Exercise;
  public submitted = false;
  public exerciseForm: FormGroup;
  public model: any;
  public video: any;
  public sub: any;
  public videoArray: FormArray = new FormArray([]);

  constructor(
      public route: ActivatedRoute,
      public router: Router,
      public exerciseBuilderService: ExerciseBuilderService,
      public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.sub = this.route.data
        .subscribe(
          (data: { exercise: Exercise }) => {
            this.exercise = data.exercise;
          }
        );

      this.buildExerciseForm();
  }

  buildExerciseForm() {
      this.exerciseForm = this.formBuilder.group({
          'name': [
            this.exercise.name,
           {
             updateOn: 'submit',
             validators: [Validators.required, AlphaNumericValidator.invalidAlphaNumeric]
            }
          ],
          'title': [this.exercise.title, Validators.required],
          'description': [this.exercise.description, Validators.required],
          'image': [this.exercise.image, Validators.required],
          'nameSound': [this.exercise.nameSound],
          'procedure': [this.exercise.procedure],
          'videos': this.addVideoArray()
      });
  }

  addVideoArray(): FormArray {
      if (this.exercise.videos) {
          this.exercise.videos.forEach((video: any) => {
              this.videoArray.push(new FormControl(video, Validators.required));
          });
      }
      return this.videoArray;
  }

  onSubmit(formExercise: FormGroup) {
      this.submitted = true;
      if (!formExercise.valid) { return; }
      this.mapFormValues(formExercise);
      this.exerciseBuilderService.save();
      this.router.navigate(['/builder/exercises']);
  }

  delete() {
      this.exerciseBuilderService.delete();
      this.router.navigate( ['/builder/exercises'] );
  }

  addVideo() {
      this.exerciseBuilderService.addVideo();
      const vidArray = <FormArray>this.exerciseForm.controls['videos'];
      vidArray.push(new FormControl('', Validators.required));
  }

  canDeleteExercise() {
      this.exerciseBuilderService.canDeleteExercise();
  }

  deleteVideo(index: number) {
      this.exerciseBuilderService.deleteVideo(index);
      const vidArray = <FormArray>this.exerciseForm.controls['videos'];
      vidArray.removeAt(index);
  }

  mapFormValues(form: FormGroup) {
      this.exercise.name = form.controls['name'].value;
      this.exercise.title = form.controls['title'].value;
      this.exercise.description = form.controls['description'].value;
      this.exercise.image = form.controls['image'].value;
      this.exercise.nameSound = form.controls['nameSound'].value;
      this.exercise.procedure = form.controls['procedure'].value;
      this.exercise.videos = form.controls['videos'].value;
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}
