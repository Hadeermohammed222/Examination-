import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  score: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.queryParams.subscribe((params:any)=> {
    this.score = +params['score'] || 0; // Use the score from the query parameters or default to 0
  });
  }
}
