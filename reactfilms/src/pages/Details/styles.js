import styled from "styled-components";

export const Container = styled.div`
    .pageDetails {
        padding: 50px 123px;
        a {
            display: flex;
            align-items: center;
            gap: 1px;

            font-size: 16px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.PINK};

            .iconBack {
                font-size: 20px;
            }
        }
        .titleDetails {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            > h4 {
                margin-top: 24px;
                font-size: 36px;
                font-weight: 500;
                margin-right: 19px;
                color: ${({theme}) => theme.COLORS.WHITE_200};
            }
            .icons {
                display: flex;
                gap: 5px;
                font-size: 23px;
                margin-top: 32px;
                color: ${({theme}) => theme.COLORS.PINK};
            }
            
        }
        .infoDetails {
            display: flex;
            align-items: center;
            gap: 12px;
            color: ${({theme}) => theme.COLORS.WHITE_200};
            margin-bottom: 40px;
            .userDetails {
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: 400;

            }
            .imgInfo {
                width: 16px;
                height: 16px;
                border-radius: 35px;
                margin-right: 5px;

            }
            .timeDetails {
                .clock {
                    color: ${({theme}) => theme.COLORS.PINK};    
                }
                gap: 4px;
                display: flex;
                align-items: center;
            }
        }
        .descrition {
            margin-top: 40px;
            margin-right: 24px;
            font-size: 16px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.WHITE_200};
        }
    }


`;