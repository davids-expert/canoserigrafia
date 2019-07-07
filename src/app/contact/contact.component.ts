import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  message: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  async sendEmail() {
    this.http
      .post(
        'https://us-central1-canoserigrafia-site.cloudfunctions.net/email/contact',
        {
          name: this.name,
          phone: this.phone,
          email: this.email,
          message: this.message
        }
      )
      .subscribe(
        () => {
          return;
        },
        error => {
          console.log(error);
        }
      );
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }

  isDisabled() {
    if (this.name && this.email && this.phone && this.message) {
      return false;
    }
    return true;
  }
}
