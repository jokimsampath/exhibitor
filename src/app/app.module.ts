import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FasciaComponent } from './fascia/fascia.component';
import { PowerRequirementComponent } from './power-requirement/power-requirement.component';
import { NotificationComponent } from './notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatInputModule } from '@angular/material/input';
//import { MatNativeDateModule } from '@angular/material/datepicker'; */
import{ NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { SponsorshipOpportunitiesComponent } from './sponsorship-opportunities/sponsorship-opportunities.component';
import { BrandingSponsorshipComponent } from './branding-sponsorship/branding-sponsorship.component';
import { AudioVisualComponent } from './audio-visual/audio-visual.component';
import { FurnitureElectricalFixtureComponent } from './furniture-electrical-fixture/furniture-electrical-fixture.component';
import { FreightHandlingComponent } from './freight-handling/freight-handling.component';
import { HostessComponent } from './hostess/hostess.component';
import { ExitPassComponent } from './exit-pass/exit-pass.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ExhibitorBadgeComponent } from './exhibitor-badge/exhibitor-badge.component';
import { StallDesignsComponent } from './stall-designs/stall-designs.component';
import { DummyComponent } from './dummy/dummy.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ImportUsersComponent } from './import-users/import-users.component';
import { VipBadgeComponent } from './vip-badge/vip-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    HomeComponent,
    FasciaComponent,
    PowerRequirementComponent,
    NotificationComponent,
    ContentComponent,
    SponsorshipOpportunitiesComponent,
    BrandingSponsorshipComponent,
    AudioVisualComponent,
    FurnitureElectricalFixtureComponent,
    FreightHandlingComponent,
    HostessComponent,
    ExitPassComponent,
    FeedbackComponent,
    ExhibitorBadgeComponent,
    StallDesignsComponent,
    DummyComponent,
    AdvertisementsComponent,
    ImportUsersComponent,
    VipBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
/*     MatDatepickerModule, 
    //MatInputModule,
    //MatNativeDateModule, */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
