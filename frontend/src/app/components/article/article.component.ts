import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import swal from 'sweetalert';
import { ArticleService} from '../../services/article.service';
import { Article } from '../../models/article';
import {Global} from '../../services/global';




@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})


export class ArticleComponent implements OnInit {
  //@Output() article: Article;  

  public article: Article;
  public url : string;
  

  constructor(
    private _articleService : ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
   }

  public ngOnInit() {

    this._route.params.subscribe(params =>{

      //console.log(JSON.parse(params['id'])+" hola");

      let id = params['id'];

      //console.log(id);

      this._articleService.getArticle(id).subscribe(
        response =>{
            //console.log(response);
            if(response.article){
              this.article = response.article;
            }else{

              this._router.navigate(['home']);
            }
        }, 
        error =>{
          //console.log(error);
          //console.log(id);
          //this._router.navigate(['home']);
        }
      );

    });
    
  }

  delete(id){

    swal({
      title: "Estas seguro?",
      text: "Una vez borrado el articulo, no podras recuperarlo!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response=>{
        swal("Articulo borrado!", {
          icon: "success",
        });

        
          
            this._router.navigate(['/blog']);
          },
          error=>{
            console.log(error);
          }
        )

        
      } else {
        swal("Nada se ha borrado!");
      }
    });



    
  }

}
