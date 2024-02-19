import { useParams } from "react-router";
import { FlexBox } from "../../shared/ui/FlexBox";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { ProfileStatistic } from "./ProfileStatistic/ProfileStatistic";
import { useUserAboutQuery } from "./store/profileApi";
import { ProfileTabs } from "./ProfileTabs/ProfileTabs";

export const ProfilePage = () => {
    const { id } = useParams();

    const { data, isLoading } = useUserAboutQuery(id!);

    //TODO: Загрузка & 404 Профиль
    if (isLoading) {
        return <h1>Загрузка</h1>;
    }

    if (!data) {
        return <h1>Страница не найдена ;(</h1>;
    }

    return (
        <>
            <ProfileHeader userAbout={data} />
            <FlexBox sx={{ flexDirection: { xs: "column", lg: "row" } }}>
                <ProfileStatistic />
                <ProfileTabs />
            </FlexBox>
        </>
    );
};
