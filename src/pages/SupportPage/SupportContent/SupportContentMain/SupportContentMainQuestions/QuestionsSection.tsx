import { FC } from "react";
import { CustomAccordion } from "./CustomAccordion";
import { useOutletContext } from "react-router-dom";

export interface QuestionsSectionProps {
    questions: Array<{ question: string; answer: string }>;
}

export const QuestionsSection: FC<QuestionsSectionProps> = ({ questions }) => {
    const expanded = useOutletContext();
    console.log(expanded);
    return (
        <>
            {questions.map((item, index) => (
                <CustomAccordion
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    expanded={expanded}
                />
            ))}
        </>
    );
};
