import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontModule } from './front/front.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./front/front.module').then((mod) => mod.FrontModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
