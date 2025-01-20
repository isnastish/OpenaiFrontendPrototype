import React, { FormEvent, useState } from "react";

const OpenaiView: React.FC = () => {
  const [openaiResult, setOpenaiResult] = useState<string>("");
  const [openaiQuestion, setOpenaiQuestion] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    <div className="my-class">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Ask OpenAI</h2>
        <textarea
          autoFocus={true}
          required
          name="taname"
          rows={8}
          cols={38}
          wrap="soft"
          value={openaiQuestion}
          onChange={(e) => setOpenaiQuestion(e.target.value)}
        />
        <div>
          <button type="submit">Send Request</button>
        </div>
      </form>

      <div className="my-class">
        <h2>Result</h2>
        <textarea
          readOnly
          rows={8}
          cols={38}
          wrap="soft"
          value={openaiResult}
        />
      </div>
    </div>
  );
};

export default OpenaiView;
