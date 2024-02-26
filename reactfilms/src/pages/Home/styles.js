import styled from "styled-components";

export const Container = styled.div`
     
   > .homeNotes {
        padding: 50px 123px;
        .myFilms {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;

            h2 {
                font-size: 32px;
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
            button {
                display: flex;
                align-items: center;
                gap: 2.5px;

                width: 207px;
                height: 48px;
                padding: 13px 32px;
                border: none;
                border-radius: 8px;

                background: ${({ theme }) => theme.COLORS.PINK};

                .iconPlus {
                    width: 16px;
                    height: 16px;
                    margin-right: 2px;
                }
            }
        }
   }

`;