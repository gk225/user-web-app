import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';

export class LoginData{
  name:string ='';
  email:string ='';
  gender:string ='';
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
  loginForm!: FormGroup;
  enableUserName:boolean=false;
  constructor(private formBuilder: FormBuilder, private dataService: DataTransferService, private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      gender: ['Neutral']
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.enableUserName = true;
      this.dataService.setData(this.loginForm.value);
      this.dataService.setFlag(this.enableUserName,)
      this.dataService.setUser(this.loginForm.get('name')?.value)
      this.router.navigate(['/page2']);
      this.enableUserName = true;
      console.log('Form submitted with data:', this.loginForm.value);
    } 
  }

}
