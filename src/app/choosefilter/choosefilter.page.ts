import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choosefilter',
  templateUrl: './choosefilter.page.html',
  styleUrls: ['./choosefilter.page.scss'],
})
export class ChoosefilterPage implements OnInit {

  city: string;
  title: any;
  selectedOptionArray: any=[];
  selectedDayArray: any=[];
  stars: string;
  price: string;


  public form = [
        { val: 'Carte di credito', isChecked: false },
        { val: 'Prenotazioni', isChecked: false },
        { val: 'Servizio a domicilio', isChecked: false },
        { val: 'Servizio di asporto', isChecked: false },
        { val: 'Wi-Fi', isChecked: false },
        { val: 'Posti all\'aperto', isChecked: false },
        { val: 'Aperto da poco', isChecked: false },
        { val: 'Non parte di una catena', isChecked: false },
        { val: 'Prenotazioni online', isChecked: false },
        { val: 'Accetta animali', isChecked: false },
        { val: 'Dotato di parcheggio', isChecked: false }
      ];

      public days = [
        {val: 'Lunedì', isChecked: false},
        {val: 'Martedì', isChecked: false},
        {val: 'Mercoledì', isChecked: false},
        {val: 'Giovedì', isChecked: false},
        {val: 'Venerdì', isChecked: false},
        {val: 'Sabato', isChecked: false},
        {val: 'Domenica', isChecked: false}
      ];
  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.params.subscribe(params => {
       this.title = "Cerca un posto per " + params['id'].toLowerCase();
  });
  }

  charMemberSelected(entry){
    entry.isChecked = !entry.isChecked;
    if(entry.isChecked){
      this.selectedOptionArray.push(entry);
    } else {
      let newArray = this.selectedOptionArray.filter(function(el){
        return el.val !==  entry.val;
      });
      this.selectedOptionArray = newArray;
    }
  }

  daySelected(day){
    day.isChecked = !day.isChecked;
    if(entry.isChecked){
      this.selectedDayArray.push(day);
    } else {
      let newArray = this.selectedDayArray.filter(function(el){
        return el.val !==  entry.val;
      });
      this.selectedDayArray = newArray;
    }

  }

  selectedStars(){
    console.log(this.stars);
  }

  selectedPrice(){
    console.log(this.price);
  }


  searchPlaces(){
    if(this.city == null){
      console.log("La città è obbligatoria")
    } else {
      console.log("Città: " + this.city);
    }
    //costruzione query

  }

}
