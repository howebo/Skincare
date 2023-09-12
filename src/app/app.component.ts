import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private api: ApiServiceService) {}
  size: any = 5;
  productsdata = [];
  selectedData = [];
  title = 'SkinCare';
  Budget: any = 0;
  Skin_Type: String = '';
  Skin_Concern_1: String = '';
  Skin_Concern_2: String = '';
  flag: boolean = true;

  ngOnInit(): void {
    this.getData(
      this.Budget,
      this.Skin_Type,
      this.Skin_Concern_1,
      this.Skin_Concern_2
    );
  }
  getData(box1: any, box2: String, box3: String, box4: String) {
    this.Budget = box1;
    this.Skin_Type = box2;
    this.Skin_Concern_1 = box3;
    this.Skin_Concern_2 = box4;
    this.flag = !this.flag;

    this.api
      .getproducts(
        this.Budget,
        this.Skin_Type,
        this.Skin_Concern_1,
        this.Skin_Concern_2
      )
      .subscribe((res: any) => {
        this.productsdata = res;
        this.selectedData = this.productsdata.filter(function (el) {
          return (
            el['Skin Type'] === box2 &&
            el['Concern #1'] === box3 &&
            el['Concern #2'] === box4
          );
        });
        this.selectedData.sort(function (a: any, b: any) {
          return a.Budget - b.Budget;
        });
        console.log(this.selectedData);
      });
  }
}
