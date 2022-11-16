import styled, { css } from "styled-components";
import { useContext } from "react";
import { TypeScaleContext } from "../context/typeScaleContext";

type TextProps = {
  type: string;
  size: number;
  children: string;
};

type typeProps = {
  size: number;
  typeScale: string;
};
const typeStyles = css`
  font-size: ${(props: typeProps) => {
    if (props.size === 1) {
      return "1rem";
    }
    if (props.size > 1) {
      const multiplier = props.size - 1;
      return `${Math.pow(parseFloat(props.typeScale), multiplier)}rem`;
    }
  }};
`;

const H1 = styled.h1`
  ${typeStyles}
`;
const H2 = styled.h2`
  ${typeStyles}
`;
const H3 = styled.h3`
  ${typeStyles}
`;
const H4 = styled.h4`
  ${typeStyles}
`;
const H5 = styled.h5`
  ${typeStyles}
`;
const H6 = styled.h6`
  ${typeStyles}
`;
const P = styled.p`
  ${typeStyles}
`;
const Span = styled.span`
  ${typeStyles}
`;
const Text = ({ type, size, children }: TextProps) => {
  const { typeScale } = useContext(TypeScaleContext);

  if (type === "h1") {
    return (
      <H1 size={size} typeScale={typeScale}>
        {children}
      </H1>
    );
  }
  if (type === "h2") {
    return (
      <H2 size={size} typeScale={typeScale}>
        {children}
      </H2>
    );
  }
  if (type === "h3") {
    return (
      <H3 size={size} typeScale={typeScale}>
        {children}
      </H3>
    );
  }
  if (type === "h4") {
    return (
      <H4 size={size} typeScale={typeScale}>
        {children}
      </H4>
    );
  }
  if (type === "h5") {
    return (
      <H5 size={size} typeScale={typeScale}>
        {children}
      </H5>
    );
  }
  if (type === "h6") {
    return (
      <H6 size={size} typeScale={typeScale}>
        {children}
      </H6>
    );
  }
  if (type === "p") {
    return (
      <P size={size} typeScale={typeScale}>
        {children}
      </P>
    );
  }
  if (type === "span") {
    return (
      <Span size={size} typeScale={typeScale}>
        {children}
      </Span>
    );
  }
  return null;
};

export default Text;
