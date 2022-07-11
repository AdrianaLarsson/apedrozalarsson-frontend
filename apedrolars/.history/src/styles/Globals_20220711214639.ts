import { createGlobalStyle } from "styled-components";
import { globalColorTheme } from "./GlobalColor";

export default createGlobalStyle`
    body,
    html {
        background-color: ${globalColorTheme.colors.snow} ;
        padding: 0;
        margin: 0;
        font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            "sans-serif";
        height: 1px;
        margin: auto;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;
