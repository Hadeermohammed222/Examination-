import { Component, OnInit } from '@angular/core';
import { ExaminationService } from '../../services/examination.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-admain',
  templateUrl: './admain.component.html',
  styleUrls: ['./admain.component.css']
})
export class AdmainComponent implements OnInit {
  question: Question = new Question();
  ques: any;
  ques_api: any = [];
  myGroup: FormGroup; 

  constructor(private examApi: ExaminationService) {
    this.myGroup = new FormGroup({});
  }
  
  ngOnInit(): void {
    this.myGroup = new FormGroup({
      question: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      option1: new FormControl(null, [Validators.required]),
      option2: new FormControl(null, [Validators.required]),
      option3: new FormControl(null, [Validators.required]),
      answer: new FormControl(null, [Validators.required]),
    });

    this.loadQuestion();
  }

  loadQuestion() {
    this.examApi.getQuestions().subscribe((data) => {
      this.ques_api = data;
      // Uncomment the next line if you need to force a full-page reload.
      // window.location.reload(); // This will reload the entire page
    });
  }
  refresh(){
    setTimeout(() => {
      window.location.reload(); // Reload the entire page
    }, 1000);
  }
  Add() {
    this.examApi.putQuestions(this.question).subscribe(() => {
      this.loadQuestion();
      this.clear();
      setTimeout(() => {
        window.location.reload(); // Reload the entire page
      }, 5000);
  })
}
  
  Delete(id_ques: any) {
    if (confirm('Are you sure you want to delete this question?')) {
      this.examApi.deleteQuestions(id_ques).subscribe(() => {
        this.loadQuestion(); // Reload the list to exclude the deleted question
      });
    }
  }

  Edit(dt: any) {
    this.myGroup.patchValue({
      question: dt.question,
      type: dt.type,
      option1: dt.options[0],
      option2: dt.options[1],
      option3: dt.options[2],
      answer: dt.answer,
    });
    this.ques = dt.id;
  }

  Update() {
    const values = this.myGroup.value;
    const updatedQuestion = {
      ...this.question,
      question: values.question,
      type: values.type,
      options: [values.option1, values.option2, values.option3],
      answer: values.answer,
    };

    this.examApi.updateQuestion(this.ques, updatedQuestion).subscribe(() => {
      this.loadQuestion(); // Reload the list to include the updated question
      this.clear();
    });
  }

  clear() {
    this.myGroup.reset();
  }
}


