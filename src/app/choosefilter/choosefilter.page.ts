import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

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

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private toastCtrl: ToastController) { }



  ngOnInit() {
    this.route.params.subscribe(params => {
       this.title = "Seleziona i filtri di ricerca";
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

  ionViewWillEnter(){
    this.request ="";
  }

  searchPlaces(){
    if(this.city == null){
      this.showToast("Specifica una città per effettuare una ricerca.");
    } else {
      this.request= "https://api.foursquare.com/v2/search/recommendations?"
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
        this.router.navigate(['/place-list', {request: this.request}]);
    }

  }

  async showToast(message){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



}
