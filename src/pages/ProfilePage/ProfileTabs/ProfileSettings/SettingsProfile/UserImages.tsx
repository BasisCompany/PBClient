import { Box } from "@mui/material";
import { EditButtons } from "./EditButtons";
import { Image } from "@/shared/ui/Image";
import { FlexBox } from "@/shared/ui/FlexBox";
import {
    useDeleteAvatarMutation,
    useDeleteBannerMutation,
    useProfileUser,
    useUpdateAvatarMutation,
    useUpdateBannerMutation,
} from "@/entities/user";
import { Avatar } from "@/shared/ui/Image/Avatar";

export const UserImages = () => {
    const { username, avatar, banner } = useProfileUser();

    const [updateAvatar] = useUpdateAvatarMutation();
    const [updateBanner] = useUpdateBannerMutation();
    const [deleteAvatar] = useDeleteAvatarMutation();
    const [deleteBanner] = useDeleteBannerMutation();

    return (
        <FlexBox mb={2}>
            <EditButtons
                mr={1}
                isAvatar
                showDelete={!!avatar}
                updateImg={updateAvatar}
                deleteImg={deleteAvatar}
            >
                <Avatar
                    src={avatar}
                    alt={username}
                    width={{
                        xs: "100px",
                        md: "125px",
                        lg: "150px",
                    }}
                    height={{
                        xs: "100px",
                        md: "125px",
                        lg: "150px",
                    }}
                    borderRadius="15px"
                />
            </EditButtons>
            <EditButtons
                flexBasis="85%"
                showDelete={!!banner}
                updateImg={updateBanner}
                deleteImg={deleteBanner}
            >
                {banner ? (
                    <Image
                        src={banner}
                        alt={username}
                        showError={false}
                        width="100%"
                        height={{
                            xs: "100px",
                            md: "125px",
                            lg: "150px",
                        }}
                        borderRadius="15px"
                    />
                ) : (
                    <Box
                        width="100%"
                        height="100%"
                        bgcolor={(theme) => theme.palette.secondary.main}
                        borderRadius="15px"
                    />
                )}
            </EditButtons>
        </FlexBox>
    );
};

/* <Avatar
    src={avatar ?? DefaultAvatar}
    alt={username}
    sx={{
        width: {
            xs: "100px",
            md: "125px",
            lg: "150px",
        },
        height: {
            xs: "100px",
            md: "125px",
            lg: "150px",
        },
        borderRadius: "15px",
    }}
/> 
*/
