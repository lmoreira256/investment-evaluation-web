import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  showSuccess(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['success-snackbar'],
      verticalPosition: 'top',
    });
  }

  showError(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top',
    });
  }

  showWarning(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['warning-snackbar'],
      verticalPosition: 'top',
    });
  }
}
