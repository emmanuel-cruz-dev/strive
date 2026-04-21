import { Component, HostListener, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NzMenuModule, NzButtonModule, NzIconModule, NzDrawerModule],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  isMobile = signal(window.innerWidth < 768);
  drawerVisible = signal(false);

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile.set(window.innerWidth < 768);
    if (!this.isMobile()) this.drawerVisible.set(false);
  }

  openDrawer(): void {
    this.drawerVisible.set(true);
  }
  closeDrawer(): void {
    this.drawerVisible.set(false);
  }
}
