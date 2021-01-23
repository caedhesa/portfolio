import styled from 'styled-components'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px), (max-height: 740px) {
        width: 100%;
        margin: 0;
        height: auto;
        padding-top: 50px;
    }
`

export const Wrapper = styled.div`
    width: 40%;
    min-width: 500px;
    @media (max-width: 768px) {
        width: 90%;
        min-width: 200px;
        margin: 0 auto;
    }
`
export const TextWrapper = styled.div`
    width: 70%;
    @media (max-width: 768px) {
        width: 100%;
    }
`


export const Title = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 40px;
    color: ${props => props.theme.colors.textColor};
    @media (max-width: 768px) {
        font-size: 24px;
    }
`

export const Text = styled.p`
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.pColor};
    @media (max-width: 768px) {
        font-size: 18px;
    }

`


export const ALink = styled.a`
    color: #00E0F9;
    text-decoration: none;
`

export const Highlight = styled.span`
    position: relative;
    &::before {
        content:"";
        width: calc(100% + 5px);
        height: 7px;
        transform: translateX(-50%);
        left: 50%;
        background-color: #00E0f9;
        position: absolute;
        bottom: 1px;
        z-index: 0;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`

