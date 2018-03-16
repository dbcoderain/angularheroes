import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  myName: string;

  constructor(private messageService: MessageService) {
    console.log('constructing.. herodetailcomponent');

  }

  heroNameChange(): void {
    debugger;
    this.messageService.add('name change...');
  }

  heroNameKeypress(event): void {
    debugger;
    this.messageService.add('name keypress...');
  }

  heroNameBlur(): void {
    this.messageService.add('name blur...');
  }

  ngOnInit() {
    this.messageService.add('HeroDetailComponent: hero details..');
  }

}
