import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
id:number;
moviedetails:any;
imgPrefix:string="https://image.tmdb.org/t/p/w500";


  constructor(private _ApiService:ApiService ,private _ActivatedRoute:ActivatedRoute) {

  this.id = _ActivatedRoute.snapshot.params.id;
  console.log(this.id);

  this._ApiService.getmoviedetails(this.id).subscribe((data)=>{

    this.moviedetails=data;

  })
  

   }

  ngOnInit(): void {
  }

}
