import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'moovi-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  @Input() name: string;
  @Input() lastName: string;
  @Input() secondLastName: string;
  @Input() patient: string;
  @Input() age: string;

  @Input() duration: string;
  @Input() firstTime: boolean;
  @Input() haveExtras: boolean;

  @Input() hourDate: string;

  @Input() isAvaliable: boolean;
  @Input() hidden: boolean;


  initials: string;

  gradient: number;

  constructor() { }

  ngOnInit() {
    this.initials = this.name[0] + this.lastName[0];

    this.gradient = Math.floor(Math.random() * 10);
  }

}
