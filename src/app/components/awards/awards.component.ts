import { Component, OnInit } from '@angular/core';
import { AwardService } from 'src/app/services/award.service';
import { Award } from 'src/app/models/award.model';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  awards: Award[] = [];
  constructor(private awardService: AwardService) { }

  ngOnInit() {
    this.GetAwards();
  }

  async GetAwards(){
    await this.awardService.GetAwards().subscribe(response => {
      this.awards = Object.values(response);
      window['awards'] = this.awards;
    })
  }

}
