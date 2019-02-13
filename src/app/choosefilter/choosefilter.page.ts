import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choosefilter',
  templateUrl: './choosefilter.page.html',
  styleUrls: ['./choosefilter.page.scss'],
})
export class ChoosefilterPage implements OnInit {

  city: string;
  title: any;
  selectedOptionArray: any=[];
  open = false;
  //selectedDayArray: any=[];
  stars: string;
  price = "none";
  intent: string;
  request: string;
  client_id = "XDSI4BB05BSOCU3CB0GHRQ1O0EY5IJ1UDECDSTQVI1O5JAKF";
  client_secret = "R2HL2JVN4Q21WQIFZ12UCUS5RGZSYMEBVNE2NRIBXVVXTWKQ&v=20190211";
  resultsArray: any=[];


  public form = [
        { val: 'Carte di credito', isChecked: false, number: "0" },
        { val: 'Prenotazioni', isChecked: false, number: "1"},
        { val: 'Servizio a domicilio', isChecked: false, number: "2" },
        { val: 'Servizio di asporto', isChecked: false, number: "3" },
        { val: 'Wi-Fi', isChecked: false, number: "4" },
        { val: 'Posti all\'aperto', isChecked: false, number: "5" },
        { val: 'Aperto da poco', isChecked: false, number: "8" },
        { val: 'Non parte di una catena', isChecked: false, number: "9" },
        { val: 'Prenotazioni online', isChecked: false, number: "10" },
        { val: 'Accetta animali', isChecked: false, number: "13" },
        { val: 'Dotato di parcheggio', isChecked: false, number: "14" }
      ];

      /*public days = [
        {val: 'Lunedì', isChecked: false, number: "1"},
        {val: 'Martedì', isChecked: false, number: "2"},
        {val: 'Mercoledì', isChecked: false, number: "3"},
        {val: 'Giovedì', isChecked: false, number: "4"},
        {val: 'Venerdì', isChecked: false, number: "5"},
        {val: 'Sabato', isChecked: false, number: "6"},
        {val: 'Domenica', isChecked: false, number: "7"}
      ];*/
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }



  ngOnInit() {
    this.request= "https://api.foursquare.com/v2/search/recommendations?"
    this.route.params.subscribe(params => {
       this.title = "Cerca un posto per " + params['id'].toLowerCase();
       this.intent = params['id'].toLowerCase();
  });
  }

  charMemberSelected(entry){
    entry.isChecked = !entry.isChecked;
    if(entry.isChecked){
      this.selectedOptionArray.push(entry);
    } else {
      let newArray = this.selectedOptionArray.filter(function(el){
        return el.number !==  entry.number;
      });
      this.selectedOptionArray = newArray;
    }
  }

  openNow(){
    this.open = !this.open;
    console.log(this.open);
  }

  //daySelected(day){

    // day.isChecked = !day.isChecked;
    // if(day.isChecked){
    //   this.selectedDayArray.push(day);
    // } else {
    //   let newArray = this.selectedDayArray.filter(function(el){
    //     return el.number !==  day.number;
    //   });
    //   this.selectedDayArray = newArray;
    // }

//  }


  searchPlaces(){
    if(this.city == null){
      console.log("Devi specificare una città!");
    } else {
      console.log(this.price);
      this.request+="near="+this.city+"&intent="+this.intent+"";

      //Controllo per le features
      if(this.selectedOptionArray.length!=0){
        this.request+="&features=";
        this.selectedOptionArray.forEach((el, i, array)=>{
          if(i ===(array.length-1)){//controllo se aggiungere o meno la virgola
            this.request+=el.number+"";
          }else{
            this.request+=el.number+",";
          }
        })
      }

      this.request+="&openNow="+this.open;

      //controllo prezzo
      if (this.price!="none"){
        this.request+="&prices"+this.price+"";
      }

      this.request+="&client_id="+this.client_id+"&client_secret="+this.client_secret+"";
      let param = [];
      this.http.get(this.request)
      .subscribe((response)=>{
        response.response.group.results.forEach(el => {
          let venue = {id: el.id, name: el.venue.name};
          param.push(venue);
        })
        this.router.navigate(['/place-list', {par: param}]);

      })
    }

  }



}
