import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from "swiper";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper:Swiper;

  images: string[] = [
    'assets/images/swiper01.png',
    'assets/images/swiper02.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container',{
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

}
