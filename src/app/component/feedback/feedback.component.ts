import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidationService } from 'src/app/service/validation/custom-validation.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      rateProductivity: ['', Validators.required],
      rateHowProductiveMeetingWas: ['', Validators.required],

      rateObjectivesCommunication: ['', Validators.required],
      rateFollowUpActionsResult: ['', Validators.required],
      rateOwnersWereAssignedAction: ['', Validators.required],
      rateMeetingLeader: ['', Validators.required],
      rateParticipationOpportunity: ['', Validators.required],
      rateInvitedRightCandidates: ['', Validators.required],

      rateIsMeetingStartedTimely: ['', Validators.required],
      rateIsMeetingEndedTimely: ['', Validators.required],

      rateMeetingOrganizer: ['', Validators.required],
      rateMostEffectiveThingAboutMeeting: ['', Validators.required],
      rateLeastEffectiveThingAboutMeeting: ['', Validators.required],

      employeeid: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\nCheck the values in browser console.');
      console.table(this.registerForm.value);
    }
  }
}