import { Component, OnInit } from '@angular/core';
import { Pagination } from '../classes/pagnation';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent extends Pagination implements OnInit {
  public cardListing: any = [];
  public isApiCallInProgress: boolean = true;

  constructor(
    private _httpService: HttpService
  ) {
    super();
  }


  ngOnInit(): void {
    this.getCarListing();
  }

  /**
   * @function getCarListing
   * @summary get listing
   */
  private getCarListing() {
    this.isApiCallInProgress = true;
    this._httpService.getCarListing("", this.getQueryParams).subscribe(response => {
      this.isApiCallInProgress = false;
      this.cardListing = response;
      console.log(response)
    }, (error) => {
      this.isApiCallInProgress = false;
    })
  }

  /**
   * @function
   * @param isNext 
   */
  public nextPreviousPage(isNext = true) {
    if (isNext) {
      ++this.pageNo;
    } else {
      --this.pageNo;
    }
    this.getCarListing();
  }

  /**
   * @function
   * @param event
   * @summary 
   */
  public changeApplyFilter(event) {
    const value = event.target.value;
    if (value) {
      this.sortByMoreData[value] = this.cardListing[0].crash_date;
    } else {
      this.resetSorting();
    }
    this.getCarListing();
  }

}
