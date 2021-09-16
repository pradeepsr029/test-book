
export class Pagination {
    public limit = 10;
    public pageNo = 1;
    public sortByMoreData = {}

    public get getQueryParams() {
        let allParams = {
            $limit: 10,
            $offset: 0
        };
        if (this.limit > 5) {
            allParams.$limit = this.limit;
        }
        if (this.pageNo > 0) {
            allParams.$offset = this.pageNo*this.limit;
        }
        //Add more key
        if (Object.keys(this.sortByMoreData).length) {
            for (const key in this.sortByMoreData) {
                const value = this.sortByMoreData[key];
                allParams[key] = value;
            }
        }
        return allParams;
    }

    public resetSorting() {
        this.sortByMoreData = {};
    }
}