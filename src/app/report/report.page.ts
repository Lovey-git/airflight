import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(    private api: ApiService,
    ) { }

  user :any;

  ngOnInit() {
    this.api.get_all_users().subscribe(
      data => {
        if (data.status == 0) {
          console.log(data.data);
          this.user = data.data;
        } else {
          
        }
      }, error => {
        
        
      }
    );
  }

}
