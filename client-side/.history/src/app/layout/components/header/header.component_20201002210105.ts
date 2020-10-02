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
        ];
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
