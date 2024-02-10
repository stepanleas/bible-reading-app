import { Routes } from '@angular/router';
import { TodayComponent } from "./pages/today/today.component";
import { PlanComponent } from "./pages/plan/plan.component";
import { SettingsComponent } from "./pages/settings/settings.component";

export const routes: Routes = [
  { path: 'today', component: TodayComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'settings', component: SettingsComponent },
];
