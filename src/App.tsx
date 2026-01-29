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
    const yesScale = Math.min(1 + noCount * 0.15, 2.5);

    return (
        <div>
            <img src={please} alt="please" />
            <h1>Will you be my valentine?</h1>

            <button
                className="yes-button"
                style={{ transform: `scale(${yesScale})` }}
                onClick={onYesClick}
            >
                {yesLabels[Math.min(noCount, yesLabels.length - 1)]}
            </button>

            <button onClick={() => setNoCount((c) => c + 1)}>
                {noLabels[Math.min(noCount, noLabels.length - 1)]}
            </button>
        </div>
    );
};

function App() {
    const [noCount, setNoCount] = useState(0);

    const yesLabels = [
        "Yes",
        "Absolutely!",
        "Of course!",
        "Yes, yes, yes!",
        "Definitely!",
        "Without a doubt!",
        "Yes"
    ];
    const noLabels = [
        "No",
        "Are you sure?",
        "Think again!",
        "Please reconsider!",
        "Give it another thought!",
        "Last chance!",
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
