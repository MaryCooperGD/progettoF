import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.page.html',
  styleUrls: ['./place-list.page.scss'],
})
export class PlaceListPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  title: any;
  parameters: any = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parameters = params['par'];
      console.log("Lunghezza " + this.parameters.length);
      for (let par of this.parameters){
        console.log(par.id);
      }
    //  this.title = "Il primo della lista è "+ this.parameters[0].name;
  });
  }

}
