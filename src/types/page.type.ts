export interface PageRequest {
    sort: string;
    page: number;
    take: number;
}

export interface PageResponse<T> {
    data: T[];
    meta: {
        currentPage: number;
        take: number;
        totalItems: number;
        totalPages: number;
    };
}
