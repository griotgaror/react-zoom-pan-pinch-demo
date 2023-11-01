import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import styled from "styled-components";
import TestElement from "./testElement";

const _ReactTransformWrapper = styled('div')`
    .react-transform-wrapper {
        width: 100vw;
        height: 100dvh;
    }
`

const _ElementsWrapper = styled('div')`
    display: flex;
`;

const _Container = styled('div')``;

export default function ReactZoomPanPinch() {
    const createTestElements = function(count: number) {
        const elements = [];

        for(let i = 0; i < count; i++) {
            elements.push(<TestElement
                className='bgSecond'
                key={i} 
                text={`Container-${i}`} 
            />)
        }

        return elements;
    }

    const initialScale = 0.8;

    return (
        <_ReactTransformWrapper>
            <TransformWrapper
                initialScale={initialScale}
                maxScale={2}
                minScale={initialScale}
                centerZoomedOut={true}
                doubleClick={{
                    disabled: false
                }}
            >
                <TransformComponent>
                    <_Container>
                        <_ElementsWrapper>
                            {createTestElements(20)}
                        </_ElementsWrapper>

                        <_ElementsWrapper>
                            {createTestElements(20)}
                        </_ElementsWrapper>

                        <_ElementsWrapper>
                            {createTestElements(20)}
                        </_ElementsWrapper>

                        <_ElementsWrapper>
                            {createTestElements(20)}
                        </_ElementsWrapper>
                        
                        <_ElementsWrapper>
                            {createTestElements(20)}
                        </_ElementsWrapper>

                        <_ElementsWrapper>
                            {createTestElements(20)}
                        </_ElementsWrapper>

                        <_ElementsWrapper>
                            {createTestElements(20)}
                        </_ElementsWrapper>

                        <_ElementsWrapper>
                            {createTestElements(20)}
                        </_ElementsWrapper>
                    </_Container>
                </TransformComponent>
            </TransformWrapper>
        </_ReactTransformWrapper>
    )
}