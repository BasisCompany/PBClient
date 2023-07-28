import { StatisticWrapper } from "./StatisticWrapper";
import { StatisticItem } from "./StatisticItem";
import { statisticListContent } from "./statisticListContent";

export const ProfileStatistic = () => {
    return (
        <StatisticWrapper>
            {statisticListContent.map(({ id, ...item }) => (
                <StatisticItem key={id} {...item} />
            ))}
        </StatisticWrapper>
    );
};
