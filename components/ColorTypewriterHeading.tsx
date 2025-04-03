import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Styled components
const StyledHeading = styled.h1`
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    white-space: nowrap;
    max-width: 100%;
    overflow-x: hidden;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const blink = keyframes`
    to {
        visibility: hidden;
    }
`;

const Cursor = styled.span`
    display: inline-block;
    margin-left: 0.1rem;
    width: 1ch;
    animation: ${blink} 1s steps(2, start) infinite;
    color: var(--accent);
`;

// Updated to support gradients
const ColoredText = styled.span<{ gradient?: string; color?: string }>`
    color: ${props => props.color || 'inherit'};
    background: ${props => props.gradient || 'none'};
    -webkit-background-clip: ${props => props.gradient ? 'text' : 'none'};
    -webkit-text-fill-color: ${props => props.gradient ? 'transparent' : 'inherit'};
    background-size: 100%;
    background-clip: ${props => props.gradient ? 'text' : 'none'};
`;

interface ColorTypewriterHeadingProps {
    prefix?: string;
    initialName?: string;
    roles?: Array<{
        text: string;
        gradient?: string;  // New prop for gradient
        color?: string;     // Made optional
    }>;
    typingSpeed?: number;
    backspaceSpeed?: number;
    pauseDuration?: number;
    postBackspacePause?: number; // New prop for pause after backspacing
    delay?: number;
}

const ColorTypewriterHeading: React.FC<ColorTypewriterHeadingProps> = ({
                                                                               prefix = "Hi there! I'm ",
                                                                               initialName = "Caleb.",
                                                                               roles = [
                                                                                   {
                                                                                       text: "a Student.",
                                                                                       gradient: "linear-gradient(45deg, #8669bb, #a98df0)"
                                                                                   },
                                                                                   {
                                                                                       text: "a Developer.",
                                                                                       gradient: "linear-gradient(45deg, #6aa284, #8fd4b1)"
                                                                                   },
                                                                                   {
                                                                                       text: "a Researcher.",
                                                                                       gradient: "linear-gradient(45deg, #6d88be, #90b0ee)"
                                                                                   },
                                                                                   {
                                                                                       text: "a Builder.",
                                                                                       gradient: "linear-gradient(45deg, #b26969, #e08989)"
                                                                                   },
                                                                               ],
                                                                               typingSpeed = 80,
                                                                               backspaceSpeed = 50,
                                                                               pauseDuration = 1400,
                                                                               postBackspacePause = 100, // Default pause after backspacing
                                                                               delay = 200
                                                                           }) => {
    // States
    const [displayedText, setDisplayedText] = useState("");
    const [currentPhase, setCurrentPhase] = useState<'initial' | 'typing' | 'pausing' | 'backspacing' | 'postBackspacePausing'>('initial');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(-1);

    // Refs
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const fullText = useRef(prefix + initialName);
    const prefixLength = useRef(prefix.length);

    // Cleanup timeouts on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    // Initial delay before starting
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentPhase('typing');
        }, delay);
    }, [delay]);

    // Main animation effect
    useEffect(() => {
        if (currentPhase === 'typing') {
            if (currentRoleIndex === -1) {
                // Initial typing phase - typing the full "Hello there! I'm Caleb"
                if (displayedText.length < fullText.current.length) {
                    timeoutRef.current = setTimeout(() => {
                        setDisplayedText(fullText.current.slice(0, displayedText.length + 1));
                    }, typingSpeed);
                } else {
                    // Finished typing initial text, pause before backspacing the name
                    timeoutRef.current = setTimeout(() => {
                        setCurrentPhase('pausing');
                    }, pauseDuration);
                }
            } else {
                // Typing a role
                const currentRole = roles[currentRoleIndex];
                const roleText = prefix + currentRole.text;

                if (displayedText.length < roleText.length) {
                    timeoutRef.current = setTimeout(() => {
                        setDisplayedText(roleText.slice(0, displayedText.length + 1));
                    }, typingSpeed);
                } else {
                    // Finished typing role, pause before backspacing
                    timeoutRef.current = setTimeout(() => {
                        setCurrentPhase('pausing');
                    }, pauseDuration);
                }
            }
        } else if (currentPhase === 'pausing') {
            // After pause, start backspacing
            timeoutRef.current = setTimeout(() => {
                setCurrentPhase('backspacing');
            }, pauseDuration);
        } else if (currentPhase === 'backspacing') {
            // Only backspace the name/role part (after the prefix)
            if (displayedText.length > prefixLength.current) {
                timeoutRef.current = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, backspaceSpeed);
            } else {
                // Done backspacing, add a pause before typing next role
                setCurrentPhase('postBackspacePausing');
            }
        } else if (currentPhase === 'postBackspacePausing') {
            // Pause after backspacing before typing the next role
            timeoutRef.current = setTimeout(() => {
                // Determine next role
                const nextRoleIndex = currentRoleIndex === -1 ? 0 : (currentRoleIndex + 1) % roles.length;
                setCurrentRoleIndex(nextRoleIndex);
                setCurrentPhase('typing');
            }, postBackspacePause);
        }
    }, [currentPhase, displayedText, currentRoleIndex, roles, typingSpeed, backspaceSpeed, pauseDuration, postBackspacePause]);

    // Determine if we're displaying the initial name or a role (for coloring)
    const isInitialName = currentRoleIndex === -1 && displayedText.length > prefixLength.current;
    const isRole = currentRoleIndex !== -1 && displayedText.length > prefixLength.current;

    // Make sure we don't have any trailing spaces after backspacing
    const cleanDisplayedText = displayedText.replace(/\s+$/, '');

    // Split the displayed text into prefix and changing part
    const displayedPrefix = cleanDisplayedText.slice(0, prefixLength.current);
    const displayedChangingPart = cleanDisplayedText.slice(prefixLength.current);

    return (
        <StyledHeading>
            {displayedPrefix}
            {isRole ? (
                <ColoredText
                    gradient={roles[currentRoleIndex].gradient}
                    color={roles[currentRoleIndex].color}
                >
                    {displayedChangingPart}
                </ColoredText>
            ) : (
                displayedChangingPart
            )}
            <Cursor>|</Cursor>
        </StyledHeading>
    );
};

export default ColorTypewriterHeading;