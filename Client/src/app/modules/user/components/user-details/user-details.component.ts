import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userData :any= null;

  constructor(private userServiceObj: UserService,
    private router: Router,) { }

  ngOnInit(): void {
    this.userServiceObj.getMessage().subscribe(res => {
      console.log(res, '----- subscribe')
      if (res && res.text) {
        this.getUserDetails(res.text);
      } else {
        this.router.navigate(['modules/user']);
      }
    })

  }

  getUserDetails(email: any) {
    this.userServiceObj.getUserDetails(email).then((res: any) => {
      console.log(res, '--- get user details');
      this.userData = res.data ? res.data[0] : {};
    }, (err) => {
      console.log(err)
    })
  }

}
