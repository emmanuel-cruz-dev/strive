import { Component } from '@angular/core';

import { HeroSection } from '../components/hero-section/hero-section';
import { CtaBanner } from '../../../shared';

@Component({
  selector: 'app-home',
  imports: [HeroSection, CtaBanner],
  templateUrl: './home.html',
})
export class Home {}
