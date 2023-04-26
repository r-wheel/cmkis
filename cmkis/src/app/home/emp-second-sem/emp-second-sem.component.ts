import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SecomdSemService } from './service/secomd-sem.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core1/core.service';

@Component({
  selector: 'app-emp-second-sem',
  templateUrl: './emp-second-sem.component.html',
  styleUrls: ['./emp-second-sem.component.scss']
})
export class EmpSecondSemComponent implements OnInit {
  cycles2: string [] =  [
    'Monday',
    'Tuesday',
    'Wednestday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
 firstYear2: String [] =[
    '1A G-1',
    '1A G-2',
    '1B G-1',
    '1B G-2',
    '1C G-1',
    '1C G-2',
    '1D G-1',
    '1D G-2',
    '1E G-1',
    '1E G-2',
    '1F G-1',
    '1F G-2',
    '1G G-1',
    '1G G-2',
    '1H G-1',
    '1H G-2',
  ];
 secondYear2: string [] = [
    '2A G-1',
    '2A G-2',
    '2B G-1',
    '2B G-2',
    '2C G-1',
    '2C G-2',
    '2D G-1',
    '2D G-2',
    '2E G-1',
    '2E G-2',
    '2F G-1',
    '2F G-2',
    '2G G-1',
    '2G G-2',
    '2H G-1',
    '2H G-2',
    '2I G-1',
    '2I G-2',
    '2J G-1',
    '2J G-2',
  ]
thirdYear2: string [] = [
    '3A G-1',
    '3A G-2',
    '3B G-2',
    '3B G-1',
    '3C G-2',
    '3C G-1',
    '3D G-2',
    '3D G-1',
    '3E G-2',
    '3E G-1',
    '3F G-2',
    '3F G-1',
    '3G G-2',
    '3G G-1',
    '3H G-2',
    '3H G-2',
    '3I G-1',
    '3I G-2',
    '3J G-1',
    '3J G-2',
  ] 
fourthYear2: string [] = [

    '4A G-1',
    '4A G-2',
    '4B G-1',
    '4B G-2',
    '4C G-1',
    '4C G-2',
    '4D G-1',
    '4D G-2',
    '4E G-1',
    '4E G-2',
    '4F G-1',
    '4F G-2',
    '4G G-1',
    '4G G-2',
    '4H G-1',
    '4H G-2',
    '4I G-1',
    '4I G-2',
    '4J G-1',
    '4J G-2',
    '4K G-1',
    '4K G-2',
    '4L G-1',
    '4L G-2',
    '4M G-1',
    '4M G-2',
    '4N G-1',
    '4N G-2',
    '4O G-1',
    '4O G-2',
    '4P G-1',
    '4P G-2',
    '4Q G-1',
    '4Q G-2',
    '4R G-1',
    '4R G-2',
    '4S G-1',
    '4S G-2',

  ]

  SecondSem: FormGroup;
  days2 = new FormControl('', [Validators.required, Validators.email]);
  sections2 = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private _formbuilder: FormBuilder,
    private _SecondsemService: SecomdSemService,
    private _dialogRef: MatDialogRef<EmpSecondSemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
  ) {
    this.SecondSem = this._formbuilder.group({
      courseCode2: '',
      subject2: '',
      room2: '',
      day2: '',
      section2: '',
      timeStart2: '',
      timeEnd2: '',
    });
  }

  ngOnInit(): void {
    this.SecondSem.patchValue(this.data);
  }

  onFormSubmit2() {
    if (this.SecondSem.valid) {
      if (this.data) {
        this._SecondsemService.updateSecondSem(this.data.id, this.SecondSem.value).subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._SecondsemService.addSecondSem(this.SecondSem.value).subscribe({
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
