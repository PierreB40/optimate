import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
  constructor( private route: ActivatedRoute) {}
  title = '';
  links: MenuItem[];
  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
    this.links = [
      {label: 'Supply', routerLink: ['/supply'] },
      {label: 'Forcol', routerLink: ['/forcol'] },
      {label: 'Login', routerLink: ['/login'] }
  ];
  }

}
