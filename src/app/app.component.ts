import { Component , OnInit } from '@angular/core';
import { LineLiffService } from './service/line-liff/line-liff.service';

declare var liff: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrondEnd';
  messages: string;
  userProfile: any;
  constructor(private lineLiffService: LineLiffService) {
    this.messages = "";
    this.initLineLiff();
  }

  async ngOnInit() {
    await this.initLineLiff();
  }

  async initLineLiff() {
    try {
      const data: any = await this.lineLiffService.initLineLiff();
      this.userProfile = await liff.getProfile();
      alert(`Hi ${this.userProfile.displayName}!`);
    } catch (err) {
      // alert(err)
    }
  }

  async sendMessages() {
    try {
      const successMsgs = await liff.sendMessages([
        {
          type: 'text',
          text: this.messages
        }
      ])
      liff.closeWindow()


    } catch (e) {
      alert(e)
    }

  }
}