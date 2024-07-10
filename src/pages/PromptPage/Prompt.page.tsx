import { useParams } from "react-router";
import { useGetPromptQuery } from "@/entities/prompt";
import { getPromptIdFromUrl } from "@/shared/utils";
import { PromptCard } from "@/shared/ui/PromptCard";
import { LoadingCircular } from "@/shared/ui/Loading";
import { FlexBox } from "@/shared/ui/FlexBox";

export const PromptPage = () => {
    const { url } = useParams();
    const { data, isLoading, isError } = useGetPromptQuery(
        getPromptIdFromUrl(url!)
    );

    if (isLoading) {
        return <LoadingCircular />;
    }

    if (!data || isError) {
        return <FlexBox fontSize={26}>Такого промпта не существует</FlexBox>;
    }

    return (
        <>
            <FlexBox fontSize={26}>Prompt id: {url}</FlexBox>
            <FlexBox justifyContent="center">
                <PromptCard prompt={data} />
            </FlexBox>
        </>
    );
};
