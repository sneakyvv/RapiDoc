import { css } from 'lit-element';

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`
    .data-type[data-type="xxx-of"] {
      display: none;
    }
    .m-btn{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        font: inherit;
        text-align: center;
        margin: 0;
        font-size: 13px;
        line-height: 1.6;
        padding: 6px 24px 7px;
        border-radius: 24px !important;
        border: 1px solid #cad3e0;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
        color: #34435c;
        background-color: transparent;
        box-shadow: none
    }
    .m-btn:hover {
        color:#5c697d;
        background-color: transparent
    }
    .m-btn.primary {
        color:#ffffff;
        background-color: #2c00ac;
        border: 1px solid #2c00ac;

    }
    .m-btn.primary:hover {
        color:#ffffff;
        background-color: #270a7d
    }
    a, .m-markdown-small a, .m-markdown a {
        color:#34435c;
    }
    a[href*="support.flexmail.eu"],  .m-markdown-small a[href*="support.flexmail.eu"], .m-markdown a[href*="support.flexmail.eu"] {
        color:#FF7A66;
    }
    .divider{
        border-top: 2px solid #e6e8eb;
        margin: 24px 0 6px;
    }
    .tag.title {
        margin-top: 48px;
    }
    .section-gap--read-mode.observe-me {
        border-top: 4px solid #f0f1f1 !important;
    }
    .section-gap, .section-gap--focused-mode, .section-gap--read-mode {
        padding: 12px;
    }
    .m-table tr, .m-table td {
        max-width: none !important;
    }
    .m-table td {
        padding: 10px 12px;
    }
    .m-table {
        border-radius: 4px
    }
    #authentication .m-table tr{
        display: flex; 
        flex-direction: column
    }
    #authentication .m-table tr td:last-child{
        border-top:1px dashed var(--border-color)
    }
    .m-markdown-small pre code, .m-markdown pre code {
        border: none;
        padding: 0px;
        white-space: pre-wrap;
        overflow-x: auto;
    }
    .toolbar-btn {
        color: #ffffff;
        background-color: #707070;
    }
    @media only screen and (min-width: 768px) {
        .section-gap--read-mode {
            padding: 24px 48px 12px 48px;
        }
    }
    @media only screen and (min-width: 1000px) {
        .section-gap--read-mode {
            padding: 48px 96px 24px 96px;
        }
    }
`;
