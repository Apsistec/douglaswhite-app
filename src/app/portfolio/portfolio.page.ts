import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { expand } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  cardId;
  expand;
  site;
  id;
  constructor() {}

  ngOnInit() {
    console.log("id: ", this.id)

  }

  toggle(id) {
   this.id = id;
    this.expand = !this.expand;
  }
}
