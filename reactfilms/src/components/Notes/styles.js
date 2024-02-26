import styled from "styled-components";

export const Container = styled.div`
    width: 98%;
    height: 222px;
    padding: 32px;
    border-radius: 16px;
    background: ${({ theme}) => theme.COLORS.BACKGROUND_NOTES};
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 24px;
    
    > h3 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    > p {
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        color: ${({ theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 25px;
    }
    .ranking {
        display: flex;
        gap: 3.5px;
        color:${({ theme}) => theme.COLORS.PINK};
        margin-bottom: 15px;
    }
`;