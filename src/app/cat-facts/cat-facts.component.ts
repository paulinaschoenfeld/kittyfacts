import { Component, OnInit } from '@angular/core';
import { CatFact } from '../models/models';
import { FactsService } from '../services/facts.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnInit {
  public catFacts: CatFact[] = [];
  public loading: boolean = false;

  constructor(
    private factsService: FactsService,
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.fetchCatFact();
  }

  private fetchCatFact() {
    this.loading = true;
    this.factsService.getFact().pipe(take(1)).subscribe(res => {
      const newFact = res.data[0];
      if (this.catFacts.some((fact) => fact.fact === newFact)) {
        this.fetchCatFact();
      } else {
        this.factsService.getCat().subscribe(catImage => {
          this.catFacts.push({
            fact: newFact,
            image: catImage[0].url,
          });
          this.loading = false;
        })
      }
    })
  }

  public scrolled() {
    this.fetchCatFact();
  }
}
