import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSnackBarConfig} from '@angular/material/snack-bar/snack-bar-config';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private defaultSnackConfig: MatSnackBarConfig = {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 50000
  }
  constructor(private toastr: ToastrService) { }

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

  showSuccess(message: string, title: string = '') {
    this.toastr.success(message, title);
  }

  showError(message: string, title: string = '') {
    this.toastr.error(message, title);
  }
}
