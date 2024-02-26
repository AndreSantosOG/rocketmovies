import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
    display: flex;
    align-items: center;

    width: 100%;
    height: 116px;
    padding: 30px 123px;
    border-bottom: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_INPUT};

    h1 {
        font-size: 27px;
        font-weight: 600;
        color: ${({theme}) => theme.COLORS.PINK};
        
        margin-right: 64px;
    }
    input {
        width: 60%;
        padding: 19px 24px;
        border: none;
        border-radius: 10px;

        background: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
        color: ${({theme}) => theme.COLORS.GRAY_300};

    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    
    > div {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        margin-left: 64px;
        line-height: 18px;

        span {
       font-size: 14px;
       font-weight: 600;
       color: ${({theme}) => theme.COLORS.WHITE_200};
     }
        a {
       font-size: 14px;
       color: ${({theme}) => theme.COLORS.GRAY_300};
       margin-left: 70%;
     }
    }
    .picture {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-left: 12px;
    }

`;