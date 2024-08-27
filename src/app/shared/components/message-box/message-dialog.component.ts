import { Component , Inject} from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamation, faInfo, faCheck } from '@fortawesome/free-solid-svg-icons';

import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-message-dialog',
  standalone: true,
  imports: [FontAwesomeModule,BtnComponent],
  templateUrl: './message-dialog.component.html',
  styleUrl: './message-dialog.component.scss'
})
export class MessageDialogComponent {
  faicon: any = "";

  faExclamation = faExclamation;
  faInfo = faInfo;
  faCheck = faCheck;

  constructor(
    @Inject(DIALOG_DATA) public data: DialogData,
    public dialogRef: DialogRef
  ){}

  ngOnInit(){
    this.faicon = this.data.type=="alert"?faExclamation:this.data.type=="info"?faInfo:faCheck;
    //setTimeout(() => {this.closeSelf()},3000);
  }

  closeSelf(){
    this.dialogRef.close();
  }

  onSave(){}
}
interface DialogData{
  msg: String;
  title: String;
  buttontext: String;
  type: "success" | "alert" | "info"
}
