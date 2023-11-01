import styled from 'styled-components';
import ReactZoomPanPinch from './components/reactZoomPanPinch';
import { GlobalStyle } from './style/global';

const _App = styled('div')`
    width: 100%;
    height: 100%;
    background: #1A1F2D;
    display: grid;
`;

const _MainContent = styled('div')`
  
`;

export default function App() {
  return (
    <_App>
        <GlobalStyle />
        <_MainContent>
            <ReactZoomPanPinch />
        </_MainContent>
    </_App>
  );
}