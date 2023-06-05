import {useEffect, useState} from "react";

const tg = window.Telegram.WebApp;
tg.MainButton.onClick(() => {
    tg.close();
})

function App() {
    const [
        inlineTgButtonVisible,
        setInlineTgButtonVisible
    ] = useState(false);

    useEffect(() => {
        tg.ready();
    }, [])

    useEffect(() => {
        if (inlineTgButtonVisible) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }, [inlineTgButtonVisible])

    return (
        <div>
            <h1>Happy hacking!</h1>
            <button onClick={() => setInlineTgButtonVisible(prevState => !prevState)}>
                {
                    !inlineTgButtonVisible
                    ? 'show inline button'
                    : 'hide inline button'
                }
            </button>
        </div>
    )
}

export default App
