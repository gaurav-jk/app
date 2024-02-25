import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  //email!: string 
  //password!: string
  email: string = ''; // Initialized inline
  password: string = ''; // Initialized inline

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  login() {
    let credentials = {
      email: this.email,
      password: this.password
    };
    this.http.post('http://localhost:3000/api/auth/signin', credentials)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          localStorage.setItem('User', JSON.stringify(res));
          this.router.navigateByUrl('', { replaceUrl: true });
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    }
    )
    
    console.log(credentials);
  }
}
