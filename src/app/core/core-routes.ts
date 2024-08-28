import { Route } from "@angular/router";
import { CoreComponent } from "./core.component";
import { AppRoutes } from "./common/interfaces-core";
import { HomeComponent } from "./home/home.component";

 export default[
    { path: '', component: CoreComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: AppRoutes.DASHBOARD, 
                loadComponent: () => import('../features/dashboard/dashboard.component')
                .then(mod => mod.DashboardComponent),
            },
            {path: AppRoutes.TRADES, 
                loadComponent: () => import('../features/trades-view/trades-view.component')
                .then(mod => mod.TradesViewComponent),
            },
            {path: AppRoutes.IMAGES, 
                loadComponent: () => import('../features/images-view/images-view.component')
                .then(mod => mod.ImagesViewComponent),
            },
            {path: AppRoutes.ANALYTICS, 
                loadComponent: () => import('../features/analytics-view/analytics-view.component')
                .then(mod => mod.AnalyticsViewComponent),
            },
            {path: AppRoutes.JOURNAL, 
                loadComponent: () => import('../features/journal-view/journal-view.component')
                .then(mod => mod.JournalViewComponent),
            },
            {path: AppRoutes.SKILLS, 
                loadComponent: () => import('../features/skills-view/skills-view.component')
                .then(mod => mod.SkillsViewComponent),
            },

            {path: AppRoutes.LOGOUT, redirectTo: '/', pathMatch: 'full'},
        ]
    },
    { path: '**', redirectTo: '/', pathMatch:'full'},
 ] satisfies Route[];