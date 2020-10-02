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

    ngOnInit() {
        this.megaMenuItems = [
            {
                icon: 'fa fa-dashboard',
                label: 'Dashboard',
                routerLink: '/dashboard'
            },
            {
                icon: 'fa fa-sitemap',
                label: 'Office',
                items: [
                    [
                        {
                            label: 'Transaction',
                            items: [
                                {
                                    icon: 'fa fa-check',
                                    label: 'OPCR A',
                                    routerLink: '/office',
                                    queryParams: { type: 'a', subType: 'Office Performance Commitment and Review - Form A' }
                                },
                                {
                                    icon: 'fa fa-list-ul',
                                    label: 'OPCR B',
                                    routerLink: '/office',
                                    queryParams: { type: 'b', subType: 'Office Performance Commitment and Review - Form B' }
                                },
                                {
                                    icon: 'fa fa-clipboard',
                                    label: 'OPAR',
                                    routerLink: '/office',
                                    queryParams: { type: 'o', subType: 'Office Performance Accomplishment Report' }
                                },
                            ]
                        },
                        {
                            label: 'Report',
                            items: [
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'OPCR A',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'b' }
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'OPCR B',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'b' }
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'OPAR',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'o' }
                                },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-cubes',
                label: 'Division',
                items: [
                    [
                        {
                            label: 'Transaction',
                            items: [
                                {
                                    icon: 'fa fa-check',
                                    label: 'DPCR A',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'a' }
                                },
                                {
                                    icon: 'fa fa-list-ul',
                                    label: 'DPCR B',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'b' }
                                },
                                {
                                    icon: 'fa fa-clipboard',
                                    label: 'DPAR',
                                    routerLink: '/dpar',
                                    queryParams: { type: 'o' }
                                },
                            ]
                        },
                        {
                            label: 'Report',
                            items: [
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'DPCR A',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'b' }
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'DPCR B',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'b' }
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'DPAR',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'o' }
                                },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-user',
                label: 'Individual',
                items: [
                    [
                        {
                            label: 'Transaction',
                            items: [
                                {
                                    icon: 'fa fa-check',
                                    label: 'IPCR A',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'a' }
                                },
                                {
                                    icon: 'fa fa-list-ul',
                                    label: 'IPCR B',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'b' }
                                },
                                {
                                    icon: 'fa fa-clipboard',
                                    label: 'IPAR',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'o' }
                                },
                            ]
                        },
                        {
                            label: 'Report',
                            items: [
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'IPCR A',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'b' }
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'IPCR B',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'b' }
                                },
                                {
                                    icon: 'fa fa-file-pdf-o',
                                    label: 'IPAR',
                                    routerLink: '/opcr',
                                    queryParams: { type: 'o' }
                                },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-bar-chart',
                label: 'Statistics',
                items: [
                    [
                        {
                            label: 'Office',
                            items: [
                                { icon: 'fa fa-line-chart', label: 'OPCR A' },
                                { icon: 'fa fa-line-chart', label: 'OPCR B' },
                                { icon: 'fa fa-line-chart', label: 'OPAR' },
                            ]
                        },
                        {
                            label: 'Division',
                            items: [
                                { icon: 'fa fa-area-chart', label: 'DPCR A' },
                                { icon: 'fa fa-area-chart', label: 'DPCR B' },
                                { icon: 'fa fa-area-chart', label: 'DPAR' },
                            ]
                        },
                        {
                            label: 'Individual',
                            items: [
                                { icon: 'fa fa-pie-chart', label: 'IPCR A' },
                                { icon: 'fa fa-pie-chart', label: 'IPCR B' },
                                { icon: 'fa fa-pie-chart', label: 'IPAR' },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-database',
                label: 'Reference',
                items: [
                    [
                        {
                            label: 'Indicators',
                            items: [
                                { icon: 'fa fa-bookmark-o', label: 'OPCR' },
                                { icon: 'fa fa-bookmark-o', label: 'DPCR' },
                                { icon: 'fa fa-bookmark-o', label: 'IPCR' },
                            ]
                        },
                        {
                            label: 'Resource',
                            items: [
                                { icon: 'fa fa-star-o', label: 'Rating', routerLink: '/reference', queryParams: { type: 'rating', subType: 'Rating Reference' } },
                                { icon: 'fa fa-user-circle-o', label: 'User Roles', routerLink: '/reference', queryParams: { type: 'roles', subType: 'User Role Reference' } },
                                { icon: 'fa fa-check-square', label: 'Status', routerLink: '/reference', queryParams: { type: 'status', subType: 'Status Reference' } },
                                { icon: 'fa fa-building-o', label: 'B/S/O', routerLink: '/reference', queryParams: { type: 'bso', subType: 'B/S/O Reference' } },
                                { icon: 'fa fa-clipboard', label: 'Form', routerLink: '/reference', queryParams: { type: 'form', subType: 'Form Reference' } },
                            ]
                        },
                    ],
                    [
                        {
                            label: 'Targets',
                            items: [
                                { icon: 'fa fa-bullseye', label: 'OPCR' },
                                { icon: 'fa fa-bullseye', label: 'DPCR' },
                                { icon: 'fa fa-bullseye', label: 'IPCR' },
                            ]
                        },
                        {
                            label: 'PAP Administration',
                            items: [
                                { icon: 'fa fa-pencil-square-o', label: 'Revision' },
                                { icon: 'fa fa-bars', label: 'OPCR' },
                                { icon: 'fa fa-bars', label: 'DPCR' },
                                { icon: 'fa fa-bars', label: 'IPCR' },
                            ]
                        },
                    ],
                    [
                        {
                            label: 'Responsible Division',
                            items: [
                                { icon: 'fa fa-users', label: 'OPCR' },
                                { icon: 'fa fa-users', label: 'DPCR' },
                                { icon: 'fa fa-users', label: 'IPCR' },
                            ]
                        },
                    ]
                ]
            },
            {
                icon: 'fa fa-th-list',
                label: 'Audits',
                items: [
                    [
                        {
                            label: 'Tracking',
                            items: [
                                { icon: 'fa fa-th-list', label: 'PAP' },
                                { icon: 'fa fa-th-list', label: 'OPCR' },
                                { icon: 'fa fa-th-list', label: 'DPCR' },
                                { icon: 'fa fa-th-list', label: 'IPCR' },
                            ]
                        }
                    ]
                ]
            },
            {
                icon: 'fa fa-cogs',
                label: 'Utilities',
                items: [
                    [
                        {
                            label: 'Security',
                            items: [
                                { icon: 'fa fa-sitemap', label: 'Coverage', routerLink: '/utilities', queryParams: { type: 'coverage', subType: 'Coverage Management and Adminstration' } },
                                { icon: 'fa fa-key', label: 'Workflow', routerLink: '/utilities', queryParams: { type: 'workflow', subType: 'Worfklow Management and Administration' } },
                                { icon: 'fa fa-gavel', label: 'Technical Board', routerLink: '/utilities', queryParams: { type: 'technical-board', subType: 'Technical Board Management and Administration' } },
                            ]
                        },
                        {
                            label: 'Other',
                            items: [
                                { icon: 'fa fa-info-circle', label: 'User Guide' },
                                { icon: 'fa fa-cog', label: 'Settings' },
                            ]
                        },
                        {
                            label: 'Account',
                            items: [
                                { icon: 'fa fa-user', label: 'Profile' },
                                { icon: 'fa fa-sign-out', label: 'Sign Out' },
                            ]
                        }
                    ]
                ]
            }
        ];
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
