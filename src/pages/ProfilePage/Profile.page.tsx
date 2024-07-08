import { useParams } from "react-router";
import { FlexBox } from "../../shared/ui/FlexBox";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { ProfileStatistic } from "./ProfileStatistic/ProfileStatistic";
import { ProfileTabs } from "./ProfileTabs/ProfileTabs";
import { NotFoundProfile } from "./NotFoundProfile";
import { ProfileProvider, useUserProfileQuery } from "@/entities/user";
import { LoadingCircular } from "@/shared/ui/Loading";

export const ProfilePage = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useUserProfileQuery(id!);

    if (isLoading) {
        return <LoadingCircular />;
    }

    if (!data || isError) {
        return <NotFoundProfile />;
    }

    return (
        <ProfileProvider userAbout={data}>
            <ProfileHeader />
            <FlexBox sx={{ flexDirection: { xs: "column", lg: "row" } }}>
                <ProfileStatistic />
                <ProfileTabs />
            </FlexBox>
        </ProfileProvider>
    );
};
