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
  typeScale: number;
};
const typeStyles = css`
  font-size: ${(props) => {
    if (props.size === 1) {
      return "1rem";
    }
    if (props.size > 1) {
      const multiplier = props.size - 1;
      return `${Math.pow(props.typeScale, multiplier)}rem`;
    }
  }};
`;

const H1 = styled.h1<typeProps>`
  ${typeStyles}
`;
const H2 = styled.h2<typeProps>`
  ${typeStyles}
`;
const H3 = styled.h3<typeProps>`
  ${typeStyles}
`;
const H4 = styled.h4<typeProps>`
  ${typeStyles}
`;
const H5 = styled.h5<typeProps>`
  ${typeStyles}
`;
const H6 = styled.h6<typeProps>`
  ${typeStyles}
`;
const P = styled.p<typeProps>`
  ${typeStyles}
`;
const Span = styled.span<typeProps>`
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
