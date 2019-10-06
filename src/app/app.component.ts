import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleAction } from './store/actions/example.action';
import { ExampleState } from './store/reducers/example.reducer';
import { appState } from './store/reducers/index.reducer';
import { IncreaseCounter, DecreaseCounter, StartCounter } from './store/actions/second.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private store : Store<appState>
  ) {};

  ngOnInit() {
    this.store.select('second').subscribe(console.log);
  };

  handleClick() {
    // this.store.dispatch({type: 'change_username', payload: {username : 'değiştirildiii....'}});
    this.store.dispatch(new ExampleAction({username : 'changed knk ...'}))
  };

  handleCounter(type: string) {
    this.store.dispatch(new StartCounter(type));
  }
}
