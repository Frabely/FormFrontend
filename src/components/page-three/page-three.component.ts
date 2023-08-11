import {Component, Input} from '@angular/core';
import de from "../../constants/de.json";
import {Company, Language, User} from "../../constants/types";

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent {

  protected readonly de: Language = de;

  @Input() user!: User
  @Input() company!: Company
}
