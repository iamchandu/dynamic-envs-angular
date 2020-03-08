import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Env1Service } from './services/env1.service';
import { Env2Service } from './services/env2.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    Env1Service,
    {
      provide: APP_INITIALIZER,
      useFactory: (Env2Service: Env2Service) => () => Env2Service.loadEnvronments().toPromise(),
      deps: [Env2Service],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
