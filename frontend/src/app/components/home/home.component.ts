import { Component, OnInit } from '@angular/core';
import { ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Global} from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

public title: string;
public articles : Article[];
public url : string;
public prueba : string;

  constructor(
    private _articleService : ArticleService
  ) { 
    this.title= 'Ultimos titulos';
    this.url = Global.url;
  }

  ngOnInit() {

    this._articleService.pruebas().subscribe(
      response=>{
        console.log(response);
        this.prueba = response;
      }
    )

    this._articleService.getArticles(false).subscribe(
     
      response =>{
        console.log(response);
        if(response.articles){
          this.articles = response.articles;
        }else{
          
        }
      },
      error=>{
        console.log(error);
      }

    );




  }

}
