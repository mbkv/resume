import { HTMLAttributes } from "react";
import styled from "styled-components/macro";
import { hideFromPrint } from "./styles";
import { PersonalDetails } from "./utils";

const BaseHeader = styled.div`
  color: ${(props) => props.theme.secondary.color};
  background-color: ${(props) => props.theme.secondary.background};

  padding: 8px 16px;
  display: flex;
  align-items: baseline;
`;

const Name = styled.h1`
  margin: 0;
  padding: 4px 0;
  flex-grow: 1;
`;
const Link = styled.a`
  margin-left: 16px;
`;
const PDF = styled(Link)`
  ${hideFromPrint}
`;

type Props = HTMLAttributes<HTMLDivElement> & PersonalDetails;

export const Header = ({ name, email, number, github, ...props }: Props) => (
  <BaseHeader {...props}>
    <Name>{name}</Name>
    <Link href={`https://github.com/${github}`}>github.com/{github}</Link>
    <Link href={`mailto:${email}`}>{email}</Link>
    <Link href={`tel:${number}`}>{number}</Link>
    <PDF href="/MichaelBitokhov.pdf" download>PDF</PDF>
  </BaseHeader>
);
