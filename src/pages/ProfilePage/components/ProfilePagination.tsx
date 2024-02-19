import { FC } from "react";
import { PagePagination } from "../../../shared/ui/PagePagination";
import { FlexBox } from "../../../shared/ui/FlexBox";

interface ProfilePaginationProps {
    isMobile: boolean;
    totalPages: number | undefined;
}

export const ProfilePagination: FC<ProfilePaginationProps> = ({
    isMobile,
    totalPages,
}) => {
    return (
        <FlexBox sx={{ justifyContent: isMobile ? "center" : "end", mt: 2 }}>
            <PagePagination
                count={totalPages}
                siblingCount={isMobile ? 0 : 2}
                size={isMobile ? "small" : "medium"}
            />
        </FlexBox>
    );
};
