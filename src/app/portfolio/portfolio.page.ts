import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage {
  @ViewChild(IonContent, { static: false })
  content!: IonContent;
  expand!: boolean;
  id!: string;

  toggle(id: string) {
    this.id = id;
    this.expand = !this.expand;
  }
}
