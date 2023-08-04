import { ContentHeader } from "./ContentHeader/ContentHeader";
import { ContentMain } from "./ContentMain/ContentMain";
import { ContentWrapper } from "./ContentWrapper";

export const ProfileContent = () => {
    return (
        <ContentWrapper>
            <ContentHeader />
            <ContentMain />
        </ContentWrapper>
    );
};
