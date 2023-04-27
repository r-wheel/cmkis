import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirstsemService } from './service/firstsem.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core1/core.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emp-firstsem',
  templateUrl: './emp-firstsem.component.html',
  styleUrls: ['./emp-firstsem.component.scss']
})
export class EmpFirstsemComponent implements OnInit {

  private sub: Subscription;
  userId: number = null;

  cycles: string [] =  [
    'Monday',
    'Tuesday',
    'Wednestday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
 firstYear: String [] =[
    '1A',
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
 secondYear: string [] = [
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
thirdYear: string [] = [
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
fourthYear: string [] = [

    '4A',
    '4A G-1',
    '4A G-2',
    '4B',
    '4B G-1',
    '4B G-2',
    '4C',
    '4C G-1',
    '4C G-2',
    '4D',
    '4D G-1',
    '4D G-2',
    '4E',
    '4E G-1',
    '4E G-2',
    '4F',
    '4F G-1',
    '4F G-2',
    '4G',
    '4G G-1',
    '4G G-2',
    '4H',
    '4H G-1',
    '4H G-2',
    '4I',
    '4I G-1',
    '4I G-2',
    '4J',
    '4J G-1',
    '4J G-2',
    '4K',
    '4K G-1',
    '4K G-2',
    '4L',
    '4L G-1',
    '4L G-2',
    '4M',
    '4M G-1',
    '4M G-2',
    '4N',
    '4N G-1',
    '4N G-2',
    '4O',
    '4O G-1',
    '4O G-2',
    '4P',
    '4P G-1',
    '4P G-2',
    '4Q',
    '4Q G-1',
    '4Q G-2',
    '4R',
    '4R G-1',
    '4R G-2',
    '4S',
    '4S G-1',
    '4S G-2',

  ]

Firstsem: FormGroup;
days = new FormControl('', [Validators.required, Validators.email]);
sections = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private activatedRoute: ActivatedRoute,
    private _formbuilder: FormBuilder,
    private _empService: FirstsemService,
    private _dialogRef: MatDialogRef<EmpFirstsemComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
  ) {
    this.Firstsem = this._formbuilder.group({
      facultyid: '',
      coursecode: '',
      subject: '',
      section: '',
      day: '',
      time_start: '',
      time_end: '',
      room: '',
    });
  }

  private id: number = 0;

  ngOnInit(): void {
    this.Firstsem.patchValue(this.data);
    this.id = parseInt(localStorage.getItem('faculty-id'));
  }

  onFormSubmit() {



    if (this.Firstsem.valid) {
      console.log(this.userId);
      if (this.data) {
        this._empService.updatefirstSem(this.data.facultyid, this.Firstsem.value).subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }
      else {
        this._empService.addfirstSem(this.id, this.Firstsem.value).subscribe({
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
