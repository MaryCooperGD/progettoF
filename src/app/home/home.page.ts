import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title="Che cosa vuoi mangiare oggi?"
  public intentList: any[];

constructor(private router: Router) {
  this.intentList =  [
        { val: "Colazione", intent: "breakfast" },
        { val: 'Brunch', intent: "brunch"},
        { val: 'Pranzo', intent: "lunch"},
        { val: 'Caffè e merenda', intent: "coffee"},
        { val: 'Cena', intent: "dinner" },
        { val: 'Pasticceria', intent: "dessert" },
        { val: 'Cocktail Bar', intent: "drinks"}
      ];

  }

  clickedImage(intent){
      this.router.navigate(['/choosefilter',{id:intent}]);

    }

}
