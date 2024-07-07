import { useParams } from "react-router";
import { FlexBox } from "../../shared/ui/FlexBox";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { ProfileStatistic } from "./ProfileStatistic/ProfileStatistic";
import { ProfileTabs } from "./ProfileTabs/ProfileTabs";
import { ProfileProvider, useUserProfileQuery } from "@/entities/user";

export const ProfilePage = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useUserProfileQuery(id!);

    //TODO: Загрузка & 404 Профиль
    if (isLoading) {
        return <h1>Загрузка</h1>;
    }
    //TODO: Иконку по центру экрана > Профиль не найден :(
    if (!data || isError) {
        return <h1>Профиль не найден</h1>;
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
