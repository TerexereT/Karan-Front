import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSnackBarConfig} from '@angular/material/snack-bar/snack-bar-config';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private defaultSnackConfig: MatSnackBarConfig = {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 50000
  }
  constructor(private _snackBar: MatSnackBar) { }

  private showSwal(title: string, icon: any, key?: string) {
        Swal.fire({
          title,
          text: key,
          icon,
          confirmButtonColor: '#51be95',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cerrar',
        });
  }

  showAlerts (Text: string, icon: 'success'| 'error', key?:string) {
    return this.showSwal(Text, icon, key);
  }

  showSnackbar(message: string, action: string = '', config: MatSnackBarConfig = this.defaultSnackConfig) {
    this._snackBar.open(message,action,config)
  }
}
