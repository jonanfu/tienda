import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../login/login.module").then((m) => m.LoginPageModule),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../index/index.module").then((m) => m.IndexPageModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../cart/cart.module").then((m) => m.CartPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
