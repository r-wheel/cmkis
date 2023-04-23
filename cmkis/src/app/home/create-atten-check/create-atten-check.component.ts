import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from './services/attendance.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core1/core.service';

@Component({
  selector: 'app-create-atten-check',
  templateUrl: './create-atten-check.component.html',
  styleUrls: ['./create-atten-check.component.scss']
})
export class CreateAttenCheckComponent implements OnInit {
  attendanceForm: FormGroup

   // Eamil
   email = new FormControl('', [Validators.required, Validators.email]);

   getErrorMessage() {
     if (this.email.hasError('required')) {
       return 'You must enter a email';
     }

     return this.email.hasError('email') ? 'Not a valid email' : '';
   }


   // Password
   hide = true;
   hide1 = true;



  constructor(private _fOrMbUiLdEr: FormBuilder,
    private _attendaceService: AttendanceService,
    private _dIaLoGrEf:MatDialogRef<CreateAttenCheckComponent>,
    private _coreServices: CoreService,
    @Inject(MAT_DIALOG_DATA) public data:any) {
    this.attendanceForm =  this._fOrMbUiLdEr.group({
      at_id:'',
      firstname:'',
      middlename:'',
      lastname:'',
      birthday:'',
      email:'',
      username:'',
      connum:'',
      password: new FormControl('',Validators.required),
      conpassword:new FormControl('',Validators.required)
    },
    {
      validators:this.Mustmatch('password','conpassword')
    }
    )
  }

  get f (){
    return this.attendanceForm.controls;
  }

  Mustmatch(password:any,conpassword:any){

    return(formGroup:FormGroup)=> {
      const passwordcontrol = formGroup.controls[password];
      const conpasswordcontrol = formGroup.controls[conpassword];

      if(conpasswordcontrol.errors && !conpasswordcontrol.errors['Mustmatch']){
        return;
      }
       if (passwordcontrol.value!==conpasswordcontrol.value){
        conpasswordcontrol.setErrors({ Mustmatch: true})
       }else{
        conpasswordcontrol.setErrors(null);
       }
    }
  }
  onFormSubmit(){
    if(this.attendanceForm.valid){
      if(this.data){
        this._attendaceService.updateAttendance(this.data.at_id, this.attendanceForm.value).subscribe({
          next: (val:any) => {
              this._coreServices.openSnackBar("Attedance Checker Update Successfully!", 'Done')
              this._dIaLoGrEf.close(true);
          },
          error:(err:any)=>{
              console.error(err);
          }
        })

      }else{

        this._attendaceService.addAttendance(this.attendanceForm.value).subscribe({
          next: (val:any) => {
              this._coreServices.openSnackBar("Attedance Checker Update Successfully!", 'Done')
              this._dIaLoGrEf.close(true);
          },
          error:(err:any)=>{
              console.error(err);
          }
        })

      }

    }
    }

  ngOnInit(): void {
    this.attendanceForm.patchValue(this.data)
  }

   }
