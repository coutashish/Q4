import { Component, OnInit } from '@angular/core';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  values: string = '';
  constructor(private valuesservice: ValuesService) {}

  ngDoCheck() {
    this.valuesservice.getValues().subscribe((val: any) => {
      this.values = val;
    });
  }
  ngOnInit(): void {
  }

}
