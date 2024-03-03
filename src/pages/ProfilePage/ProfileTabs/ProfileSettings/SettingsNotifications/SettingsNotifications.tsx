import {
    Box,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

function createNotificationData(name: string, subName: string) {
    return { name, subName };
}

const notificationRows = [
    createNotificationData(
        "Новый комментарий",
        "На ваш промпт оставили комментарий"
    ),
    createNotificationData(
        "Ответ на комментарий",
        "На ваш комментарий ответили"
    ),
    createNotificationData("Покупка промпта", "Ваш промпт купили"),
    createNotificationData(
        "Промпт добавлен в избранное",
        "Ваш промпт добавили в избранное"
    ),
];

export const SettingsNotifications = () => {
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
                    {notificationRows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "& td, & th": {
                                    pl: 0,
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                <Typography variant="text">
                                    {row.name}
                                </Typography>
                                <Typography
                                    variant="text"
                                    fontSize={14}
                                    color={(theme) =>
                                        theme.palette.text.secondary
                                    }
                                >
                                    {row.subName}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Switch size="small" color="secondary" />
                            </TableCell>
                            <TableCell align="right">
                                <Switch size="small" color="secondary" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

/* <FlexBox justifyContent="flex-end" gap={5} mr={1}>
    <Typography variant="text">Сайт</Typography>
    <Typography variant="text">Email</Typography>
</FlexBox>
<FlexBox justifyContent="space-between">
    <Box>
        <Typography variant="text">Оставили комментарий</Typography>
        <Typography
            variant="text"
            fontSize={14}
            color={(theme) => theme.palette.text.secondary}
        >
            Оставили комментарий
        </Typography>
    </Box>
    <FlexBox gap={2}>
        <Switch color="secondary" />
        <Switch color="secondary" />
    </FlexBox>
</FlexBox> */
