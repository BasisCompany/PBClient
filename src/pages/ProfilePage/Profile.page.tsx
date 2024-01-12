import { useParams } from "react-router";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { ProfileStatistic } from "./ProfileStatistic/ProfileStatistic";
import { useUserAboutQuery } from "./store/profileApi";
import { FlexBox } from "../../UI/FlexBox";
import { ProfileTabs } from "./ProfileTabs/ProfileTabs";

export const ProfilePage = () => {
    const { id } = useParams();

    const { data, isLoading } = useUserAboutQuery(id as string);

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
