import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
height: 100vh;


display: flex;
align-items: stretch;
.login {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ALL};
    padding: 0 134px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h5 {
        font-size: 48px;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    .description {
        font-size: 14px;
        font-weight: 400;
        margin-left: -20px;
        margin-bottom: 48px;
        color:${({ theme }) => theme.COLORS.GRAY_300};

    }
    .textLogin {
        font-size: 24px;
        font-weight: 500;
        margin-left: -160px;
        margin-bottom: 48px;
    }
    > button {
        width: 100%;
        height: 56px;
        margin-top: 20px;
        border: none;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
        font-weight: 500;

    }
    > a {
        margin-top: 40px;
        display: flex;
        gap: 10px;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.PINK};

    }
}
`;
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;