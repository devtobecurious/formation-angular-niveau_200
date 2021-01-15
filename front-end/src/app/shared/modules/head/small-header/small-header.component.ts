import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-small-header',
  templateUrl: './small-header.component.html',
  styleUrls: ['./small-header.component.css']
})
export class SmallHeaderComponent implements OnInit {

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  onKeyUp(event: any): void {
    this.service.launchSearch(event.target.value);
  }

}
