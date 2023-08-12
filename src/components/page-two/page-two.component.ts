import {Component, EventEmitter, Input, Output} from '@angular/core';
import de from "../../constants/de.json";
import {Language, User} from "../../constants/types";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidUsername
} from "../../functions/validationFunctions";

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {

  protected readonly de: Language = de;

  @Output() onUserChanged = new EventEmitter<User>();
  @Input() user!: User

  isNameValid?: boolean
  isFirstNameValid?: boolean
  isUsernameValid?: boolean
  isPasswordValid?: boolean
  isRepPasswordValid?: boolean
  isMatchingPasswordValid?: boolean
  isEmailValid?: boolean

  onUserNameChangeHandler(event: any) {
    this.user = {...this.user, name: event.target.value}
    this.onUserChanged.emit(this.user)
    this.isNameValid = isValidName(this.user.name)
  }

  onUserFirstNameChangeHandler(event: any) {
    this.user = {...this.user, firstName: event.target.value}
    this.onUserChanged.emit(this.user)
    this.isFirstNameValid = isValidName(this.user.firstName)
  }

  onUserUsernameChangeHandler(event: any) {
    this.user = {...this.user, username: event.target.value}
    this.onUserChanged.emit(this.user)
    this.isUsernameValid = isValidUsername(this.user.username)
  }

  onUserPasswordChangeHandler(event: any) {
    this.user = {...this.user, password: event.target.value}
    this.onUserChanged.emit(this.user)
    this.isPasswordValid = isValidPassword(this.user.password)
  }

  onUserRepPasswordChangeHandler(event: any) {
    this.user = {...this.user, repPassword: event.target.value}
    this.onUserChanged.emit(this.user)
    this.isRepPasswordValid = isValidPassword(this.user.repPassword)
  }

  onUserEmailChangeHandler(event: any) {
    this.user = {...this.user, email: event.target.value}
    this.onUserChanged.emit(this.user)
    this.isEmailValid = isValidEmail(this.user.email)
  }
}
