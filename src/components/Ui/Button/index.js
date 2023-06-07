// Import Styled Component
import styled, { css } from "styled-components";

/**
 * Membuat variable Button (components)
 * Styling Button
 * Gunakan tagged template
 */
const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
border-radius: 10px;
color: #fff;
background-color: #4361ee;
cursor: pointer;

// Props Variant
background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary};

// Props Full
${(props) => props.full && css`
    display: block;
    width: 100%;
    `}
//Props sm
${(props) => props.sm && css`
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
`}
//Props md
${(props) => props.md && css`
    font-size: 1rem;
    padding: 0.5rem 1rem;
`}
//Props lg
${(props) => props.lg && css`
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
`}

`;

export default Button;
