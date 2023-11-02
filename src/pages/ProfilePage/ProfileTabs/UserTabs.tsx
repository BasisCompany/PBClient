import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import IntegratInstRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import { CustomTabs, CustomTab } from "../../../UI/Tabs";
import { useTabs } from "../../../hooks/useTabs";

const userTabs = ["", "comments"];

export const UserTabs = () => {
    const { value, handleChange } = useTabs(userTabs);

    return (
        <CustomTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
        >
            <CustomTab
                to=""
                label="Промты"
                icon={<IntegratInstRoundedIcon sx={{ fontSize: 25 }} />}
            />
            <CustomTab
                to="comments"
                label="Комментарии"
                icon={<ChatBubbleRoundedIcon sx={{ fontSize: 25 }} />}
            />
        </CustomTabs>
    );
};
