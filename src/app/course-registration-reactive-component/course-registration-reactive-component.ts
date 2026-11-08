import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-registration-reactive-component',
  standalone: false,
  templateUrl: './course-registration-reactive-component.html',
  styleUrl: './course-registration-reactive-component.css',
})
export class CourseRegistrationReactiveComponent {
  public regForm: FormGroup = new FormGroup({
    name: new FormControl('Thảo Châu'),
    email: new FormControl('chauttk24411e@st.uel.edu.vn'),
    password: new FormControl(''),
    confirmPass: new FormControl(''),
  });

  setDefaultValues() {
    this.regForm.patchValue({
      name: 'Thảo Châu',
      email: 'chauttk24411e@st.uel.edu.vn'
    });
  }
}