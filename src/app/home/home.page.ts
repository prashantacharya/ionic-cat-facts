import { Component } from '@angular/core';
import { CatFactsService } from '../cat-facts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catFacts = [];
  selectedFact = 0;

  constructor(private catFactService: CatFactsService) {}

  ngOnInit() {
    this.catFactService.getCatFacts().subscribe((data) => {
      this.catFacts = data.all;

      console.log(this.catFacts[this.selectedFact].upvotes);
    });
  }

  incrementSelected() {
    if (this.catFacts.length > this.selectedFact) {
      this.selectedFact = this.selectedFact + 1;
    }
  }

  decrementSelected() {
    if (this.selectedFact > 0) {
      this.selectedFact = this.selectedFact - 1;
    }
  }
}
