import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TxComplete } from 'src/app/transaction/models/TxCModel';
import { TxModel } from 'src/app/transaction/models/TxModel';
import { UserpageService } from '../userpage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userpage: UserpageService, private activatedRoute: ActivatedRoute, public userService: UserService) { }


  pendingTxs: TxModel[];
  completeTxs: TxComplete[];
  user;
  profilePic: string;

  ngOnInit(): void {
    this.userpage.getOpenTxs(this.activatedRoute.snapshot.params.id).subscribe((success) => {
      this.pendingTxs = success;
      console.log(success);
    },
    (error) => {
      console.error(error.message);
    });
    this.userpage.getCompletedTxs(this.activatedRoute.snapshot.params.id).subscribe((success) => {
      this.completeTxs = success;
      console.log(success)
    },
    (error) => {
      console.error(error.message);
    })
    this.userService.getUser(this.activatedRoute.snapshot.params.id).subscribe((success) => {
      this.user = success;
      this.profilePic = "https://www.salesman.org/wp-content/uploads/2015/05/suit-hacks-for-salesmen.jpg"//'https://www.raceentry.com/img/Race-Registration-Image-Not-Found.png';
    },
    (error) => {
      console.error(error.message);
    })
  }

}
