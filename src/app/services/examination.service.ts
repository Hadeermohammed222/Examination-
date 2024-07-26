import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  private baseUrl = 'http://localhost:3005';

  constructor(private http: HttpClient) { }

  
  getQuestions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/questions`);
  }
  getQuestionById(Id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/questions/${Id}`);
  }
  putQuestions(question:any):Observable<any>{
      return this.http.post(`${this.baseUrl}/questions`,question);
  }   
  updateQuestion(id:any,question:any){
      return this.http.put(`${this.baseUrl}/questions/${id}`,question);
  }
  deleteQuestions(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/questions/${id}`);
  }
  getQuestionsById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/questions/${id}`);
  }
  
}
