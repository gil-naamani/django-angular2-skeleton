import { Component, OnInit } from '@angular/core';

import { HelloWorldService } from '../services/hello-world.service'

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../stylesheets/app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.helloWorldService.getMessage()
        .then(response => this.title = response);
	}
}
