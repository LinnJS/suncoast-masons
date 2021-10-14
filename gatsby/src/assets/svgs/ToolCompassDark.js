import React from 'react';

export default function ToolCompassDark(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.68 36.4" width="31.68" height="36.4" {...props}>
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.cls-1{fill:none;}.cls-1,.cls-2{stroke:#231f20;stroke-miterlimit:10;stroke-width:1.5px;}.cls-2{fill:#231f20;}',
          }}
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Compass">
            <path
              className="cls-1"
              d="M18.37,5.1,30.75,35.45c-.05,0-8.49-16.62-8.81-16.91S21,18.36,20.41,18a2.15,2.15,0,0,1-.82-1.08l-.35-.86C19,15.34,18,12.43,15.8,6.76"
            />
            <path
              className="cls-1"
              d="M13.31,5.29.93,35.65S9.42,19,9.74,18.74s.94-.18,1.53-.56a2.12,2.12,0,0,0,.82-1.07l.35-.87c.28-.7,1.27-3.62,3.45-9.28"
            />
            <ellipse className="cls-1" cx="15.8" cy="3.76" rx="2.79" ry="3.01" />
            <ellipse className="cls-2" cx="15.8" cy="3.76" rx="0.92" ry="0.99" />
          </g>
        </g>
      </g>
    </svg>
  );
}
