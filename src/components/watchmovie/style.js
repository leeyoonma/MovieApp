import styled from "styled-components";

export const Container = styled.div`
    /* width:100vw;*/
    height:100vh; 
    display:flex;
    align-items: center;
`
export const MovieBox = styled.div`
    width:500px;
    height:400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:20px;
    border: 1px solid black;
    border-radius: 20px;
    margin-right:32px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight:600;
    color:black;
`