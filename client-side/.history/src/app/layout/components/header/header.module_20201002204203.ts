import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header.component';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    MegaMenuModule,
  ]
})
export class HeaderModule { }
