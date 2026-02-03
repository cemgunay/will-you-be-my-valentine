import please from "./assets/please.png";
import yay from "./assets/yay.png";
import "./App.css";
import { useState } from "react";
import type { QuestionProps } from "./types/app.types";

const YesComponent = () => {
    return (
        <div>
            <img src={yay} alt="yay" />
            <h2>Yay! I'm so happy!</h2>
        </div>
    );
};

const QuestionComponent = ({
    onYesClick,
    noCount,
    setNoCount,
    noLabels,
    yesLabels,
}: QuestionProps) => {
    const yesLabelIndex = Math.min(noCount, yesLabels.length - 1);
    const sizeScale = 1 + noCount * 0.8;

    return (
        <div className="question">
            <img className="question-image" src={please} alt="please" />
            <h1 className="question-title">Will you be my valentine?</h1>
            <div className="question-buttons">
                <button
                    key={noCount}
                    style={{
                        fontSize: `${sizeScale}em`,
                    }}
                    onClick={onYesClick}
                >
                    {yesLabels[yesLabelIndex]}
                </button>

                <button onClick={() => setNoCount((count) => count + 1)}>
                    {noLabels[Math.min(noCount, noLabels.length - 1)]}
                </button>
            </div>
        </div>
    );
};

function App() {
    const [noCount, setNoCount] = useState(0);

    const yesLabels = ["Yes"];
    const noLabels = [
        "No",
        "Are you sure?",
        "Think again!",
        "Please reconsider!",
        "Give it another thought!",
        "Last chance!",
        "서운해ㅠㅠ",
        "ㅠㅠㅠㅠㅠㅠㅠㅠ",
        "ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ",
        "Please say yes!",
    ];

    const [showYes, setShowYes] = useState(false);

    return (
        <>
            {showYes ? (
                <YesComponent />
            ) : (
                <QuestionComponent
                    onYesClick={() => setShowYes(true)}
                    noCount={noCount}
                    setNoCount={setNoCount}
                    noLabels={noLabels}
                    yesLabels={yesLabels}
                />
            )}
        </>
    );
}

export default App;
