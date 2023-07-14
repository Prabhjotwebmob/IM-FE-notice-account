import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeAccountComponent } from './notice-account/notice-account.component';

const routes: Routes = [{
  path: '**',
  component: NoticeAccountComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeAccountRoutingModule { }
