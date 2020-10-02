import { Component, OnInit } from '@angular/core';
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

    ngOnInit() {
        this.megaMenuItems = [
            {
                icon: 'fa fa-dashboard',
                label: 'Dashboard',
                routerLink: '/dashboard'
            },
            {
                icon: 'fa fa-sitemap',
                label: 'Menu 1',
                items: [
                    [
                        {
                            label: 'Menu 1.1',
                            items: [
                                {
                                    icon: 'fa fa-check',
                                    label: 'Menu 1.1.1',
                                },
                                {
                                    icon: 'fa fa-list-ul',
                                    label: 'Menu 1.1.2',
                                },
                                {
                                    icon: 'fa fa-clipboard',
                                    label: 'Menu 1.1.3',
                                },
                            ]
                        },
                        {
                            label: 'Menu 1.2',
                            items: [
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 1.2.1',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 1.2.2',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 1.2.3',
                                },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-cubes',
                label: 'Menu 2',
                items: [
                    [
                        {
                            label: 'Menu 2.1',
                            items: [
                                {
                                    icon: 'fa fa-check',
                                    label: 'Menu 2.1.1',
                                },
                                {
                                    icon: 'fa fa-list-ul',
                                    label: 'Menu 2.1.2',
                                },
                                {
                                    icon: 'fa fa-clipboard',
                                    label: 'Menu 2.1.3',
                                },
                            ]
                        },
                        {
                            label: 'Menu 2.2',
                            items: [
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 2.2.1',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 2.2.2',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 2.2.3',
                                },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-tasks',
                label: 'Menu 3',
                items: [
                    [
                        {
                            label: 'Menu 3.1',
                            items: [
                                {
                                    icon: 'fa fa-check',
                                    label: 'Menu 3.1.1',
                                },
                                {
                                    icon: 'fa fa-list-ul',
                                    label: 'Menu 3.1.2',
                                },
                                {
                                    icon: 'fa fa-clipboard',
                                    label: 'Menu 3.1.3',
                                },
                            ]
                        },
                        {
                            label: 'Menu 3.2',
                            items: [
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 3.2.1',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 3.2.2',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 3.2.3',
                                },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-database',
                label: 'Menu 4',
                items: [
                    [
                        {
                            label: 'Menu 4.1',
                            items: [
                                {
                                    icon: 'fa fa-check',
                                    label: 'Menu 4.1.1',
                                },
                                {
                                    icon: 'fa fa-list-ul',
                                    label: 'Menu 4.1.2',
                                },
                                {
                                    icon: 'fa fa-clipboard',
                                    label: 'Menu 4.1.3',
                                },
                            ]
                        },
                        {
                            label: 'Menu 4.2',
                            items: [
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 4.2.1',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 4.2.2',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 4.2.3',
                                },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-clipboard',
                label: 'Menu 5',
                items: [
                    [
                        {
                            label: 'Menu 5.1',
                            items: [
                                {
                                    icon: 'fa fa-check',
                                    label: 'Menu 5.1.1',
                                },
                                {
                                    icon: 'fa fa-list-ul',
                                    label: 'Menu 5.1.2',
                                },
                                {
                                    icon: 'fa fa-clipboard',
                                    label: 'Menu 5.1.3',
                                },
                            ]
                        },
                        {
                            label: 'Menu 5.2',
                            items: [
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 5.2.1',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 5.2.2',
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'Menu 5.2.3',
                                },
                            ]
                        }
                    ]
                ]
            },
        ];
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
