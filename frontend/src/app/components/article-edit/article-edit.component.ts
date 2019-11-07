import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import swal from 'sweetalert';


@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-imagen'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };



  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService

  ) {
    this.article = new Article('', '', '', null, null);
    this.is_edit = true;
    this.page_title = 'Editar articulo';
    this.url = Global.url;
  }



  //  constructor() { }

  ngOnInit() {
    this.getArticle();
  }



  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          //console.log(this.article._id);

          //Alerta
          swal(
            'Articulo editado!',
            'El articulo se ha editado correctamente',
            'success'
          );
          this._router.navigate(['/blog/article', this.article._id]);

        } else {
          console.log('error 1');
          console.log(this.status);
          console.log(this.article._id);
          this.status = 'error';
        }
      },
      error => {
        console.log('error 2');
        console.log(this.status);
        console.log(this.article._id);

        //Alerta
        swal(
          'Articulo editado!',
          'El articulo se ha editado casi correctamente',
          'error'
        );
        this._router.navigate(['/blog/article', this.article._id]);
        this.status = error;
      }
    );
  }

  imageUpload(data) {
    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image;
  }


  getArticle() {
    this._route.params.subscribe(params => {

      //console.log(JSON.parse(params['id'])+" hola");

      let id = params['id'];

      //console.log(id);

      this._articleService.getArticle(id).subscribe(
        response => {
          //console.log(response);
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['home']);
          }
        },
        error => {
          //console.log(error);
          //console.log(id);
          //this._router.navigate(['home']);
        }
      );

    });
  }
}
