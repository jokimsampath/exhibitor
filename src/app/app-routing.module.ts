import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FasciaComponent } from './fascia/fascia.component';
import { PowerRequirementComponent } from './power-requirement/power-requirement.component';
import { SponsorshipOpportunitiesComponent } from './sponsorship-opportunities/sponsorship-opportunities.component';
import { BrandingSponsorshipComponent } from './branding-sponsorship/branding-sponsorship.component';
import { AudioVisualComponent } from './audio-visual/audio-visual.component';
import { FurnitureElectricalFixtureComponent } from './furniture-electrical-fixture/furniture-electrical-fixture.component';
import { ExitPassComponent } from './exit-pass/exit-pass.component';
import { HostessComponent } from './hostess/hostess.component';
import { FreightHandlingComponent } from './freight-handling/freight-handling.component';
import { ExhibitorBadgeComponent } from './exhibitor-badge/exhibitor-badge.component';
import { StallDesignsComponent } from './stall-designs/stall-designs.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DummyComponent } from './dummy/dummy.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ImportUsersComponent } from './import-users/import-users.component';
import { VipBadgeComponent } from './vip-badge/vip-badge.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children:[
      { 
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeComponent
      },
      /* {
        path: 'sponsorship-opportunities',
        canActivate: [AuthGuard],
        component: SponsorshipOpportunitiesComponent
      },
      {
        path: 'branding-sponsorship',
        canActivate: [AuthGuard],
        component: BrandingSponsorshipComponent
      }, */
      {
        path: 'advertisement',
        canActivate: [AuthGuard],
        component: AdvertisementsComponent
      },
      {
        path: 'fascia',
        canActivate: [AuthGuard],
        component: FasciaComponent
      },
      {
        path: 'power-requirement',
        canActivate: [AuthGuard],
        component: PowerRequirementComponent
      },
      {
        path: 'audio-visual',
        canActivate: [AuthGuard],
        component: AudioVisualComponent
      },
      {
        path: 'freight-handling',
        canActivate: [AuthGuard],
        component: FreightHandlingComponent
      },
      {
        path: 'hostess',
        canActivate: [AuthGuard],
        component: HostessComponent
      },
      {
        path: 'additional-furniture',
        canActivate: [AuthGuard],
        component: FurnitureElectricalFixtureComponent
      },
      {
        path: 'exit-pass',
        canActivate: [AuthGuard],
        component: ExitPassComponent
      },
      {
        path: 'exhibitor-badge',
        canActivate: [AuthGuard],
        component: ExhibitorBadgeComponent
      },
      {
        path: 'stall-designs',
        canActivate: [AuthGuard],
        component: StallDesignsComponent
      },
      {
        path: 'feedback',
        canActivate: [AuthGuard],
        component: FeedbackComponent
      },
      {
        path: 'create-user',
        component: RegistrationComponent
      },
      {
        path: 'import-users',
        component: ImportUsersComponent
      },
      {
        path: 'vip-badge',
        component: VipBadgeComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
