import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core1/core.service';
import { KeyManagementService } from './service/key-management.service';

@Component({
  selector: 'app-emp-keymanagement',
  templateUrl: './emp-keymanagement.component.html',
  styleUrls: ['./emp-keymanagement.component.scss']
})
export class EmpKeymanagementComponent implements OnInit {

Keymanagement: FormGroup;


  constructor(
    private _formbuilder: FormBuilder,
    private _KeyService: KeyManagementService,
    private _dialogRef: MatDialogRef<EmpKeymanagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
  ) {
    this.Keymanagement = this._formbuilder.group({
      roomName:'',
      roomId:'',
    });
  }

  ngOnInit(): void {
    this.Keymanagement.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.Keymanagement.valid) {
      if (this.data) {
        this._KeyService.updateKeymanagement(this.data.roomId, this.Keymanagement.value).subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._KeyService.addKeymanagement(this.Keymanagement.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

}
