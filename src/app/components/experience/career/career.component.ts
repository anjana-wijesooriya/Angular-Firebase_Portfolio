import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  @Input() job: Experience;

  constructor() { }

  ngOnInit() {
  }

}
