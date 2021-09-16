import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  public carDetails = null;
  public isApiCallInProgress = false;

  constructor(
    private _http: HttpService,
    private _acRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log()
    this.getCarDetails();
  }

  private getCarDetails() {
    this.isApiCallInProgress = true;
    this._http.getCarDetails('', { collision_id: this._acRouter.snapshot.params.id }).subscribe(response => {
      this.isApiCallInProgress = false;
      this.carDetails = (response ? response[0] : null);
      console.log(this.carDetails)
    }, (error) => {
      this.isApiCallInProgress = false;
    })
  }

}
