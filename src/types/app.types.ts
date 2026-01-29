import type { Dispatch, SetStateAction } from "react";

export type QuestionProps = {
    onYesClick: () => void;
    noCount: number;
    setNoCount: Dispatch<SetStateAction<number>>;
    noLabels: string[];
    yesLabels: string[];
};
