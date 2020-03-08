import { Component, OnInit } from '@angular/core';
import { Env1Service } from './services/env1.service';
import { Env2Service } from './services/env2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-envs';
  apiURL1: string;
  mode1: string;
  apiURL2: string;
  mode2: string;
  constructor(private env1: Env1Service, private env2: Env2Service) { }

  ngOnInit() {
    /* First Method */
    const getData = this.env1.getEnv();
    this.apiURL1 = getData.apiURL;
    this.mode1 = getData.mode;

    /* second Method */
    this.env2.Envronment$.subscribe(res => {
      this.apiURL2 = res.apiURL;
      this.mode2 = res.mode;
    });
  }
}
