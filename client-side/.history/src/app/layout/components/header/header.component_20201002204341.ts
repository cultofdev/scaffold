import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public user = localStorage.getItem('username');

    constructor() {}

    ngOnInit() {}

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
