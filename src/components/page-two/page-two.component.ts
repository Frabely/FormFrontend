import {Component, EventEmitter, Input, Output} from '@angular/core';
import de from "../../constants/de.json";
import {Language, User} from "../../constants/types";

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {

  protected readonly de: Language = de;

  @Output() onUserChanged = new EventEmitter<User>();
  @Input() user!: User

  onUserNameChangeHandler(event: any) {
    this.user = {...this.user, name: event.target.value}
    this.onUserChanged.emit(this.user)
  }

  onUserFirstNameChangeHandler(event: any) {
    this.user = {...this.user, firstName: event.target.value}
    this.onUserChanged.emit(this.user)
  }

  onUserUsernameChangeHandler(event: any) {
    this.user = {...this.user, username: event.target.value}
    this.onUserChanged.emit(this.user)
  }

  onUserPasswordChangeHandler(event: any) {
    this.user = {...this.user, password: event.target.value}
    this.onUserChanged.emit(this.user)
  }

  onUserRepPasswordChangeHandler(event: any) {
    this.user = {...this.user, repPassword: event.target.value}
    this.onUserChanged.emit(this.user)
  }

  onUserEmailChangeHandler(event: any) {
    this.user = {...this.user, email: event.target.value}
    this.onUserChanged.emit(this.user)
  }
}
