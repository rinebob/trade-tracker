import { Route } from "@angular/router";
import { CoreComponent } from "./core.component";
import { AppRoutes } from "./common/interfaces-tt-core";
import { HomeComponent } from "./comps/home/home.component";

 export default[
    { path: '', component: CoreComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: AppRoutes.DASHBOARD, 
                loadComponent: () => import('../features/comps/dashboard/dashboard.component')
                .then(mod => mod.DashboardComponent),
            },
            {path: AppRoutes.TRADES, 
                loadComponent: () => import('../features/comps/trades-view/trades-view.component')
                .then(mod => mod.TradesViewComponent),
            },
            {path: AppRoutes.IMAGES, 
                loadComponent: () => import('../features/comps/images-view/images-view.component')
                .then(mod => mod.ImagesViewComponent),
            },
            {path: AppRoutes.ANALYTICS, 
                loadComponent: () => import('../features/comps/analytics-view/analytics-view.component')
                .then(mod => mod.AnalyticsViewComponent),
            },
            {path: AppRoutes.JOURNAL, 
                loadComponent: () => import('../features/comps/journal-view/journal-view.component')
                .then(mod => mod.JournalViewComponent),
            },
            {path: AppRoutes.SKILLS, 
                loadComponent: () => import('../features/comps/skills-view/skills-view.component')
                .then(mod => mod.SkillsViewComponent),
            },

            {path: AppRoutes.LOGOUT, redirectTo: '/', pathMatch: 'full'},
        ]
    },
    { path: '**', redirectTo: '/', pathMatch:'full'},
 ] satisfies Route[];