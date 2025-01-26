import { FormEvent, Fragment, useState } from 'react';

import './OpenaiPage.css';

const OpenaiView: React.FC = () => {
    const [openaiResult, setOpenaiResult] = useState<string>('');
    const [openaiQuestion, setOpenaiQuestion] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        console.log('handle /openai route');

        event.preventDefault();

        if (!openaiQuestion.trim().length) {
            // error
            return;
        }

        setOpenaiResult(openaiQuestion);

        // You can pass formData as a fetch body directly:
        // event.target
        // Make a request the back-end to openai endpoint,
        // retrieve the neccessary information
        // set the information into openaiResult and render
        // in a separate div section.
    };

    return (
        <Fragment>
            <header className="openai-header">Ask openai</header>
            <div className="openai-class">
                <form id="openai-submit" onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                        autoFocus={true}
                        required
                        rows={8}
                        cols={38}
                        placeholder="Enter text here..."
                        wrap="soft"
                        value={openaiQuestion}
                        onChange={(e) => setOpenaiQuestion(e.target.value)}
                    />
                </form>
                <p>
                    <textarea
                        readOnly
                        rows={8}
                        cols={38}
                        placeholder="Response..."
                        wrap="soft"
                        value={openaiResult}
                    />
                </p>
                <p>
                    <button
                        className="submit-button"
                        form="openai-submit"
                        type="submit"
                    >
                        Send Request
                    </button>
                </p>
            </div>
        </Fragment>
    );
};

export default OpenaiView;
