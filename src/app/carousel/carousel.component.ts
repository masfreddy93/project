import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  slides = [
    {img: 'https://via.placeholder.com/800x400/ff0000/000000?text=1'},
    {img: 'https://via.placeholder.com/800x400/00ff00/000000?text=2'},
    {img: 'https://via.placeholder.com/800x400/0000ff/000000?text=3'},
  ];
  currentSlide = 0;

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide + this.slides.length - 1) % this.slides.length;
  }
}

