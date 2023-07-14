import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeAccountRoutingModule } from './notice-account-routing.module';
import { NoticeAccountComponent } from './notice-account/notice-account.component';


@NgModule({
  declarations: [
    NoticeAccountComponent
  ],
  imports: [
    CommonModule,
    NoticeAccountRoutingModule
  ]
})
export class NoticeAccountModule { }
