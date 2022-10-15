import { Component, OnInit } from '@angular/core';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

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
