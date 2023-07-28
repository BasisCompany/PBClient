import { StatisticItem } from "./StatisticItem";
import { statisticListContent } from "./statisticListContent";

export const StatisticList = () => {
    return (
        <>
            {statisticListContent.map((item) => (
                <StatisticItem {...item} />
            ))}
        </>
    );
};
