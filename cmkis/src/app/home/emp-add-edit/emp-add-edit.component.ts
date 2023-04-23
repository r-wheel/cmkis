import { Component, Inject, OnInit, } from '@angular/core';
import { FormControl,Validators,FormBuilder,FormGroup } from '@angular/forms';
import { FacultyyService } from './services/facultyy.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core1/core.service';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent  implements OnInit {

   // Email
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

  reactiveform: FormGroup;
  constructor(
    private formbuilder:FormBuilder,
    private _facultyService: FacultyyService,
    private _dialogRef:MatDialogRef<EmpAddEditComponent>,
    private _coreService:CoreService,
    @Inject(MAT_DIALOG_DATA) public data:any){
    this.reactiveform = this.formbuilder.group({
      firstname:'',
      middlename:'',
      lastname:'',
      birthday:'',
      gender:'',
      email:'',
      username:'',
      contact:'',
      password: new FormControl('',Validators.required),
      conpassword:new FormControl('',Validators.required)
    },
    {
      validators:this.Mustmatch('password','conpassword')
    }
    )
  }

  get f (){
    return this.reactiveform.controls;
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
    if(this.reactiveform.valid){
      if(this.data){
        // this._facultyService.updateFaculty(this.data.id, this.reactiveform.value).subscribe({
        //   next: (val:any) => {
        //       this._coreService.openSnackBar("Faculty Update Successfully!", 'Done')
        //       this._dialogRef.close(true);
        //   },
        //   error:(err:any)=>{
        //       console.error(err);
        //   }
        // })

      }else{

        this._facultyService.addFaculty(this.reactiveform.value).subscribe({
          next: (val:any) => {
              this._coreService.openSnackBar("Faculty Update Successfully!", 'Done')
              this._dialogRef.close(true);
          },
          error:(err:any)=>{
              console.error(err);
          }
        })
      }

    }
    }
    ngOnInit(): void {
      this.reactiveform.patchValue(this.data);
    }
  }


