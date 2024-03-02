import { ImgButtonsBox } from "./ImgButtonsBox";
import { Image } from "@/shared/ui/Image";
import { FlexBox } from "@/shared/ui/FlexBox";

export const UserImages = () => {
    return (
        <FlexBox mb={2}>
            <ImgButtonsBox mr={1}>
                <Image
                    src="https://styles.redditmedia.com/t5_2ewfae/styles/profileIcon_ilzhrv7d81nb1.png?width=256&height=256&crop=256:256,smart&s=844ae838ed01e71c9b990bc8760853abd290f6b4"
                    alt="backgroundImg"
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
            </ImgButtonsBox>
            <ImgButtonsBox flexBasis="85%">
                <Image
                    src="https://styles.redditmedia.com/t5_2ewfae/styles/profileBanner_geaz0lw3ghic1.jpg?width=1280&height=384&crop=1280:384,smart&s=0f9489c666767cfbcebde4008248eb0956961970"
                    alt="backgroundImg"
                    width="100%"
                    height={{
                        xs: "100px",
                        md: "125px",
                        lg: "150px",
                    }}
                    borderRadius="15px"
                />
            </ImgButtonsBox>
        </FlexBox>
    );
};
