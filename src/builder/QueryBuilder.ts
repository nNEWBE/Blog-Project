import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchableFields: string[]) {
        const search = this?.query?.search;
        if (search) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map(
                    (field) =>
                        ({
                            [field]: { $regex: search, $options: 'i' },
                        }) as FilterQuery<T>,
                ),
            });
        }
        return this;
    }

    sort() {
        const sortOrder = this?.query?.sortOrder as string;
        const sortBy =
            (this?.query?.sortBy as string)?.split(',')?.join(' ') || '-createdAt';

        this.modelQuery = this.modelQuery.sort(`${sortOrder === 'desc' ? '-' : ''}${sortBy}`);
        return this;
    }

    filter() {
        const queryObj = { ...this.query };
        const excludeFields = ['search', 'sortBy', 'sortOrder', 'limit', 'page', 'fields'];
        excludeFields.forEach((el) => delete queryObj[el]);
        this.modelQuery = this.modelQuery.find({ author: queryObj.filter } as FilterQuery<T>);
        return this;
    }

    paginate() {
        const page = Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const skip = (page - 1) * limit;

        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }

    fields() {
        const fields =
            (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';

        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
}

export default QueryBuilder;