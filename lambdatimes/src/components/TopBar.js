import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const TopContainer = styled.div`
  width: 1280px;
  `
const ContainerLeft = styled(TopContainer)`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const TopLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 5%
`
const ContainerCenter = styled(TopContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const CenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
`
// const CenterSpanHover

const ContainerRight = styled(TopContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const TopBar = () => {
  return (
    <TopContainer>
      
        <ContainerLeft>
          <TopLeftSpan>TOPICS</TopLeftSpan><TopLeftSpan>SEARCH</TopLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      
    </TopContainer>
  )
}

export default TopBar;