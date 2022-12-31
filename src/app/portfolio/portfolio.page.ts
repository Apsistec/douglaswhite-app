import { expand } from 'rxjs/operators';

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
<<<<<<< Updated upstream
export class PortfolioPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  cardId;
  expand;
  site;
  id;
  constructor() {}

  ngOnInit() {
    console.log('id: ', this.id);
  }
=======
export class PortfolioPage {
  @ViewChild(IonContent, { static: false })
  content!: IonContent;
  expand!: boolean;
  id!: string;
>>>>>>> Stashed changes

  toggle(id: string) {
    this.id = id;
    this.expand = !this.expand;
  }
}
