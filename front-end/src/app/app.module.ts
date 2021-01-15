import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StarwarsJediModule } from 'starwars-jedi';
import { RxjsdiscorveryModule } from './shared/modules/rxjsdiscorvery/rxjsdiscorvery.module';
import { HeadModule } from './shared/modules/head/head.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CounterModule } from './features/tests/counters/counter.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffect } from './features/authentications/store/effects/authentication.effects';
import { AuthenticationService } from './shared/services/users/authentication.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarwarsJediModule,
    RxjsdiscorveryModule,
    HeadModule,
    CounterModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthenticationEffect]),
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
