import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {

  addDataForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddFeatureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    this.dialogRef.close(this.addDataForm.value);
  }

  initForm() {
    this.addDataForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['']
    });
  }

  get name() { return this.addDataForm.controls['name']; }
  get desc() { return this.addDataForm.controls['desc']; }

}
