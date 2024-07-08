import { FC } from "react";
import { useMobileDevice } from "@/shared/hooks";
import { FlexBox } from "@/shared/ui/FlexBox";
import { PagePagination } from "@/shared/ui/PagePagination";

interface ProfilePaginationProps {
    totalPages: number | undefined;
}

export const ProfilePagination: FC<ProfilePaginationProps> = ({
    totalPages,
}) => {
    const isMobile = useMobileDevice();
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
