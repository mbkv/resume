import { Fragment, HTMLAttributes } from "react";
import styled from "styled-components/macro";
import { Resume as IResume } from "./utils";

// Generic
const Hr = styled.hr`
  margin: 1rem auto;
  width: 50%;
`;
const Title = styled.h2`
  margin: 0;
`;

// Sections
const SectionTitle = styled(Title.withComponent("h3"))``;
const SectionHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;

  & > ${Hr} {
    margin: auto 0;
    margin-left: 1rem;
    flex-grow: 1;
  }
`;
const SectionBody = styled.div`
  padding: 0 1rem;
`;
const Section = styled.section``;

// Resumes
const Introduction = styled.p``;
const Element = styled.span`
  word-wrap: none;
  overflow-wrap: none;
  display: inline-block;
`;
const List = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;

  > ${Element}:not(:first-child):before {
    content: "|";
    padding: 0 0.5rem;
  }
`;
const Experiences = styled.div``;
const Experience = styled.div``;
const Company = styled(Title.withComponent("h4"))`
  display: inline;
`;
const DateRange = styled.span`
  float: right;
`;
const Date = styled.time``;
const Summary = styled.p``;
const Notes = styled.ul``;
const Note = styled.li``;

const BaseResume = styled.div`
  @media not print {
    padding: 0.5rem;
    padding-bottom: 2rem;
  }
`;

type Props = HTMLAttributes<HTMLDivElement> & IResume;

const ResumeLayout = ({
  title,
  introduction,
  skills,
  technologies,
  experiences,
  certifications,
  ...rest
}: Props) => (
  <BaseResume {...rest}>
    <Section>
      <SectionHeader>
        <Title>{title}</Title>
      </SectionHeader>
      <SectionBody>
        <Introduction>{introduction}</Introduction>
        <List>
          {technologies.map((el, i) => (
            <Element key={i}>{el}</Element>
          ))}
        </List>
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>Experience</SectionTitle>
        <Hr />
      </SectionHeader>
      <SectionBody>
        <Experiences>
          {experiences.map((experience, i) => (
            <Fragment key={i}>
              {i !== 0 && <Hr />}
              <Experience>
                <Company>
                  {experience.company} &mdash; {experience.title}
                </Company>
                <DateRange>
                  <Date>{experience.start}</Date> to <Date>{experience.end}</Date>
                </DateRange>
                <Summary>{experience.summary}</Summary>
                <Notes>
                  {experience.notes.map((el, i) => (
                    <Note key={i}>{el}</Note>
                  ))}
                </Notes>
              </Experience>
            </Fragment>
          ))}
        </Experiences>
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>Certificates</SectionTitle>
        <Hr />
      </SectionHeader>
      <SectionBody>
        <List>
          {certifications.map((el, i) => (
            <Element key={i}>{el}</Element>
          ))}
        </List>
      </SectionBody>
    </Section>
  </BaseResume>
);

export const Resume = styled(ResumeLayout)``;
