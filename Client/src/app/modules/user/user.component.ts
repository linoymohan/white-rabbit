import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userForm: any = [];
  public userList: any = [];
  public errMsg:any = null;
  constructor(private fb: FormBuilder,
    private userServiceObj: UserService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      intro: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      achievements: ['', [Validators.required]],
    });

    this.getUserList();
  }

  onSubmit() {
    console.log(this.userForm)
    if (this.userForm.valid) {
      this.userServiceObj.postUser(this.userForm.value).then(res => {
        if (res.status == 'success') {
          this.userForm.reset();
          this.getUserList();
        } else {
          this.errMsg = res.message;
        }
      }, err => {

      })
    } else {
      console.log('Form validation failed');
      this.errMsg = 'Form validation failed';
    }

  }

  getUserList() {
    this.spinner.show();
    this.userServiceObj.getUserList().then((res: any) => {
      this.userList = res.data;
      this.spinner.hide();
    }, (err) => {
      this.spinner.hide();
      console.log(err)
    })
  }

  onDetails(user: any) {
    this.userServiceObj.sendMessage(user.email);
    this.router.navigateByUrl('/modules/user/user-detail');
  }

}
