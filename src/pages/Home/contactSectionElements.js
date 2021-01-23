import styled from 'styled-components'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 100px 0px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 30px 20px;
        height: 300px;
    }
`

export const Title = styled.h2`
    text-align: center;
    font-size: 26px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`

export const IconsWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 768px) {
        width: 70%;
    }
`