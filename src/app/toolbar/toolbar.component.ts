import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
  constructor( private route: ActivatedRoute) {}
  title = ''
  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }

}
