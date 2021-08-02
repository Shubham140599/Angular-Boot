import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CoursesComponent } from './components/courses/courses.component'
import { IntroComponent } from './components/intro/intro.component'
import { NavbarComponent } from './components/navbar/navbar.component'

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'courses', component: CoursesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
