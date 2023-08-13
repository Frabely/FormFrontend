import {Component, EventEmitter, Input, Output} from '@angular/core';
import de from "../../constants/de.json";
import {Language, User, UserValidation} from "../../constants/types";
import {
  isValidEmail,
  isValidName,
  isValidPassword
} from "../../functions/validationFunctions";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {

  constructor(private apiService: ApiService) {
  }

  protected readonly de: Language = de;

  @Output() onUserChanged = new EventEmitter<User>();
  @Output() isUserValid = new EventEmitter<UserValidation>
  @Input() user!: User

  userValidation: UserValidation = {
  }

  onUserNameChangeHandler(event: any) {
    this.user = {...this.user, name: event.target.value}
    this.onUserChanged.emit(this.user)
    this.userValidation.name = isValidName(this.user.name)
    this.isUserValid.emit(this.userValidation)
  }

  onUserFirstNameChangeHandler(event: any) {
    this.user = {...this.user, firstName: event.target.value}
    this.onUserChanged.emit(this.user)
    this.userValidation.firstName = isValidName(this.user.firstName)
    this.isUserValid.emit(this.userValidation)
  }

  onUserUsernameChangeHandler(event: any) {
    this.user = {...this.user, username: event.target.value}
    this.onUserChanged.emit(this.user)
    if (isValidName(this.user.username)) {
      this.apiService.isUsernameAvailable(this.user.username).subscribe((isAvailable: boolean) => {
        this.userValidation.username = isAvailable
      })
    }
    else
      this.userValidation.username = false
    this.isUserValid.emit(this.userValidation)
  }

  onUserPasswordChangeHandler(event: any) {
    this.user = {...this.user, password: event.target.value}
    this.onUserChanged.emit(this.user)
    this.userValidation.password = isValidPassword(this.user.password)
    this.userValidation.passwordMatching = this.user.password === this.user.repPassword
    this.isUserValid.emit(this.userValidation)
  }

  onUserRepPasswordChangeHandler(event: any) {
    this.user = {...this.user, repPassword: event.target.value}
    this.onUserChanged.emit(this.user)
    this.userValidation.repPassword = isValidPassword(this.user.repPassword)
    this.userValidation.passwordMatching = this.user.password === this.user.repPassword
    this.isUserValid.emit(this.userValidation)
  }

  onUserEmailChangeHandler(event: any) {
    this.user = {...this.user, email: event.target.value}
    this.onUserChanged.emit(this.user)
    this.userValidation.email = isValidEmail(this.user.email)
    this.isUserValid.emit(this.userValidation)
  }
}
