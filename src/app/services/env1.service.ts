import { Injectable } from '@angular/core';
import {PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Env1Service {

  constructor(public platformLocation: PlatformLocation) { }

  getEnv() {
    /**  Identify current url */
    const currentURL = (this.platformLocation as any).location.origin;
    /** set envronment default dev */
    let envs = {apiURL: 'http://dev.com', mode: 'dev'};

    /** I assumed my current url is related to test I set my Test envronments. Do for production also same */
    if (currentURL === 'http://localhost:4001') {
      envs.apiURL = 'http://test.com',
      envs.mode = 'Test';
    } else if (currentURL === 'http://localhost:4002') {
      envs.apiURL = 'http://prod.com',
      envs.mode = 'Production';
    }
    return envs;
  }
}
