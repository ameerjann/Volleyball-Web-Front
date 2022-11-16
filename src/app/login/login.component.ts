import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  email: any;
  password: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private service: ApiserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
      login() {

        if(this.email == "jannah@gmail.com" && this.password == '1234'){
          alert("KUPTM EAGELS STRIKE!!!")
          this.router.navigate(['home'])
        }
        else if (this.email == "khalis@gmail.com" && this.password == '1234'){
          alert("KUPTM EAGELS STRIKE!!!")
          this.router.navigate(['home'])
    
        }
        else if (this.email == "akim@gmail.com" && this.password == '1234'){
          alert("KUPTM EAGELS STRIKE!!!")
          this.router.navigate(['home'])
    
        }
        else if (this.email == "ameer@gmail.com" && this.password == '1234'){
          alert("KUPTM EAGELS STRIKE!!!")
          this.router.navigate(['home'])
    
        }
        else if
        (this.email == "saif@gmail.com" && this.password == '1234'){
          alert("KUPTM EAGELS STRIKE!!!")
          this.router.navigate(['home'])
    
        }
        else{
          alert("You are not a user!!")
        }
    
      }
    
    }
