import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFeatureComponent } from './add-feature/add-feature.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tableData = [
    {
      name: 'attendances_features',
      desc: 'Features of avarage attendance of games of football teams',
      created: 'Apr 6, 2020 9:57:36 PM',
      type: 'CACHED',
      online: 'No',
      version: 1
    },
    {
      name: 'games_features',
      desc: 'Feature of games',
      created: 'Apr 6, 2020 9:54:42 PM',
      type: 'CACHED',
      online: 'No',
      version: 2
    },
    {
      name: 'games_features_double_partitioned',
      desc: 'games_features partitioned by score and any_team_id',
      created: 'Apr 6, 2020 10:03:38 PM',
      type: 'CACHED',
      online: 'No',
      version: 1
    }
  ]
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  addData() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(AddFeatureComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        const data = {
          name: res.name,
          desc: res.desc,
          created: new Date().toString(),
          type: 'CACHED',
          online: 'No',
          version: 2
        }

        this.tableData.push(data);
      }
    });
  }

}
