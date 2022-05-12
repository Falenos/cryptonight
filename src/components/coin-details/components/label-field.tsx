import React, { Fragment } from "react";
import * as S from "../styled";
import { formatNumber } from "../../../utils";

type BaseProps = {
  withCurrency?: boolean;
  isPercentage?: boolean;
  isColoured?: boolean;
  inTheMillions?: boolean;
  href?: string | string[];
  target?: string;
  decimals?: number;
  variant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline";
};

interface ValueProps extends BaseProps {
  value?: number | string;
}

interface Props extends BaseProps {
  label: string;
  values?: number | string | (string | number)[];
  children?: JSX.Element | JSX.Element[];
}

const SingleValue = ({
  value,
  withCurrency,
  isPercentage,
  isColoured,
  inTheMillions,
  href,
  target,
  variant,
  decimals,
}: ValueProps) => {
  const isNumber = typeof value === "number";
  const isPositive = isNumber && value > 0;
  const isNegative = isNumber && value < 0;

  let classes = "";
  if (isPositive) classes = "is-up";
  if (isNegative) classes = "is-down";

  let val = isNumber
    ? formatNumber(value, decimals || isPercentage ? 2 : 0)
    : value;
  if (val && isNumber && isColoured && isPositive) val = `+${val}`;
  return (
    <>
      {href ? (
        <S.Link
          title={value?.toString()}
          href={href as string}
          target={target || "_blank"}
          noLinkStyle>
          {value}
        </S.Link>
      ) : (
        <S.SingleValue variant={variant || "h6"} className={classes}>
          {withCurrency && "$  "}
          {val}
          {inTheMillions && " M"}
          {isPercentage && " %"}
        </S.SingleValue>
      )}
    </>
  );
};

const LabelField = ({ label, values, children, variant, ...rest }: Props) => {
  if (Array.isArray(values)) {
    return (
      <S.LabelField>
        <S.FieldLabel variant={variant || "h6"}>{label}:</S.FieldLabel>
        &nbsp; &nbsp;
        {values.map((v: string | number, i) => (
          <Fragment key={i}>
            <SingleValue {...rest} value={v} variant={variant} />
            &nbsp;
          </Fragment>
        ))}
      </S.LabelField>
    );
  }
  return (
    <S.LabelField>
      <S.FieldLabel variant={variant || "h6"}>{label}:</S.FieldLabel>
      &nbsp; &nbsp;
      {children ? (
        <div className='children-wrapper'>{children}</div>
      ) : (
        <SingleValue {...rest} value={values} variant={variant} />
      )}
    </S.LabelField>
  );
};

export default LabelField;
