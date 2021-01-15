import { Component, OnInit } from '@angular/core';
import { SearchService } from './shared/services/search.service';

/**
 * Starting component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeu Star wars';

  constructor(private service: SearchService) {

  }

  ngOnInit(): void {
    this.service.content.subscribe(item =>
      console.info('recherche', item)
    );
  }

  /**
   * Don't use it in template :D
   */
  maFonction(): void {
    console.warn('Appel fonction');
  }
}
