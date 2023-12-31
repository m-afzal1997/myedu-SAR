import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card, Link } from './intefraces/card.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  {

  public cards: Card[] = [
    { img: 'assets/icon/svg/subscribe.svg', title: 'Subscribe', description: 'Select a subscription plan that suits your child\'s learning needs and preferences.' },
    { img: 'assets/icon/svg/customize.svg', title: 'Personalise Your Box', description: 'Tell us about your child\'s age, interests, and learning goals, and we\'ll customize their surprise box accordingly.' },
    { img: 'assets/icon/svg/surprise.svg', title: 'Receive Your Surprise Box', description: 'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.' }
  ];

  public footerLinks: Link[] = [
    {text: 'Link One', url: '../'},
    {text: 'Link Two', url: '../'},
    {text: 'Link Three', url: '../'},
    {text: 'Link Four', url: '../'},
    {text: 'Link Five', url: '../'}
  ]
  public constructor() { }

}
