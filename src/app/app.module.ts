import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AgentsComponent } from './agents/agents.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { SingleAgentListComponent } from './single-agent-list/single-agent-list.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AllApplicantsComponent } from './all-applicants/all-applicants.component';
import { WalkingApplicantsComponent } from './walking-applicants/walking-applicants.component';
import { AgentApplicantsComponent } from './agent-applicants/agent-applicants.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PreMedDetailComponent } from './pre-med-detail/pre-med-detail.component';
import { PassportStatusComponent } from './passport-status/passport-status.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CreateAccountComponent,
    HomeComponent,
    EditProfileComponent,
    AgentsComponent,
    ApplicantComponent,
    AgentListComponent,
    SingleAgentListComponent,
    AgentDetailComponent,
    AllApplicantsComponent,
    WalkingApplicantsComponent,
    AgentApplicantsComponent,
    ApplicantDetailComponent,
    PersonalDetailComponent,
    PreMedDetailComponent,
    PassportStatusComponent,
    ExpenseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
