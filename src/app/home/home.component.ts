import { AuthService } from './../auth.service';
import { ApiService } from './../api.service';
import { Component, OnInit ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  terms:string='';
  channel:any;
trendingMovies:any[]=[];
imgSrc="https://image.tmdb.org/t/p/w500";
trendingTv:any[]=[];
  constructor(private _ApiService:ApiService) {

    this.channel=this._ApiService.getTrending('movie').subscribe((data)=>{

     this.trendingMovies=data.results.slice(0,10);
    })

    this._ApiService.getTrending('tv').subscribe((data)=>{

      this.trendingTv=data.results.slice(0,10);
     })


   }



  ngOnInit(): void {
  }

  ngOnDestroy(){

    this.channel.unsubscribe();
    
  }

}
