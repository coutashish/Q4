import { Component, OnInit } from '@angular/core';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
