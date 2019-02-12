import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title="Che cosa vuoi mangiare oggi?"
  private intentList: Array<any>;

constructor(private router: Router) {
  this.intentList = ["Colazione","Brunch","Pranzo","Caffè e merenda","Cena","Pasticceria","Cocktail Bar",]

  }

  clickedImage(intent){

      this.router.navigate(['/choosefilter',{id:intent}]);

    }

}
