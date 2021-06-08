import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioPage } from './portfolio.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioPageRoutingModule {}
