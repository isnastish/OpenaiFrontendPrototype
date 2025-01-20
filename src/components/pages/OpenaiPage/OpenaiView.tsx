import React from "react";

const OpenaiView: React.FC = () => {
  // TODO: Create a simple input box where we can insert a message,
  // and a submit button.
  // Once we receive a response from the back-end server
  // without any errors, we should display it in a text field.

  // TODO: Figure out how to get an input.

  return (
    <div className="my-class">
      <h2>OpenAI section</h2>
      <form method="get" id="testformid" onSubmit={() => {}}>
        <input type="submit" />
      </form>
      <textarea
        form="testformid"
        name="taname"
        id="taid"
        rows={8}
        cols={38}
        wrap="soft"
      >
        Enter your questions here...
      </textarea>
    </div>
  );
};

export default OpenaiView;
