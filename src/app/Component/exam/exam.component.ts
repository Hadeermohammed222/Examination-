import { Component, OnInit } from '@angular/core';
import { ExaminationService } from 'src/app/services/examination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})

export class ExamComponent implements OnInit {
  ques_api: any[] = [];
  score: number = 0;
  constructor(private examApi:ExaminationService,private router: Router) { }


  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(){
    this.examApi.getQuestions().subscribe(
      data=>{
        this.ques_api = data;
      }
    )
  }

  onSubmit(): void {
    this.calculateScore();
    alert(`Your final score is ${this.score}`);
    this.router.navigate(['/results'], { queryParams: { score: this.score } });
  }

  calculateScore(): void {
    this.score = 0;
    this.ques_api.forEach((question, index) => {
      const selectedOption = (document.querySelector(`input[name="question-${index}"]:checked`) as HTMLInputElement)?.value;
      if (selectedOption === question.answer) {
        this.score++;
      }
    });
  }
}
