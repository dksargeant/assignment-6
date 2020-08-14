import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NumberSymbol } from '@angular/common';
import { emit } from 'process';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page;
  @Output() newPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(){
    this.newPage.emit(this.page + 1);
  }

  previousPage(){
    if(this.page > 1 ){
      this.newPage.emit(this.page -1 );
    }
  }

}
