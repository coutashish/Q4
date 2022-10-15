import { Component, OnInit } from '@angular/core';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  values: string = '';
  constructor(private valuesservice: ValuesService) {}

  ngDoCheck() {
    this.valuesservice.getValues().subscribe((val: any) => {
      this.values = val;
    });
  }
  ngOnInit(): void {}
}
