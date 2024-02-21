import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

//2 дня назад
export function formatTimeDistanceToNow(dateStr: string) {
    return formatDistanceToNow(new Date(dateStr), {
        locale: ru,
        addSuffix: true,
    });
}

// dd.MM.yyyy HH:mm
export function formatTimeFull(dateStr: string) {
    return new Date(dateStr).toLocaleString("ru", {
        dateStyle: "short",
        timeStyle: "short",
    });
}
