import { Component, OnInit } from '@angular/core';
import {ExaminationService} from '../../services/examination.service';
import { Validators,FormGroup,FormControl} from '@angular/forms';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-admain',
  templateUrl: './admain.component.html',
  styleUrls: ['./admain.component.css']
})
export class AdmainComponent implements OnInit {
  // question:Question;
  values:any;
  ques:any;
  ques_api:any;
  question:Question= new Question();
  admainForm: any;
  myGroup: any;
  constructor(private examApi :ExaminationService) {}

  ngOnInit(): void {
    myGroup: FormGroup;
    this.loadQuestion();
    this.myGroup   = new FormGroup({
      question:new FormControl(null,[Validators.required]),
      type:new FormControl(null,[Validators.required]),
      option1:new FormControl(null,[Validators.required]),
      option2:new FormControl(null,[Validators.required]),
      option3:new FormControl(null,[Validators.required]),
      answer:new FormControl(null,[Validators.required]),
    });
  }
 loadQuestion(){
  this.examApi.getQuestions().subscribe(
    data=>{
      this.ques_api = data;
    }
  )
 }

 Add(){
  this.examApi.putQuestions(this.question).subscribe(
    data =>{
      console.log(this.question)
      this.loadQuestion();
    }
  )
  
 }
 Delete(id_ques: any) {
  // console.log(id_ques)
  // console.log(id_ans)
  if (confirm('Are you sure you want to delete this question?')) 
  {
    this.examApi.deleteQuestions(id_ques).subscribe(
       data =>{
        this.loadQuestion();
       }
    )
    
 }
}

Edit(dt:any){
  this.myGroup.controls['question'].setValue(dt.question);
  this.myGroup.controls['type'].setValue(dt.type);
  this.myGroup.controls['option1'].setValue(dt.options[0]);
  this.myGroup.controls['option2'].setValue(dt.options[1]);
  this.myGroup.controls['option3'].setValue(dt.options[2]);
  this.myGroup.controls['answer'].setValue(dt.answer);
  this.ques = dt.id;


}
clear(){
  this.myGroup.controls['question'].setValue(' ');
  this.myGroup.controls['type'].setValue('');
  this.myGroup.controls['option1'].setValue(' ');
  this.myGroup.controls['option2'].setValue(' ');
  this.myGroup.controls['option3'].setValue(' ');
  this.myGroup.controls['answer'].setValue(' ');
}
Update(myGroup: FormGroup) {
  // Get the form values
  this.values = this.myGroup.value;

  // Map form values to the question object
  this.question.question = this.values.question;
  this.question.type = this.values.type;
  this.question.options = [
    this.values.option1,
    this.values.option2,
    this.values.option3,
  ];
  this.question.answer = this.values.answer;
  
  // Update the question
  this.examApi.updateQuestion(this.ques,this.question).subscribe(
    data => {
      // Reload the questions to reflect changes in the browser
      this.loadQuestion();
    }
  );


  // Reset the form
  this.clear();
}

}