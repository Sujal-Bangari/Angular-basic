import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {
  ngOnInit(): void {
    console.log('LoggerComponent has been initailized.');
}
}
