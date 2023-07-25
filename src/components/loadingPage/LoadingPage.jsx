import React from "react";
import { LoadingImg } from "./LoadingPageStyle";

const LoadingPage = () => {
    return <LoadingImg><img src={`${process.env.PUBLIC_URL}/imgs/gosum-home.png`} alt="로딩" /></LoadingImg>;
}

export default LoadingPage;