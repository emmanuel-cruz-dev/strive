import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar, Footer } from '../../shared';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
