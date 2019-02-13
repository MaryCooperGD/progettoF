import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.page.html',
  styleUrls: ['./place-list.page.scss'],
})
export class PlaceListPage implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {

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
      response.response.group.results.forEach(el => {
      let venue = {id: el.id, name: el.venue.name};
      param.push(venue);
    })
  this.venuesList = param;
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

}
