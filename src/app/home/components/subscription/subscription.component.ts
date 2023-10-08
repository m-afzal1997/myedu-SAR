import { Component, OnInit } from '@angular/core';
import { Dob } from './interfaces/subscription.interface';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  public dob: Dob = {
    day: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ],
    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    year: [
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
      '2026',
      '2027',
      '2028',
      '2029',
      '2030',
    ],
  };
  public selectedGender: string = '';
  public selectedTopic: string[] = [];
  public topics: string[] = [
    'Arabic',
    'English',
    'History',
    'Sports',
    'Islamic',
  ];
  public genders: string[] = ['Boy', 'Girl'];
  public constructor() {}

  public ngOnInit(): void {}
  public selectGender(gender: string): void {
    this.selectedGender = gender;
  }
  public selectTopic(topic: string): void {
      if (this.selectedTopic.indexOf(topic) !== -1) {
        this.selectedTopic.splice(this.selectedTopic.indexOf(topic), 1);
      } else if(this.selectedTopic.length < 3) {
        this.selectedTopic.push(topic);
      }
  }
}
