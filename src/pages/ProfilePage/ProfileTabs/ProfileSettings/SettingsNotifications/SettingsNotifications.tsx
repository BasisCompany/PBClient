import { useMemo } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { NotificationRow } from "./NotificationRow";
import {
    NotificationType,
    useGetUserNotificationSettingsQuery,
} from "@/entities/user";

const notificationRows = [
    {
        type: NotificationType.PROMPT_COMMENT,
        label: "Новый комментарий",
        description: "На ваш промпт оставили комментарий",
    },
    {
        type: NotificationType.COMMENT_REPLY,
        label: "Ответ на комментарий",
        description: "На ваш комментарий ответили",
    },
    {
        type: NotificationType.PROMPT_PURCHASE,
        label: "Покупка промпта",
        description: "Ваш промпт купили",
    },
    {
        type: NotificationType.PROMPT_FAVORITE,
        label: "Промпт добавлен в избранное",
        description: "Ваш промпт добавили в избранное",
    },
];

export const SettingsNotifications = () => {
    const { data, isLoading } = useGetUserNotificationSettingsQuery();

    const userNotificationSettings = useMemo(() => {
        if (!data) return [];
        return notificationRows.map((row) => {
            const server = data?.find((el) => el.type === row.type);
            return {
                ...row,
                ...server!,
            };
        });
    }, [data]);

    if (isLoading || !userNotificationSettings.length) {
        return null;
    }

    return (
        <Box>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="right">Сайт</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userNotificationSettings.map((row) => (
                        <NotificationRow key={row.type} row={row} />
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};
