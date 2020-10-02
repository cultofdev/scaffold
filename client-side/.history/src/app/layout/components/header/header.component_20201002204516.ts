import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public user = 'someusername@someemail.com';

    public megaMenuItems: MegaMenuItem[];

    constructor() {}

    ngOnInit() {}

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
