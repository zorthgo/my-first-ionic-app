import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// Below you can find the routing table. The path is the key that links the URL in the import section to the tab value in the ion-tab-button component in the tabs.page.html.

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        // family-member-tab => tab1
        path: 'family-members-tab',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        // foods => tab2
        path: 'foods',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        // games => tab3
        path: 'games',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'exercises',
        loadChildren: () => import('../exercises/exercises.module').then( m => m.ExercisesPageModule)
      },   
      {
        path: 'exercises/:id',
        loadChildren: () => import('../exercises/exercises.module').then( m => m.ExercisesPageModule)
      },   
      {
        path: 'exercise-details/:id',
        loadChildren: () => import('../exercise-details/exercise-details.module').then( m => m.ExerciseDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/exercises',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
