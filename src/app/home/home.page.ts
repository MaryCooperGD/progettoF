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
  public photoList: String[];

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

      this.photoList = ["./assets/images/001-breakfast.png", "./assets/images/002-brunch.png", "./assets/images/003-sandwich.png",
      "./assets/images/004-food.png", "./assets/images/005-dinner.png", "./assets/images/006-cake.png", "./assets/images/007-cocktail.png"]

  }

  clickedImage(intent){
      this.router.navigate(['/choosefilter',{id:intent}]);

    }

}
