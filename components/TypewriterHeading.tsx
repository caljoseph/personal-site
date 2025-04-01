import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Cursor = styled.span`
    display: inline-block;
    margin-left: 0.1rem;
    width: 1ch;
    animation: blink 1s steps(2, start) infinite;
    color: var(--accent);

    @keyframes blink {
        to {
            visibility: hidden;
        }
    }
    @keyframes blinkNatural {
        0%   { visibility: visible; }
        20%  { visibility: visible; }
        60%  { visibility: hidden; }
        100% { visibility: hidden; }
    }

`;

interface TypewriterHeadingProps {
    text: string;
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({ text }) => {
    const [typed, setTyped] = useState('');

    useEffect(() => {
        let i = 0;
        let timeout: NodeJS.Timeout;

        const type = () => {
            setTyped(text.slice(0, i + 1));
            i++;
            if (i < text.length) {
                timeout = setTimeout(type, 80);
            }
        };

        type();

        return () => clearTimeout(timeout);
    }, [text]);

    return (
        <StyledHeading>
            {typed}
            <Cursor>|</Cursor>
        </StyledHeading>
    );
};

export default TypewriterHeading;
