import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-finish-form-label',
  templateUrl: './finish-form-label.component.html',
  styleUrls: ['./finish-form-label.component.css']
})
export class FinishFormLabelComponent {
  @Input() label!: string
  @Input() content!: string
}
