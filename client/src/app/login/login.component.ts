import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext extends BSModalContext {
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public username: string;
  public password: string;

  constructor(public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context; // this is the dialog reference
    dialog.setCloseGuard(this);
  }

  ngOnInit() {
  }

}
