import React, { useRef } from 'react';

export const CodeBlock = ({ code }) => {
  const lines = code.split('\n');
  const codeBlockRef = useRef(null);

  const copyCode = () => {
    const selection = window.getSelection();
    selection.removeAllRanges();

    const range = document.createRange();
    range.selectNodeContents(codeBlockRef.current);
    selection.addRange(range);

    document.execCommand('copy');
  };

  return (
    <div className="code-block">
      <button className="copy-button" onClick={copyCode}>
        Copy
      </button>
      <pre ref={codeBlockRef}>
        {lines.map((line, index) => (
          <div key={index}>
            <span className="line-number">{index + 1}</span>
            {line}
          </div>
        ))}
      </pre>
    </div>
  );
};

