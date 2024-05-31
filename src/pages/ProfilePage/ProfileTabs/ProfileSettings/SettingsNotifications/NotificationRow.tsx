import { TableRow, TableCell, Typography, Switch } from "@mui/material";
import { FC, useState } from "react";
import {
    NotificationSetting,
    useUpdateUserNotificationSettingsMutation,
} from "@/entities/user";

interface NotificationRowProps {
    row: NotificationSetting;
}

export const NotificationRow: FC<NotificationRowProps> = ({ row }) => {
    const [siteEnabled, setSiteEnabled] = useState(row.site);
    const [emailEnabled, setEmailEnabled] = useState(row.email);

    const [updateSettings] = useUpdateUserNotificationSettingsMutation();

    const handleToggleSite = async (type: "site" | "email") => {
        const isSite = type === "site";
        const currentState = isSite ? siteEnabled : emailEnabled;
        const setState = isSite ? setSiteEnabled : setEmailEnabled;

        setState((prev) => !prev);
        try {
            await updateSettings({
                notificationType: row.type,
                [`${type}Enabled`]: !currentState,
            }).unwrap();
        } catch (error) {
            setState((prev) => !prev);
        }
    };

    return (
        <TableRow
            sx={{
                "& td, & th": {
                    pl: 0,
                    pr: 1.5,
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row">
                <Typography variant="text">{row.label}</Typography>
                <Typography
                    variant="text"
                    fontSize={14}
                    color={(theme) => theme.palette.text.secondary}
                >
                    {row.description}
                </Typography>
            </TableCell>
            <TableCell align="right">
                <Switch
                    checked={siteEnabled}
                    onChange={() => handleToggleSite("site")}
                    size="small"
                    color="secondary"
                />
            </TableCell>
            <TableCell align="right">
                <Switch
                    checked={emailEnabled}
                    onChange={() => handleToggleSite("email")}
                    size="small"
                    color="secondary"
                />
            </TableCell>
        </TableRow>
    );
};
