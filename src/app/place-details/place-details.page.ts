import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  placeID:any;
  title: any;
  prova: any;
  foto_url: any;
  request = "https://api.foursquare.com/v2/venues/";
  client_id = "XDSI4BB05BSOCU3CB0GHRQ1O0EY5IJ1UDECDSTQVI1O5JAKF";
  client_secret = "R2HL2JVN4Q21WQIFZ12UCUS5RGZSYMEBVNE2NRIBXVVXTWKQ&v=20190211";

  //Informazioni del luogo
  address: any;
  categories: any[];
  rating: any;
  photo_url: any;
  tips: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.placeID = params['id'];
      console.log(this.placeID);
      this.title = params['name'];
      this.request+=this.placeID+"?&client_id="+this.client_id+"&client_secret="+this.client_secret+"";
    })

    let cat = [];
    let tipsList = [];
    this.http.get(this.request)
    .subscribe((response)=>{
        this.address = (response as any).response.venue.location.address;
        (response as any).response.venue.categories.forEach(c=>{
          cat.push(c.shortName)
        });
        (response as any).response.venue.tips.groups[0].items.forEach(i=>{
          tipsList.push(i.text)
        });
        this.categories = cat;
        this.tips = tipsList;
        this.rating = (response as any).response.venue.rating;
        this.photo_url= (response as any).response.venue.bestPhoto.prefix+"200x200"+(response as any).response.venue.bestPhoto.suffix+"";
        this.request = "";
    });


  }

}
