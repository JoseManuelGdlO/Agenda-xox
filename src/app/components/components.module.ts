import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CardsComponent } from "./cards/cards.component";
import { ListCardsComponent } from "./list-cards/list-cards.component";

@NgModule({
    declarations: [
        CardsComponent,
        ListCardsComponent
    ],
    entryComponents: [],
    imports: [
      CommonModule,
      IonicModule.forRoot(),
    ],
    exports: [
        CardsComponent,
        ListCardsComponent
    ],
    bootstrap: [
        CardsComponent,
        ListCardsComponent
    ],
  })
  export class ComponentsModule {}