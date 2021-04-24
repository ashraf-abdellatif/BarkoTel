import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BarkoTel';
  Items: string[] = [
    'Apple',
    'headphones',
    'sofa',
    'thread',
    'Orange',
    'shoes',
    'sandal',
    'lamp',
    'Banana',
  ];
  FilterItem: string[] | undefined;
  DisplayItem: string[] | undefined;
  constructor() {}
  LoadSearchData(searchValue: any): void {
    this.FilterItem = [];
    if (searchValue.value)
      this.FilterItem = this.Items.filter((a) =>
        a.toLowerCase().includes(searchValue.value.toLowerCase())
      ).slice(0, 5);
  }
  LoadData(item: any): void {
    this.DisplayItem = this.Items.filter((a) =>
      a.toLowerCase().includes(item.value.toLowerCase())
    );
    this.FilterItem = [];
  }
}
