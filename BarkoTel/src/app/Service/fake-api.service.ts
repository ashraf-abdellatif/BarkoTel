import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {

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
  constructor(
  ) { }

  loadSearchData(searchValue: any) {
    let filterItem: string[] = [];
    if (searchValue.value) {
      filterItem = this.Items.filter((a) =>
        a.toLowerCase().includes(searchValue.value.toLowerCase())
      ).slice(0, 5);
    }
    return of(filterItem);
    // return filterItem;
  }

  loadData(item: any) {
    let DisplayItem: string[] = this.Items.filter((a) =>
      a.toLowerCase().includes(item.toLowerCase())
    );
    return of(DisplayItem);
  }
}
