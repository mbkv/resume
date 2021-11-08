import styled from "styled-components";
import { Header } from "./Header";
import { Resume } from "./Resume";
import { resume } from "./data";

const Page = styled.div`
  width: 8.25in;
  margin: 0 auto;
`;

function App() {
  return (
    <Page>
      <Header {...resume.details} />
      <Resume {...resume.resume} />
    </Page>
  );
}

export default App;
