import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header [headerText]="'Brian'"></app-header>
  `,
})
export class App {}

bootstrapApplication(App);
