import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  text : string ='FATEC';
  inverso : string = '';

  isPalindromo(): boolean{
    let inverso = this.text.split('').reverse().join('');
    return this.text == inverso;
  }

}
