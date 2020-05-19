import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';

export default ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'bash';
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={className} style={{ ...style, padding: '20px', margin: '1.5rem  0' }}>
            {tokens.map((line, i) => {
              const isLast = tokens.length - 1 === i;
              if (isLast && line[0].empty) {
                return null;
              }
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
};
