import { Component, OnChanges, OnInit } from '@angular/core';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit,OnChanges {

  inputValue:string ="";

  constructor(private valuesservice:ValuesService) { 
   // this.valuesservice.setValues(this.inputValue);
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    
  }
  valuechange(newValue:any) {
    this.inputValue = newValue;
    this.valuesservice.setValues(this.inputValue);
    
  }

}
