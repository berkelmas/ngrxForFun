import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NGRX
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appRootReducer } from './store/reducers/index.reducer';

// NGRX EFFECTS
import { SecondEffects } from './store/effects/second.effect';

// CUSTOM COMPONENTS AND MODULES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appRootReducer),
    EffectsModule.forRoot([SecondEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
