import { styled } from "styled-components";

export const FooterBannerWrap = styled.div`
    background:#eae7de;
    overflow-x: hidden;
    &:nth-child(-n+2):hover {
        background: #fff;
    }
`;

export const HomeFemaleFooterBanner = styled.aside`
    padding: 1.25rem 5%;
    border-top: 1px solid #051619;

    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 1.5rem;
        color: #051619;

        .mobile-block {
            display: inline;
        }

        .cta-arrow {
            max-width: 67px;
            flex-grow: 1;
            margin-left: 11px;
            margin-right: 3px;
            padding: 17px 0;

            .line {
                width: 100%;
                height: 2px;
                background: #051619;
                position: relative;
            }
            .line:before {
                -webkit-transform: rotate(-50deg);
                transform: rotate(-50deg);
                -webkit-transform-origin: top right;
                transform-origin: top right;
            }
            .line:after,.line:before {
                background: inherit;
                position: absolute;
                width: 17px;
                height: 2px;
                content: "";
                right: 0;
            }
            .line:after {
                -webkit-transform: rotate(50deg);
                transform: rotate(50deg);
                -webkit-transform-origin: bottom right;
                transform-origin: bottom right;
            }
        }
    }

`;

export const FooterStatics = styled.a`
  position: relative;

  .hover-area {
    display: none;
    align-items: center;
    padding: 0 5%;
    font-size: 1.5rem;
    position: absolute;
    left: -20%;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .marquee {
    white-space: nowrap;
  }

  .marquee p {
    display: inline-block;
    padding-right: 50px;
  }

  .marquee p:after {
    content: "";
    white-space: nowrap;
    padding-right: 50px;
  }

  &:hover {
    .footer-banner-text, .cta-arrow {
        opacity: 0;
    }

    .hover-area {
      display: flex;
      align-items: center;
      padding: 0 5%;
      font-size: 1.5rem;
    }

    .marquee {
      animation: marquee 4s linear infinite;
    }

    .marquee p {
      -webkit-animation-name: marquee;
      animation-name: marquee;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-duration: 4s;
      animation-duration: 4s;
    }
  }

  @-webkit-keyframes marquee {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes marquee {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(-0%);
    }
  }
`;