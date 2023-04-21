import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  name$ = new BehaviorSubject('');
  pet$ = this.pet;
  emit$ = new BehaviorSubject('');

  @Input() set headerText(text: string) {
    this.name$.next(text);
  }

  get pet() {
    return combineLatest([this.name$, this.emit$]).pipe(
      map((x) => {
        console.log(x);
        return x + 'rex';
      })
    );
  }

  onClick() {
    this.emit$.next('ok');
  }

  constructor() {}

  ngOnInit() {}
}
