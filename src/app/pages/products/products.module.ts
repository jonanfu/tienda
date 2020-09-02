import { ComponentsModule } from "./../../components/components.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ProductsPageRoutingModule } from "./products-routing.module";
import { ProductsPage } from "./products.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ProductsPage],
})
export class ProductsPageModule {}
