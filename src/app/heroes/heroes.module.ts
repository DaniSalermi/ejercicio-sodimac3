import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroesRoutingModule } from "./heroes-routing.module";
import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [CommonModule, HeroesRoutingModule, ReactiveFormsModule]
})
export class HeroesModule {}
