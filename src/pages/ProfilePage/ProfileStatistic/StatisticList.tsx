import { StatisticItem } from "./StatisticItem";
import { statisticListContent } from "./statisticListContent";

// export interface StatisticItemProps {
//     children: React.ReactNode;
// }

export const StatisticList = () => {
    return (
        <>
            {statisticListContent.map((item) => (
                <StatisticItem {...item} />
            ))}
        </>
    );
};
