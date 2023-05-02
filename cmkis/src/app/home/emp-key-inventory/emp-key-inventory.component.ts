import { Component , Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KeyinventoryService } from './service/keyinventory.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core1/core.service';

@Component({
  selector: 'app-emp-key-inventory',
  templateUrl: './emp-key-inventory.component.html',
  styleUrls: ['./emp-key-inventory.component.scss']
})
export class EmpKeyInventoryComponent {
  KeyInventoryAdmin: FormGroup;

  constructor(
  private _formbuilder: FormBuilder,
  private _keyInventoryService: KeyinventoryService ,
  private _dialogRef: MatDialogRef<EmpKeyInventoryComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private _coreService:CoreService,
) {
  this.KeyInventoryAdmin = this._formbuilder.group({
    roomName:'',
    userName:'',
    timeStart:'',
  });
}

ngOnInit(): void {
  this.KeyInventoryAdmin.patchValue(this.data);
}
onFormSubmit() {
  if (this.KeyInventoryAdmin.valid) {
    if (this.data) {
      this._keyInventoryService.updateKeyInventory(this.data.id, this.KeyInventoryAdmin.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Key and Room detail updated!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    } else {
      this._keyInventoryService.addKeyInventory(this.KeyInventoryAdmin.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Key and Room added successfully');
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


