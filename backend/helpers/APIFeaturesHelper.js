class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    search() {
        const keyword = this.queryString.keyword
            ? {
                name: {
                    $regex: this.queryString.keyword,
                    $options: "i",
                },
            }
            : {};

        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        if (this.queryString.category) {
            this.query = this.query.find({
                category: this.queryString.category,
            });
        }
        return this;
    }

    sort() {
        this.query =
            this.queryString.sorter == "price"
                ? this.query.sort({ price: 1 })
                : this.queryString.sorter == "ratings"
                    ? this.query.sort({ rating: -1 })
                    : this.query;
        return this;
    }
    pagination() {
        const resultsPerPage = 7;
        const currentPage = this.queryString.page || 1;
        const skip = resultsPerPage * (currentPage - 1);
        this.query = this.query.limit(resultsPerPage).skip(skip);
        return this;
    }
}

module.exports = APIFeatures;
