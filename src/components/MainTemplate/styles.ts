import styled from "styled-components";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-inline: 200px;
`;

const StyledOutlet = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export { StyledMainTemplate, StyledOutlet };
