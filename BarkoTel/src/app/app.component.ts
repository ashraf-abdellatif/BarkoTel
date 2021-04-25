import { Component, HostListener, OnInit } from '@angular/core';
import { FakeAPIService } from './Service/fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BarkoTel';
  FilterItem: string[] | undefined;
  DisplayItem: string[] | undefined;
  currentIndex: any;
  currentSearchValue: string | undefined;
  tempSearchValue: string | undefined;
  constructor(
    private fakeAPIService: FakeAPIService
  ) { }

  LoadSearchData(searchValue: any): void {
    this.currentIndex = -1;
    this.FilterItem = [];
    this.tempSearchValue = '';
    if (searchValue.value) {
      this.fakeAPIService.loadSearchData(searchValue).subscribe(result => {
        this.FilterItem = result;
      });
      this.tempSearchValue = searchValue.value;
    }
  }
  LoadData(item: any): void {
    this.currentSearchValue = item;
    this.tempSearchValue = item;
    this.fakeAPIService.loadData(item).subscribe(result => {
      this.DisplayItem = result;
    })
    this.FilterItem = [];
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.FilterItem) {
      if (event.key == 'ArrowDown') {
        if (this.FilterItem.length - 1 > this.currentIndex) {
          this.currentIndex = this.currentIndex + 1;
        } else {
          this.currentIndex = -1;
        }
      } else if (event.key == 'ArrowUp') {
        if (this.FilterItem.length > 0 && this.currentIndex > 0) {
          this.currentIndex = this.currentIndex - 1;
        } else {
          this.currentIndex = this.FilterItem ? this.FilterItem.length : -1;
        }
      }
      if (this.currentIndex >= 0 && this.currentIndex <= this.FilterItem.length - 1) {
        this.currentSearchValue = this.FilterItem[this.currentIndex];
      } else {
        this.currentSearchValue = this.tempSearchValue;
      }
    }


  }

  lst_hover(index: any) {
    this.currentIndex = index;
  }
}
