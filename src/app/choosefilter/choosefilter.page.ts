import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choosefilter',
  templateUrl: './choosefilter.page.html',
  styleUrls: ['./choosefilter.page.scss'],
})
export class ChoosefilterPage implements OnInit {

  title: any;

  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.params.subscribe(params => {
       this.title = params['id'];
  });
  }

}
