import { Component, inject } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DataserviceService } from '../services/dataservice.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TagModule, ReactiveFormsModule, CalendarModule,ToastModule, ButtonModule, RippleModule], // This should include GMapModule
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'], // Corrected to styleUrls
  providers: [MessageService]
})
export class ContactUsComponent {
  contactFrom: any = new FormGroup({});
  formData!: any[];
  private dataService = inject(DataserviceService);
  private _fb = inject(FormBuilder);
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.formData = this.dataService.getContactFormData();
    this.bindControls();
  }

  bindControls() {
    let validators: ValidatorFn[] = [];
    this.formData.forEach(control => {
      if (control?.validation_rule) {
        validators = [];
        validators = this.getValidationRules(control);
        const formControl = this._fb.control(null, validators);
        this.contactFrom.addControl(control.control_name, formControl);
      }
    })
  }

  getValidationRules(element: any) {
    let validators: any = [];
    element.validation_rule.forEach((val: any) => {
      if (val.mandation) validators.push(Validators.required)
      if (val.min) validators.push(Validators.minLength(val.min.column_minlength as number))
      if (val.max) validators.push(Validators.maxLength(val.max.column_maxlength as number))
      if (val.mobile) validators.push(Validators.pattern(/^\+?\d{10,15}$/));
      if (val.email) validators.push(Validators.email);
    });
    return validators;
  }
  onSubmit(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submission sucessfull' })
  }
}