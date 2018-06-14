import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private farms: object[] = [
    {id: '1', Farm: 'Natural Prairie1', produce: ['lettuce1','tomato1']},
    {id: '2', Farm: 'Natural Prairie2', produce: ['lettuce2','tomato2']},
    {id: '3', Farm: 'Natural Prairie3', produce: ['lettuce3','tomato3']}
  ];

  constructor() { }


  getData() {
    return this.farms;
  }

  getDataFromId(id): object {

    console.log('getDataFromId ' + id);
    for (let farm of this.farms) {
      // console.log('loop ' + farm['id']);
      if (farm['id'] == id) {
        return farm;
      }
    }
    return null;
  }
}
