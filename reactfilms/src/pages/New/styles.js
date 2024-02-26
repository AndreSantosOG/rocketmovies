import styled from "styled-components";

export const Container = styled.div`
h4 {
    font-size: 36px;
    font-weight: 500;
    margin: 24px 0 40px;
}
.page {
    padding: 40px 123px 85px;
}
.back {
    display: flex;
    align-items: center;
    gap: 10px;
    color:${({ theme }) => theme.COLORS.PINK};
.arrow {
    font-size: 14px;
}
}
.firstsInput {
    display: flex;
    gap:40px;

}
.inputArea {
    width: 100%;
    height: 274px;

}
.tags {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 16px;
    border-radius: 8px;
    background-color:#0D0C0F;
}
.buttonAction {
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 40px;
    width: 100%;

    .buttonRemove {
        width: 50%;
        height: 56px;
        background-color:#0D0C0F;
        color:${({ theme }) => theme.COLORS.PINK};
        border: none;
        border-radius: 10px;
    }
    .buttonUptate {
        width: 50%;
        height: 56px;
        background-color:${({ theme }) => theme.COLORS.PINK};
        color:#0D0C0F;
        font-weight: 500;
        border: none;
        border-radius: 10px;  
    }
}
`; 
