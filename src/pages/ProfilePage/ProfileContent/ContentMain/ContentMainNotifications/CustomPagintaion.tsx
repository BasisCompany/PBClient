import { Pagination, PaginationItem } from "@mui/material";
import { FC } from "react";
import { useSearchParams, Link } from "react-router-dom";

interface CustomPaginationProps {
    pathTo: string;
}

export const CustomPagination: FC<CustomPaginationProps> = ({ pathTo }) => {
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    return (
        <Pagination
            page={currentPage}
            count={10}
            showFirstButton
            showLastButton
            siblingCount={2}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`${pathTo}${
                        item.page === 1 ? "" : `?page=${item.page ?? "2"}`
                    }`}
                    {...item}
                />
            )}
        />
    );
};
