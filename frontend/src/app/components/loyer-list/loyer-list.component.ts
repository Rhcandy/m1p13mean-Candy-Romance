import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyerService } from '../../services/loyer.services';
import { Loyer } from '../../models/loyer.model';

@Component({
  selector: 'app-loyer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loyer-list.component.html'
})
export class LoyerListComponent implements OnInit {

  loyers: Loyer[] = [];

  constructor(private loyerService: LoyerService) {}

  ngOnInit(): void {
    const boutiqueId = '69936e9119fa55f59586c4eb';

    this.loyerService.getAll(boutiqueId).subscribe((res: any) => {
      console.log(res);
      this.loyers = res.data;
    });
  }
}
