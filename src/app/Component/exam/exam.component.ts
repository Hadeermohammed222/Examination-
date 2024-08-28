import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExaminationService } from 'src/app/services/examination.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  ques_api: any[] = [];
  selectedAnswers: string[] = [];
  score: number = 0;

  constructor(private examApi: ExaminationService, private router: Router) {}

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion() {
    this.examApi.getQuestions().subscribe((data) => {
      this.ques_api = data;
      this.selectedAnswers = new Array(this.ques_api.length).fill(null); // Initialize selectedAnswers array
    });
  }

  onOptionSelected(answer: string, index: number) {
    this.selectedAnswers[index] = answer;
  }

  onSubmit() {
    this.score = 0;
    this.selectedAnswers.forEach((answer, index) => {
      if (
        answer &&
        String(answer.toLowerCase().trim()) ===
        String(this.ques_api[index].answer.toLowerCase().trim())
      ) {
        this.score++;
      }
    });

    // Navigate to the results page and pass the score
    this.router.navigate(['/results'], { queryParams: { score: this.score } });
  }
}



