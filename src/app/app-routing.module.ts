import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgetPassword',
    component:ForgetPasswordComponent
  },
  {
    path:'createAccount',
    component:CreateAccountComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:EditProfileComponent
      },
      {
        path:'profileSetting',
        component:EditProfileComponent
      },
      {
        path:'agents',
        component:AgentsComponent,
        children:[
          {
            path:'',
            component:AgentListComponent
          },
          {
            path:'list',
            component:AgentListComponent
          },
          {
            path:'singleList',
            component:SingleAgentListComponent
          },
          {
            path:'agentDetail',
            component:AgentDetailComponent
          }
        ]
      },
      {
        path:'applicants',
        component:ApplicantComponent,
        children:[
          {
            path:'',
            component:AllApplicantsComponent
          },
          {
            path:'all',
            component:AllApplicantsComponent
          },
          {
            path:'walking',
            component:WalkingApplicantsComponent
          },
          {
            path:'withAgent',
            component:AgentApplicantsComponent
          },
          {
            path:'applicantDetail',
            component:ApplicantDetailComponent,
            children:[
              {
                path:'personal',
                component:PersonalDetailComponent
              },
              {
                path:'premedical',
                component:PreMedDetailComponent
              },
              {
                path:'passportStatus',
                component:PassportStatusComponent
              },
              {
                path:'expense',
                component:ExpenseDetailComponent
              },
              {
                path:'',
                component:PersonalDetailComponent
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
