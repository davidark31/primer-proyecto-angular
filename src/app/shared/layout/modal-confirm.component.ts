import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-modal-confirm',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './modal-confirm.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class modalConfirm {
    
    constructor(
        private dialogRef: MatDialogRef<modalConfirm>,
        @Inject(MAT_DIALOG_DATA) public data: { mensaje: string, btnNombre: string }) {}

    onConfirm() {
        this.dialogRef.close(true); // Devuelve "true" al padre
    }

    onCancel() {
        this.dialogRef.close(false); // Devuelve "false" al padre
    }
    
    
}
