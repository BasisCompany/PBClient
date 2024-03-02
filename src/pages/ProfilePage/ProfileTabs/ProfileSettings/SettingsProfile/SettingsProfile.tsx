import { UserImages } from "./UserImages";
import { UserInformation } from "./UserInformation";

export const SettingsProfile = () => {
    return (
        <>
            <UserImages />
            <UserInformation />
        </>
    );
};

/*

import AvaTest320 from "@/assets/AvaTest320.png";
import AvaTest550 from "@/assets/AvaTest550.png";
import AvaTest1080 from "@/assets/AvaTest1080.png";

<Image
    src={AvaTest550}
    srcMedia={[`${AvaTest320} 600w`, `${AvaTest1080} 1000w`]}
    height="400px"
    width="400px"
/>
*/
