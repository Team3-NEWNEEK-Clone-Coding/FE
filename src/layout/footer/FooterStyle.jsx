import { styled } from "styled-components";

export const StFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 0 auto;
    padding: 4rem 5% 6rem;
    background: #eae7de;
    border-top: 1px solid #051619;
    box-sizing: border-box;
    position: relative;
    z-index: 4;  
`;

export const StFooterAddress = styled.div`
    float: left;
    width: 50%;

    a {
        display: inline-block;
        max-width: 200px;
        margin: 0 0 16px;
        filter: grayscale(100%);

        img {
            vertical-align: middle;
            width: 100%;
        }
    }
`;

export const StFooterSitemap = styled.nav`
    display: flex;
    float: left;
    width: 50%;
    margin-bottom: 4em;
    position: relative;

    div {
        width: 50%;

        a {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-bottom: 0.5rem;
            color: #051619;

            strong {
                font-weight: 700;
            }
        }
    }
`;


export const StFooterAddressInfo = styled.div`
    width: 100%;
    margin: 2rem 0 0;
    line-height: 1.8;
`

export const StFooterCopyright = styled.small`
    display: block;
    margin: 1rem 0 0;
`;