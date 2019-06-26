import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../node_modules/@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            localStorage.setItem('access_token', params['access_token']);
            localStorage.setItem('isUserAuthenticated', params['isUserAuthenticated']);
            localStorage.setItem('username', params['username']);  
            localStorage.setItem('userType', params['userType']);  
        });
    }
}
