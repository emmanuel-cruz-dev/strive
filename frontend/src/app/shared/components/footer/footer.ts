import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

interface FooterLink {
  label: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NzIconModule, NzButtonModule, NzDividerModule, NzTooltipModule],
  templateUrl: './footer.html',
})
export class Footer {
  readonly socialLinks: SocialLink[] = [
    { icon: 'x', url: 'https://x.com', label: 'Twitter' },
    { icon: 'linkedin', url: 'https://linkedin.com', label: 'Linkedin' },
    { icon: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'youtube', url: 'https://youtube.com', label: 'Youtube' },
  ];

  readonly footerSections: FooterSection[] = [
    {
      title: 'Producto',
      links: [
        { label: 'Inicio', url: '/' },
        { label: 'Funciones', url: '/functions' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'Sobre nosotros', url: '/about' },
        { label: 'Contacto', url: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', url: '/legal/privacy' },
        { label: 'Términos de uso', url: '/legal/terms' },
      ],
    },
  ];
}
