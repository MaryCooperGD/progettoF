import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.page.html',
  styleUrls: ['./place-list.page.scss'],
})
export class PlaceListPage implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private toastCtrl: ToastController) {

  }

  title= "Risultati di ricerca";
  venuesList: any;
  request: any;


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.request = params['request'];

    })

    let param = [];
    this.http.get(this.request)
    .subscribe((response)=>{
      if(response.response.group.totalResults == 0){
        this.showToast("Non ci sono risultati per la tua ricerca.");
      } else {
        response.response.group.results.forEach(el => {
        let venue = {id: el.venue.id, name: el.venue.name};
        param.push(venue);
      })
    this.venuesList = param;

      }

});

  //  this.route.params.subscribe(params => {

    //  this.parameters = params['list'];

      // console.log("Lunghezza par "+ params['par'].length);
      // for (let par of params['par']){
      //
      // }
      // this.parameters = params['par'];
      // console.log("Lunghezza " + this.parameters.length);
      // for (let par of this.parameters){
      //   console.log(par);
      // }
//  });
  }

  async showToast(message){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  searchVenue(v){
  //v.id
  this.router.navigate(['/place-details', {id: v.id, name: v.name}]);
  }
}
