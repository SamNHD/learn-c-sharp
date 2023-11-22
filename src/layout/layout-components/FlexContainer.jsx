import styled from 'styled-components';

const flexContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const body = styled.div`
    flex: 1;
`

const FlexContainer = flexContainer;
FlexContainer.Body = body;
export default FlexContainer;
