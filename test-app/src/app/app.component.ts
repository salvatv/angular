import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salvatv';
  myItems = [{
    'id': 1,
    'name': 'Juanky',
    'description': 'This item is a shit',
    'stock': 5
  },
  {'id': 2,
  'name': 'Peter',
  'description': 'This item is a bullshit',
  'stock': 10
  },
  {'id': 3,
  'name': 'Pako',
  'description': 'This item is a genius',
  'stock': 0
  }];
}
