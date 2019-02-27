import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.temperatura();
  }

  temperatura(){
   

    const emoji = document.querySelector('.emoji'),
          slider:any = document.querySelector('.slider'),
          tempOutput = document.querySelector('.temperature-output');

    console.log(emoji,slider,tempOutput);

    slider.addEventListener('input', () => {

        const sliderValue = slider.value;

        //Display temperature
        tempOutput.textContent = slider.value;

        //Display emoji
        if (sliderValue >= 0 && sliderValue <= 8) {
            emoji.textContent = '🥶';
        } else if (sliderValue > 8 && sliderValue <= 16) {
            emoji.textContent = '😬';
        } else if (sliderValue > 16 && sliderValue <= 24) {
            emoji.textContent = '😊';
        } else if (sliderValue > 24 && sliderValue <= 32) {
            emoji.textContent = '😅';
        } else {
            emoji.textContent = '🥵';
        }
    });

}

}
