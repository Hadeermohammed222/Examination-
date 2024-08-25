import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  private baseUrl = 'https://exam-back-beta.vercel.app/questions';

  constructor(private http: HttpClient) { }

  
  getQuestions(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getQuestionById(Id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${Id}`);
  }
  putQuestions(question:any):Observable<any>{
      return this.http.post(`${this.baseUrl}`,question);
  }   
  updateQuestion(id:any,question:any){
      return this.http.put(`${this.baseUrl}/${id}`,question);
  }
  deleteQuestions(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getQuestionsById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
}
