import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public errorMessage: string;
    public isValidUser: boolean;

    constructor(
        public router: Router,
        public authService: AuthService
    ) {}

    ngOnInit() {
        localStorage.clear();
    }

    onSubmit(value: any) {
        this.authService.login(value.username, value.password, value.userType).subscribe(result => {
            if(result === true) {
                this.router.navigate(['/dashboard']);    
            }
        }, error => {
            this.isValidUser = false;
            this.errorMessage = 'Login failed.. Invalid credentials!';
        });
    }
}
