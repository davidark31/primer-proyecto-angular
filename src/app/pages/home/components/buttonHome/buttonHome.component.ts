import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-buttonHome',
    imports: [CommonModule],
    template: `
    <button (click)="enviarRol(rol)">{{rol}}</button>
    `,

})
export class ButtonHomeComponent {

    @Input() rol: string = '';
    @Output() devolverRol: EventEmitter<string> = new EventEmitter<string>();

    enviarRol(rolName:string) {
        this.devolverRol.emit(rolName);
    }
}
