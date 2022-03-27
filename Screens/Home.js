import React from "react";
import { Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";

import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";

import * as backg from "../assets/background1.jpg";

const data = {
  name: "Tonny Hill",
  address: "101 E. Chapman Ave<br>Orange, CA 92866",
  phone: "98273-***11",
  company: "Xyz Company",
  amount: "46899.50",
  amt: "53100.50",
};

const dataArray = [
  {
    SrNo: "1",
    Name: "some",
    Size: "300ML",
    BatchNo: "BatchHere",
    Phase: "Net05",
    Unit: "300",
    Rate: "20",
    Tootal: "1000",
  },
  {
    SrNo: "2",
    Name: "some2",
    Size: "300ML",
    BatchNo: "BatchHere2",
    Phase: "Net052",
    Unit: "3002",
    Rate: "202",
    Tootal: "10002",
  },
  {
    SrNo: "3",
    Name: "some3",
    Size: "300ML",
    BatchNo: "BatchHere",
    Phase: "Net05",
    Unit: "300",
    Rate: "20",
    Tootal: "1000",
  },
  {
    SrNo: "4",
    Name: "some4",
    Size: "300ML",
    BatchNo: "BatchHere",
    Phase: "Net05",
    Unit: "300",
    Rate: "20",
    Tootal: "1000",
  },
];

const ordersDiv = dataArray.map((obj) => {
  return `<div class="c x1 yf w2 h9">
  <div class="t m0 x5 h7 yd ff1 fs1 fc0 sc0 ls0 ws0"> ${
    obj.SrNo
  } <span class="_ _1"> </span>  ${obj.Name}  <span class="_ _b"> </span>  ${
    obj.Size
  } <span class="_ _c"> </span> ${obj.BatchNo}  <span class="_ _5"> </span> ${
    obj.Phase
  } <span class="_ _9"> </span><span class="ls2">  ${
    obj.Unit
  }  <span class="_ _4"> </span>  ${obj.Rate}  <span class="_ _5"> </span>  ${
    obj.Unit * obj.Rate
  }  </span>
  </div>
</div>`;
});

export default function Home({ navigation }) {
  //   const html = `
  // <html>
  //   <head>
  //     <meta charset="utf-8">
  //     <title>Invoice</title>
  //     <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
  //     <style>
  //       ${htmlStyles}
  //     </style>
  //   </head>
  //   <body>
  //     <header>
  //       <h1>Invoice</h1>
  //       <address>
  //         <p>${data.name}</p>
  //         <p>${data.address}</p>
  //         <p>${data.phone}</p>
  //       </address>
  //     </header>
  //     <article>
  //       <h1>Recipient</h1>
  //       <address>
  //         <p>${data.company}<br>c/o ${data.name}</p>
  //       </address>
  //       <table class="meta">
  //         <tr>
  //           <th><span>Invoice #</span></th>
  //           <td><span>101138</span></td>
  //         </tr>
  //         <tr>
  //           <th><span>Date</span></th>
  //           <td><span>${new Date()}</span></td>
  //         </tr>
  //         <tr>
  //           <th><span>Amount Due</span></th>
  //           <td><span id="prefix">$</span><span>${data.amount}</span></td>
  //         </tr>
  //       </table>
  //       <table class="inventory">
  //         <thead>
  //           <tr>
  //             <th><span>Item</span></th>
  //             <th><span>Description</span></th>
  //             <th><span>Rate</span></th>
  //             <th><span>Quantity</span></th>
  //             <th><span>Price</span></th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td><span>Front End Consultation</span></td>
  //             <td><span>Experience Review</span></td>
  //             <td><span data-prefix>$</span><span>${data.amt}</span></td>
  //             <td><span>4</span></td>
  //             <td><span data-prefix>$</span><span>${data.amt}</span></td>
  //           </tr>
  //         </tbody>
  //       </table>
  //       <table class="balance">
  //         <tr>
  //           <th><span>Total</span></th>
  //           <td><span data-prefix>$</span><span>${data.amt}</span></td>
  //         </tr>
  //         <tr>
  //           <th><span>Amount Paid</span></th>
  //           <td><span data-prefix>$</span><span>0.00</span></td>
  //         </tr>
  //         <tr>
  //           <th><span>Balance Due</span></th>
  //           <td><span data-prefix>$</span><span>${data.amount}</span></td>
  //         </tr>
  //       </table>
  //     </article>
  //     <aside>
  //       <h1><span>Additional Notes</span></h1>
  //       <div>
  //         <p>A finance charge of 1.5% will be made on unpaid balances after 30 days.</p>
  //       </div>
  //     </aside>
  //   </body>
  // </html>
  // `;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: "15%",
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    footerView: {
      alignItems: "center",
      paddingTop: 20,
      paddingBottom: 20,
    },
    footerText: {
      color: "black",
      fontWeight: "bold",
      fontSize: 16,
    },
    footerLink: {
      color: "#788eec",
      fontWeight: "bold",
      fontSize: 16,
    },
    viewCheck: {
      padding: 10,
    },
  });

  const html = `<!DOCTYPE html>
  <!-- Created by pdf2htmlEX (https://github.com/pdf2htmlEX/pdf2htmlEX) -->
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
    <meta charset="utf-8" />
    <meta name="generator" content="pdf2htmlEX" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <style type="text/css">
    /*! 
   * Base CSS for pdf2htmlEX
   * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> 
   * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE
   */
    
    #sidebar {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 250px;
      padding: 0;
      margin: 0;
      overflow: auto
    }
    
    #page-container {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      border: 0
    }
    
    @media screen {
      #sidebar.opened+#page-container {
        left: 250px
      }
      #page-container {
        bottom: 0;
        right: 0;
        overflow: auto
      }
      .loading-indicator {
        display: none
      }
      .loading-indicator.active {
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        top: 50%;
        left: 50%;
        margin-top: -32px;
        margin-left: -32px
      }
      .loading-indicator img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0
      }
    }
    
    @media print {
      @page {
        margin: 0
      }
      html {
        margin: 0
      }
      body {
        margin: 0;
        -webkit-print-color-adjust: exact
      }
      #sidebar {
        display: none
      }
      #page-container {
        width: auto;
        height: auto;
        overflow: visible;
        background-color: transparent
      }
      .d {
        display: none
      }
    }
    
    .pf {
      position: relative;
      background-color: white;
      overflow: hidden;
      margin: 0;
      border: 0
    }
    
    .pc {
      position: absolute;
      border: 0;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: block;
      transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      -webkit-transform-origin: 0 0
    }
    
    .pc.opened {
      display: block
    }
    
    .bf {
      position: absolute;
      border: 0;
      margin: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none
    }
    
    .bi {
      position: absolute;
      border: 0;
      margin: 0;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none
    }
    
    @media print {
      .pf {
        margin: 0;
        box-shadow: none;
        page-break-after: always;
        page-break-inside: avoid
      }
      @-moz-document url-prefix() {
        .pf {
          overflow: visible;
          border: 1px solid #fff
        }
        .pc {
          overflow: visible
        }
      }
    }
    
    .c {
      position: absolute;
      border: 0;
      padding: 0;
      margin: 0;
      overflow: hidden;
      display: block
    }
    
    .t {
      position: absolute;
      white-space: pre;
      font-size: 1px;
      transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      -webkit-transform-origin: 0 100%;
      unicode-bidi: bidi-override;
      -moz-font-feature-settings: "liga" 0
    }
    
    .t:after {
      content: ''
    }
    
    .t:before {
      content: '';
      display: inline-block
    }
    
    .t span {
      position: relative;
      unicode-bidi: bidi-override
    }
    
    ._ {
      display: inline-block;
      color: transparent;
      z-index: -1
    }
    
    ::selection {
      background: rgba(127, 255, 255, 0.4)
    }
    
    ::-moz-selection {
      background: rgba(127, 255, 255, 0.4)
    }
    
    .pi {
      display: none
    }
    
    .d {
      position: absolute;
      transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      -webkit-transform-origin: 0 100%
    }
    
    .it {
      border: 0;
      background-color: rgba(255, 255, 255, 0.0)
    }
    
    .ir:hover {
      cursor: pointer
    }
    </style>
    <style type="text/css">
    /*! 
   * Fancy styles for pdf2htmlEX
   * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> 
   * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE
   */
    
    @keyframes fadein {
      from {
        opacity: 0
      }
      to {
        opacity: 1
      }
    }
    
    @-webkit-keyframes fadein {
      from {
        opacity: 0
      }
      to {
        opacity: 1
      }
    }
    
    @keyframes swing {
      0 {
        transform: rotate(0)
      }
      10% {
        transform: rotate(0)
      }
      90% {
        transform: rotate(720deg)
      }
      100% {
        transform: rotate(720deg)
      }
    }
    
    @-webkit-keyframes swing {
      0 {
        -webkit-transform: rotate(0)
      }
      10% {
        -webkit-transform: rotate(0)
      }
      90% {
        -webkit-transform: rotate(720deg)
      }
      100% {
        -webkit-transform: rotate(720deg)
      }
    }
    
    @media screen {
      #sidebar {
        background-color: #2f3236;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+")
      }
      #outline {
        font-family: Georgia, Times, "Times New Roman", serif;
        font-size: 13px;
        margin: 2em 1em
      }
      #outline ul {
        padding: 0
      }
      #outline li {
        list-style-type: none;
        margin: 1em 0
      }
      #outline li>ul {
        margin-left: 1em
      }
      #outline a,
      #outline a:visited,
      #outline a:hover,
      #outline a:active {
        line-height: 1.2;
        color: #e8e8e8;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-decoration: none;
        display: block;
        overflow: hidden;
        outline: 0
      }
      #outline a:hover {
        color: #0cf
      }
      #page-container {
        background-color: #9e9e9e;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
        -webkit-transition: left 500ms;
        transition: left 500ms
      }
      .pf {
        margin: 13px auto;
        box-shadow: 1px 1px 3px 1px #333;
        border-collapse: separate
      }
      .pc.opened {
        -webkit-animation: fadein 100ms;
        animation: fadein 100ms
      }
      .loading-indicator.active {
        -webkit-animation: swing 1.5s ease-in-out .01s infinite alternate none;
        animation: swing 1.5s ease-in-out .01s infinite alternate none
      }
      .checked {
        background: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC)
      }
    }
    </style>
    <style type="text/css">
    .ff0 {
      font-family: sans-serif;
      visibility: hidden;
    }
    
    @font-face {
      font-family: ff1;
      src: url('data:application/font-woff;base64,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')format("woff");
    }
    
    .ff1 {
      font-family: ff1;
      line-height: 0.947266;
      font-style: normal;
      font-weight: normal;
      visibility: visible;
    }
    
    @font-face {
      font-family: ff2;
      src: url('data:application/font-woff;base64,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')format("woff");
    }
    
    .ff2 {
      font-family: ff2;
      line-height: 0.946777;
      font-style: normal;
      font-weight: normal;
      visibility: visible;
    }
    
    @font-face {
      font-family: ff3;
      src: url('data:application/font-woff;base64,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')format("woff");
    }
    
    .ff3 {
      font-family: ff3;
      line-height: 0.946777;
      font-style: normal;
      font-weight: normal;
      visibility: visible;
    }
    
    @font-face {
      font-family: ff4;
      src: url('data:application/font-woff;base64,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')format("woff");
    }
    
    .ff4 {
      font-family: ff4;
      line-height: 0.947266;
      font-style: normal;
      font-weight: normal;
      visibility: visible;
    }
    
    .m0 {
      transform: matrix(0.375000, 0.000000, 0.000000, 0.375000, 0, 0);
      -ms-transform: matrix(0.375000, 0.000000, 0.000000, 0.375000, 0, 0);
      -webkit-transform: matrix(0.375000, 0.000000, 0.000000, 0.375000, 0, 0);
    }
    
    .v0 {
      vertical-align: 0.000000px;
    }
    
    .ls1 {
      letter-spacing: -0.076800px;
    }
    
    .ls4 {
      letter-spacing: -0.038400px;
    }
    
    .ls0 {
      letter-spacing: 0.000000px;
    }
    
    .ls2 {
      letter-spacing: 0.105600px;
    }
    
    .ls5 {
      letter-spacing: 0.211200px;
    }
    
    .ls3 {
      letter-spacing: 0.220800px;
    }
    
    .sc_ {
      text-shadow: none;
    }
    
    .sc0 {
      text-shadow: -0.015em 0 transparent, 0 0.015em transparent, 0.015em 0 transparent, 0 -0.015em transparent;
    }
    
    @media screen and (-webkit-min-device-pixel-ratio:0) {
      .sc_ {
        -webkit-text-stroke: 0px transparent;
      }
      .sc0 {
        -webkit-text-stroke: 0.015em transparent;
        text-shadow: none;
      }
    }
    
    .ws0 {
      word-spacing: 0.000000px;
    }
    
    ._10 {
      margin-left: -1.134720px;
    }
    
    ._f {
      width: 1.515360px;
    }
    
    ._1 {
      width: 13.545600px;
    }
    
    ._5 {
      width: 68.640000px;
    }
    
    ._4 {
      width: 74.400000px;
    }
    
    ._a {
      width: 95.040000px;
    }
    
    ._c {
      width: 115.790400px;
    }
    
    ._8 {
      width: 124.099200px;
    }
    
    ._6 {
      width: 126.646400px;
    }
    
    ._7 {
      width: 136.324800px;
    }
    
    ._9 {
      width: 165.776000px;
    }
    
    ._b {
      width: 173.014400px;
    }
    
    ._3 {
      width: 186.416000px;
    }
    
    ._2 {
      width: 222.694400px;
    }
    
    ._e {
      width: 1042.715200px;
    }
    
    ._d {
      width: 1121.003200px;
    }
    
    ._0 {
      width: 1194.385600px;
    }
    
    .fc1 {
      color: transparent;
    }
    
    .fc0 {
      color: rgb(0, 0, 0);
    }
    
    .fs2 {
      font-size: 29.280000px;
    }
    
    .fs1 {
      font-size: 33.120000px;
    }
    
    .fs4 {
      font-size: 36.960000px;
    }
    
    .fs0 {
      font-size: 40.320000px;
    }
    
    .fs5 {
      font-size: 66.240000px;
    }
    
    .fs6 {
      font-size: 81.120000px;
    }
    
    .fs3 {
      font-size: 88.320000px;
    }
    
    .y0 {
      bottom: -0.750000px;
    }
    
    .ya {
      bottom: 4.140000px;
    }
    
    .yb {
      bottom: 4.500000px;
    }
    
    .yd {
      bottom: 4.680000px;
    }
    
    .y2a {
      bottom: 4.860000px;
    }
    
    .y3 {
      bottom: 5.400000px;
    }
    
    .y1f {
      bottom: 5.580000px;
    }
    
    .y25 {
      bottom: 6.120000px;
    }
    
    .y6 {
      bottom: 7.380000px;
    }
    
    .y27 {
      bottom: 8.100000px;
    }
    
    .y23 {
      bottom: 8.280000px;
    }
    
    .y8 {
      bottom: 9.360000px;
    }
    
    .y2c {
      bottom: 10.080000px;
    }
    
    .y1c {
      bottom: 10.980000px;
    }
    
    .y31 {
      bottom: 23.970000px;
    }
    
    .y2 {
      bottom: 24.480000px;
    }
    
    .y2d {
      bottom: 25.200000px;
    }
    
    .y5 {
      bottom: 26.460000px;
    }
    
    .y21 {
      bottom: 27.180000px;
    }
    
    .y2f {
      bottom: 27.900000px;
    }
    
    .y3a {
      bottom: 57.105000px;
    }
    
    .y36 {
      bottom: 71.325000px;
    }
    
    .y35 {
      bottom: 87.885000px;
    }
    
    .y39 {
      bottom: 92.745000px;
    }
    
    .y34 {
      bottom: 104.445000px;
    }
    
    .y38 {
      bottom: 107.505000px;
    }
    
    .y33 {
      bottom: 121.005000px;
    }
    
    .y37 {
      bottom: 122.265000px;
    }
    
    .y1e {
      bottom: 228.465000px;
    }
    
    .y1d {
      bottom: 233.490000px;
    }
    
    .y32 {
      bottom: 294.150000px;
    }
    
    .y3b {
      bottom: 483.015000px;
    }
    
    .y28 {
      bottom: 508.935000px;
    }
    
    .y30 {
      bottom: 533.955000px;
    }
    
    .y1b {
      bottom: 534.675000px;
    }
    
    .y1a {
      bottom: 566.745000px;
    }
    
    .y19 {
      bottom: 586.725000px;
    }
    
    .y18 {
      bottom: 606.705000px;
    }
    
    .y17 {
      bottom: 626.685000px;
    }
    
    .y16 {
      bottom: 646.665000px;
    }
    
    .y15 {
      bottom: 666.645000px;
    }
    
    .y14 {
      bottom: 686.625000px;
    }
    
    .y13 {
      bottom: 706.605000px;
    }
    
    .y12 {
      bottom: 726.585000px;
    }
    
    .y11 {
      bottom: 746.565000px;
    }
    
    .y10 {
      bottom: 766.545000px;
    }
    
    .yf {
      bottom: 786.525000px;
    }
    
    .ye {
      bottom: 806.550000px;
    }
    
    .yc {
      bottom: 826.530000px;
    }
    
    .y9 {
      bottom: 846.510000px;
    }
    
    .y2e {
      bottom: 864.870000px;
    }
    
    .y2b {
      bottom: 904.830000px;
    }
    
    .y7 {
      bottom: 905.550000px;
    }
    
    .y20 {
      bottom: 929.850000px;
    }
    
    .y4 {
      bottom: 930.570000px;
    }
    
    .y29 {
      bottom: 971.970000px;
    }
    
    .y1 {
      bottom: 972.690000px;
    }
    
    .y26 {
      bottom: 1012.110000px;
    }
    
    .y24 {
      bottom: 1044.150000px;
    }
    
    .y22 {
      bottom: 1066.140000px;
    }
    
    .h6 {
      height: 17.640000px;
    }
    
    .h9 {
      height: 18.540000px;
    }
    
    .h8 {
      height: 20.973516px;
    }
    
    .hd {
      height: 21.087891px;
    }
    
    .h11 {
      height: 21.996000px;
    }
    
    .h5 {
      height: 23.580000px;
    }
    
    .h7 {
      height: 23.724141px;
    }
    
    .hb {
      height: 23.853516px;
    }
    
    .h15 {
      height: 25.020000px;
    }
    
    .h1c {
      height: 25.920000px;
    }
    
    .h12 {
      height: 26.474766px;
    }
    
    .h3 {
      height: 28.881563px;
    }
    
    .h19 {
      height: 29.039062px;
    }
    
    .ha {
      height: 30.636000px;
    }
    
    .h13 {
      height: 32.040000px;
    }
    
    .h18 {
      height: 32.076000px;
    }
    
    .h2 {
      height: 38.700000px;
    }
    
    .hf {
      height: 39.420000px;
    }
    
    .h17 {
      height: 39.960000px;
    }
    
    .h16 {
      height: 40.140000px;
    }
    
    .h4 {
      height: 40.680000px;
    }
    
    .he {
      height: 42.120000px;
    }
    
    .h14 {
      height: 47.707031px;
    }
    
    .h1b {
      height: 58.423828px;
    }
    
    .h10 {
      height: 63.609375px;
    }
    
    .h1a {
      height: 133.956000px;
    }
    
    .hc {
      height: 872.070000px;
    }
    
    .h0 {
      height: 1188.000000px;
    }
    
    .h1 {
      height: 1188.750000px;
    }
    
    .wc {
      width: 51.120000px;
    }
    
    .w15 {
      width: 63.396000px;
    }
    
    .wd {
      width: 64.476000px;
    }
    
    .w3 {
      width: 65.340000px;
    }
    
    .w4 {
      width: 66.420000px;
    }
    
    .wb {
      width: 66.780000px;
    }
    
    .w12 {
      width: 67.140000px;
    }
    
    .w14 {
      width: 87.876000px;
    }
    
    .wa {
      width: 115.596000px;
    }
    
    .w13 {
      width: 137.916000px;
    }
    
    .w11 {
      width: 150.120000px;
    }
    
    .w8 {
      width: 205.050000px;
    }
    
    .w10 {
      width: 245.775000px;
    }
    
    .wf {
      width: 292.935000px;
    }
    
    .w5 {
      width: 439.305000px;
    }
    
    .w9 {
      width: 483.765000px;
    }
    
    .we {
      width: 506.445000px;
    }
    
    .w6 {
      width: 621.690000px;
    }
    
    .w7 {
      width: 688.830000px;
    }
    
    .w2 {
      width: 760.830000px;
    }
    
    .w0 {
      width: 918.000000px;
    }
    
    .w1 {
      width: 918.750000px;
    }
    
    .x0 {
      left: 0.000000px;
    }
    
    .x2 {
      left: 2.340000px;
    }
    
    .x19 {
      left: 13.680000px;
    }
    
    .x10 {
      left: 24.840000px;
    }
    
    .x12 {
      left: 30.420000px;
    }
    
    .x13 {
      left: 33.120000px;
    }
    
    .x8 {
      left: 49.320000px;
    }
    
    .x5 {
      left: 57.060000px;
    }
    
    .x1 {
      left: 74.340000px;
    }
    
    .xc {
      left: 115.770000px;
    }
    
    .xd {
      left: 118.110000px;
    }
    
    .xa {
      left: 141.480000px;
    }
    
    .x14 {
      left: 154.830000px;
    }
    
    .xb {
      left: 169.770000px;
    }
    
    .x15 {
      left: 182.730000px;
    }
    
    .xe {
      left: 215.130000px;
    }
    
    .xf {
      left: 279.390000px;
    }
    
    .x6 {
      left: 295.455000px;
    }
    
    .x18 {
      left: 367.275000px;
    }
    
    .x7 {
      left: 445.755000px;
    }
    
    .x4 {
      left: 509.505000px;
    }
    
    .x17 {
      left: 517.395000px;
    }
    
    .x3 {
      left: 581.505000px;
    }
    
    .x9 {
      left: 636.585000px;
    }
    
    .x11 {
      left: 647.565000px;
    }
    
    .x16 {
      left: 698.685000px;
    }
    
    @media print {
      .v0 {
        vertical-align: 0.000000pt;
      }
      .ls1 {
        letter-spacing: -0.068267pt;
      }
      .ls4 {
        letter-spacing: -0.034133pt;
      }
      .ls0 {
        letter-spacing: 0.000000pt;
      }
      .ls2 {
        letter-spacing: 0.093867pt;
      }
      .ls5 {
        letter-spacing: 0.187733pt;
      }
      .ls3 {
        letter-spacing: 0.196267pt;
      }
      .ws0 {
        word-spacing: 0.000000pt;
      }
      ._10 {
        margin-left: -1.008640pt;
      }
      ._f {
        width: 1.346987pt;
      }
      ._1 {
        width: 12.040533pt;
      }
      ._5 {
        width: 61.013333pt;
      }
      ._4 {
        width: 66.133333pt;
      }
      ._a {
        width: 84.480000pt;
      }
      ._c {
        width: 102.924800pt;
      }
      ._8 {
        width: 110.310400pt;
      }
      ._6 {
        width: 112.574578pt;
      }
      ._7 {
        width: 121.177600pt;
      }
      ._9 {
        width: 147.356444pt;
      }
      ._b {
        width: 153.790578pt;
      }
      ._3 {
        width: 165.703111pt;
      }
      ._2 {
        width: 197.950578pt;
      }
      ._e {
        width: 926.857956pt;
      }
      ._d {
        width: 996.447289pt;
      }
      ._0 {
        width: 1061.676089pt;
      }
      .fs2 {
        font-size: 26.026667pt;
      }
      .fs1 {
        font-size: 29.440000pt;
      }
      .fs4 {
        font-size: 32.853333pt;
      }
      .fs0 {
        font-size: 35.840000pt;
      }
      .fs5 {
        font-size: 58.880000pt;
      }
      .fs6 {
        font-size: 72.106667pt;
      }
      .fs3 {
        font-size: 78.506667pt;
      }
      .y0 {
        bottom: -0.666667pt;
      }
      .ya {
        bottom: 3.680000pt;
      }
      .yb {
        bottom: 4.000000pt;
      }
      .yd {
        bottom: 4.160000pt;
      }
      .y2a {
        bottom: 4.320000pt;
      }
      .y3 {
        bottom: 4.800000pt;
      }
      .y1f {
        bottom: 4.960000pt;
      }
      .y25 {
        bottom: 5.440000pt;
      }
      .y6 {
        bottom: 6.560000pt;
      }
      .y27 {
        bottom: 7.200000pt;
      }
      .y23 {
        bottom: 7.360000pt;
      }
      .y8 {
        bottom: 8.320000pt;
      }
      .y2c {
        bottom: 8.960000pt;
      }
      .y1c {
        bottom: 9.760000pt;
      }
      .y31 {
        bottom: 21.306667pt;
      }
      .y2 {
        bottom: 21.760000pt;
      }
      .y2d {
        bottom: 22.400000pt;
      }
      .y5 {
        bottom: 23.520000pt;
      }
      .y21 {
        bottom: 24.160000pt;
      }
      .y2f {
        bottom: 24.800000pt;
      }
      .y3a {
        bottom: 50.760000pt;
      }
      .y36 {
        bottom: 63.400000pt;
      }
      .y35 {
        bottom: 78.120000pt;
      }
      .y39 {
        bottom: 82.440000pt;
      }
      .y34 {
        bottom: 92.840000pt;
      }
      .y38 {
        bottom: 95.560000pt;
      }
      .y33 {
        bottom: 107.560000pt;
      }
      .y37 {
        bottom: 108.680000pt;
      }
      .y1e {
        bottom: 203.080000pt;
      }
      .y1d {
        bottom: 207.546667pt;
      }
      .y32 {
        bottom: 261.466667pt;
      }
      .y3b {
        bottom: 429.346667pt;
      }
      .y28 {
        bottom: 452.386667pt;
      }
      .y30 {
        bottom: 474.626667pt;
      }
      .y1b {
        bottom: 475.266667pt;
      }
      .y1a {
        bottom: 503.773333pt;
      }
      .y19 {
        bottom: 521.533333pt;
      }
      .y18 {
        bottom: 539.293333pt;
      }
      .y17 {
        bottom: 557.053333pt;
      }
      .y16 {
        bottom: 574.813333pt;
      }
      .y15 {
        bottom: 592.573333pt;
      }
      .y14 {
        bottom: 610.333333pt;
      }
      .y13 {
        bottom: 628.093333pt;
      }
      .y12 {
        bottom: 645.853333pt;
      }
      .y11 {
        bottom: 663.613333pt;
      }
      .y10 {
        bottom: 681.373333pt;
      }
      .yf {
        bottom: 699.133333pt;
      }
      .ye {
        bottom: 716.933333pt;
      }
      .yc {
        bottom: 734.693333pt;
      }
      .y9 {
        bottom: 752.453333pt;
      }
      .y2e {
        bottom: 768.773333pt;
      }
      .y2b {
        bottom: 804.293333pt;
      }
      .y7 {
        bottom: 804.933333pt;
      }
      .y20 {
        bottom: 826.533333pt;
      }
      .y4 {
        bottom: 827.173333pt;
      }
      .y29 {
        bottom: 863.973333pt;
      }
      .y1 {
        bottom: 864.613333pt;
      }
      .y26 {
        bottom: 899.653333pt;
      }
      .y24 {
        bottom: 928.133333pt;
      }
      .y22 {
        bottom: 947.680000pt;
      }
      .h6 {
        height: 15.680000pt;
      }
      .h9 {
        height: 16.480000pt;
      }
      .h8 {
        height: 18.643125pt;
      }
      .hd {
        height: 18.744792pt;
      }
      .h11 {
        height: 19.552000pt;
      }
      .h5 {
        height: 20.960000pt;
      }
      .h7 {
        height: 21.088125pt;
      }
      .hb {
        height: 21.203125pt;
      }
      .h15 {
        height: 22.240000pt;
      }
      .h1c {
        height: 23.040000pt;
      }
      .h12 {
        height: 23.533125pt;
      }
      .h3 {
        height: 25.672500pt;
      }
      .h19 {
        height: 25.812500pt;
      }
      .ha {
        height: 27.232000pt;
      }
      .h13 {
        height: 28.480000pt;
      }
      .h18 {
        height: 28.512000pt;
      }
      .h2 {
        height: 34.400000pt;
      }
      .hf {
        height: 35.040000pt;
      }
      .h17 {
        height: 35.520000pt;
      }
      .h16 {
        height: 35.680000pt;
      }
      .h4 {
        height: 36.160000pt;
      }
      .he {
        height: 37.440000pt;
      }
      .h14 {
        height: 42.406250pt;
      }
      .h1b {
        height: 51.932292pt;
      }
      .h10 {
        height: 56.541667pt;
      }
      .h1a {
        height: 119.072000pt;
      }
      .hc {
        height: 775.173333pt;
      }
      .h0 {
        height: 1056.000000pt;
      }
      .h1 {
        height: 1056.666667pt;
      }
      .wc {
        width: 45.440000pt;
      }
      .w15 {
        width: 56.352000pt;
      }
      .wd {
        width: 57.312000pt;
      }
      .w3 {
        width: 58.080000pt;
      }
      .w4 {
        width: 59.040000pt;
      }
      .wb {
        width: 59.360000pt;
      }
      .w12 {
        width: 59.680000pt;
      }
      .w14 {
        width: 78.112000pt;
      }
      .wa {
        width: 102.752000pt;
      }
      .w13 {
        width: 122.592000pt;
      }
      .w11 {
        width: 133.440000pt;
      }
      .w8 {
        width: 182.266667pt;
      }
      .w10 {
        width: 218.466667pt;
      }
      .wf {
        width: 260.386667pt;
      }
      .w5 {
        width: 390.493333pt;
      }
      .w9 {
        width: 430.013333pt;
      }
      .we {
        width: 450.173333pt;
      }
      .w6 {
        width: 552.613333pt;
      }
      .w7 {
        width: 612.293333pt;
      }
      .w2 {
        width: 676.293333pt;
      }
      .w0 {
        width: 816.000000pt;
      }
      .w1 {
        width: 816.666667pt;
      }
      .x0 {
        left: 0.000000pt;
      }
      .x2 {
        left: 2.080000pt;
      }
      .x19 {
        left: 12.160000pt;
      }
      .x10 {
        left: 22.080000pt;
      }
      .x12 {
        left: 27.040000pt;
      }
      .x13 {
        left: 29.440000pt;
      }
      .x8 {
        left: 43.840000pt;
      }
      .x5 {
        left: 50.720000pt;
      }
      .x1 {
        left: 66.080000pt;
      }
      .xc {
        left: 102.906667pt;
      }
      .xd {
        left: 104.986667pt;
      }
      .xa {
        left: 125.760000pt;
      }
      .x14 {
        left: 137.626667pt;
      }
      .xb {
        left: 150.906667pt;
      }
      .x15 {
        left: 162.426667pt;
      }
      .xe {
        left: 191.226667pt;
      }
      .xf {
        left: 248.346667pt;
      }
      .x6 {
        left: 262.626667pt;
      }
      .x18 {
        left: 326.466667pt;
      }
      .x7 {
        left: 396.226667pt;
      }
      .x4 {
        left: 452.893333pt;
      }
      .x17 {
        left: 459.906667pt;
      }
      .x3 {
        left: 516.893333pt;
      }
      .x9 {
        left: 565.853333pt;
      }
      .x11 {
        left: 575.613333pt;
      }
      .x16 {
        left: 621.053333pt;
      }
    }
    </style>
    <script>
    /*
     Copyright 2012 Mozilla Foundation 
     Copyright 2013 Lu Wang <coolwanglu@gmail.com>
     Apachine License Version 2.0 
    */
    (function() {
      function b(a, b, e, f) {
        var c = (a.className || "").split(/\s+/g);
        "" === c[0] && c.shift();
        var d = c.indexOf(b);
        0 > d && e && c.push(b);
        0 <= d && f && c.splice(d, 1);
        a.className = c.join(" ");
        return 0 <= d
      }
      if(!("classList" in document.createElement("div"))) {
        var e = {
          add: function(a) {
            b(this.element, a, !0, !1)
          },
          contains: function(a) {
            return b(this.element, a, !1, !1)
          },
          remove: function(a) {
            b(this.element, a, !1, !0)
          },
          toggle: function(a) {
            b(this.element, a, !0, !0)
          }
        };
        Object.defineProperty(HTMLElement.prototype, "classList", {
          get: function() {
            if(this._classList) return this._classList;
            var a = Object.create(e, {
              element: {
                value: this,
                writable: !1,
                enumerable: !0
              }
            });
            Object.defineProperty(this, "_classList", {
              value: a,
              writable: !1,
              enumerable: !1
            });
            return a
          },
          enumerable: !0
        })
      }
    })();
    </script>
    <script>
    (function() {
      /*
       pdf2htmlEX.js: Core UI functions for pdf2htmlEX 
       Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> and other contributors 
       https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE 
      */
      var pdf2htmlEX = window.pdf2htmlEX = window.pdf2htmlEX || {},
        CSS_CLASS_NAMES = {
          page_frame: "pf",
          page_content_box: "pc",
          page_data: "pi",
          background_image: "bi",
          link: "l",
          input_radio: "ir",
          __dummy__: "no comma"
        },
        DEFAULT_CONFIG = {
          container_id: "page-container",
          sidebar_id: "sidebar",
          outline_id: "outline",
          loading_indicator_cls: "loading-indicator",
          preload_pages: 3,
          render_timeout: 100,
          scale_step: 0.9,
          key_handler: !0,
          hashchange_handler: !0,
          view_history_handler: !0,
          __dummy__: "no comma"
        },
        EPS = 1E-6;
  
      function invert(a) {
        var b = a[0] * a[3] - a[1] * a[2];
        return [a[3] / b, -a[1] / b, -a[2] / b, a[0] / b, (a[2] * a[5] - a[3] * a[4]) / b, (a[1] * a[4] - a[0] * a[5]) / b]
      }
  
      function transform(a, b) {
        return [a[0] * b[0] + a[2] * b[1] + a[4], a[1] * b[0] + a[3] * b[1] + a[5]]
      }
  
      function get_page_number(a) {
        return parseInt(a.getAttribute("data-page-no"), 16)
      }
  
      function disable_dragstart(a) {
        for(var b = 0, c = a.length; b < c; ++b) a[b].addEventListener("dragstart", function() {
          return !1
        }, !1)
      }
  
      function clone_and_extend_objs(a) {
        for(var b = {}, c = 0, e = arguments.length; c < e; ++c) {
          var h = arguments[c],
            d;
          for(d in h) h.hasOwnProperty(d) && (b[d] = h[d])
        }
        return b
      }
  
      function Page(a) {
        if(a) {
          this.shown = this.loaded = !1;
          this.page = a;
          this.num = get_page_number(a);
          this.original_height = a.clientHeight;
          this.original_width = a.clientWidth;
          var b = a.getElementsByClassName(CSS_CLASS_NAMES.page_content_box)[0];
          b && (this.content_box = b, this.original_scale = this.cur_scale = this.original_height / b.clientHeight, this.page_data = JSON.parse(a.getElementsByClassName(CSS_CLASS_NAMES.page_data)[0].getAttribute("data-data")), this.ctm = this.page_data.ctm, this.ictm = invert(this.ctm), this.loaded = !0)
        }
      }
      Page.prototype = {
        hide: function() {
          this.loaded && this.shown && (this.content_box.classList.remove("opened"), this.shown = !1)
        },
        show: function() {
          this.loaded && !this.shown && (this.content_box.classList.add("opened"), this.shown = !0)
        },
        rescale: function(a) {
          this.cur_scale = 0 === a ? this.original_scale : a;
          this.loaded && (a = this.content_box.style, a.msTransform = a.webkitTransform = a.transform = "scale(" + this.cur_scale.toFixed(3) + ")");
          a = this.page.style;
          a.height = this.original_height * this.cur_scale + "px";
          a.width = this.original_width * this.cur_scale + "px"
        },
        view_position: function() {
          var a = this.page,
            b = a.parentNode;
          return [b.scrollLeft - a.offsetLeft - a.clientLeft, b.scrollTop - a.offsetTop - a.clientTop]
        },
        height: function() {
          return this.page.clientHeight
        },
        width: function() {
          return this.page.clientWidth
        }
      };
  
      function Viewer(a) {
        this.config = clone_and_extend_objs(DEFAULT_CONFIG, 0 < arguments.length ? a : {});
        this.pages_loading = [];
        this.init_before_loading_content();
        var b = this;
        document.addEventListener("DOMContentLoaded", function() {
          b.init_after_loading_content()
        }, !1)
      }
      Viewer.prototype = {
        scale: 1,
        cur_page_idx: 0,
        first_page_idx: 0,
        init_before_loading_content: function() {
          this.pre_hide_pages()
        },
        initialize_radio_button: function() {
          for(var a = document.getElementsByClassName(CSS_CLASS_NAMES.input_radio), b = 0; b < a.length; b++) a[b].addEventListener("click", function() {
            this.classList.toggle("checked")
          })
        },
        init_after_loading_content: function() {
          this.sidebar = document.getElementById(this.config.sidebar_id);
          this.outline = document.getElementById(this.config.outline_id);
          this.container = document.getElementById(this.config.container_id);
          this.loading_indicator = document.getElementsByClassName(this.config.loading_indicator_cls)[0];
          for(var a = !0, b = this.outline.childNodes, c = 0, e = b.length; c < e; ++c)
            if("ul" === b[c].nodeName.toLowerCase()) {
              a = !1;
              break
            }
          a || this.sidebar.classList.add("opened");
          this.find_pages();
          if(0 != this.pages.length) {
            disable_dragstart(document.getElementsByClassName(CSS_CLASS_NAMES.background_image));
            this.config.key_handler && this.register_key_handler();
            var h = this;
            this.config.hashchange_handler && window.addEventListener("hashchange", function(a) {
              h.navigate_to_dest(document.location.hash.substring(1))
            }, !1);
            this.config.view_history_handler && window.addEventListener("popstate", function(a) {
              a.state && h.navigate_to_dest(a.state)
            }, !1);
            this.container.addEventListener("scroll", function() {
              h.update_page_idx();
              h.schedule_render(!0)
            }, !1);
            [this.container, this.outline].forEach(function(a) {
              a.addEventListener("click", h.link_handler.bind(h), !1)
            });
            this.initialize_radio_button();
            this.render()
          }
        },
        find_pages: function() {
          for(var a = [], b = {}, c = this.container.childNodes,
              e = 0, h = c.length; e < h; ++e) {
            var d = c[e];
            d.nodeType === Node.ELEMENT_NODE && d.classList.contains(CSS_CLASS_NAMES.page_frame) && (d = new Page(d), a.push(d), b[d.num] = a.length - 1)
          }
          this.pages = a;
          this.page_map = b
        },
        load_page: function(a, b, c) {
          var e = this.pages;
          if(!(a >= e.length || (e = e[a], e.loaded || this.pages_loading[a]))) {
            var e = e.page,
              h = e.getAttribute("data-page-url");
            if(h) {
              this.pages_loading[a] = !0;
              var d = e.getElementsByClassName(this.config.loading_indicator_cls)[0];
              "undefined" === typeof d && (d = this.loading_indicator.cloneNode(!0), d.classList.add("active"), e.appendChild(d));
              var f = this,
                g = new XMLHttpRequest;
              g.open("GET", h, !0);
              g.onload = function() {
                if(200 === g.status || 0 === g.status) {
                  var b = document.createElement("div");
                  b.innerHTML = g.responseText;
                  for(var d = null, b = b.childNodes, e = 0, h = b.length; e < h; ++e) {
                    var p = b[e];
                    if(p.nodeType === Node.ELEMENT_NODE && p.classList.contains(CSS_CLASS_NAMES.page_frame)) {
                      d = p;
                      break
                    }
                  }
                  b = f.pages[a];
                  f.container.replaceChild(d, b.page);
                  b = new Page(d);
                  f.pages[a] = b;
                  b.hide();
                  b.rescale(f.scale);
                  disable_dragstart(d.getElementsByClassName(CSS_CLASS_NAMES.background_image));
                  f.schedule_render(!1);
                  c && c(b)
                }
                delete f.pages_loading[a]
              };
              g.send(null)
            }
            void 0 === b && (b = this.config.preload_pages);
            0 < --b && (f = this, setTimeout(function() {
              f.load_page(a + 1, b)
            }, 0))
          }
        },
        pre_hide_pages: function() {
          var a = "@media screen{." + CSS_CLASS_NAMES.page_content_box + "{display:none;}}",
            b = document.createElement("style");
          b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
          document.head.appendChild(b)
        },
        render: function() {
          for(var a = this.container, b = a.scrollTop, c = a.clientHeight, a = b - c, b = b + c + c, c = this.pages, e = 0, h = c.length; e < h; ++e) {
            var d = c[e],
              f = d.page,
              g = f.offsetTop + f.clientTop,
              f = g + f.clientHeight;
            g <= b && f >= a ? d.loaded ? d.show() : this.load_page(e) : d.hide()
          }
        },
        update_page_idx: function() {
          var a = this.pages,
            b = a.length;
          if(!(2 > b)) {
            for(var c = this.container, e = c.scrollTop, c = e + c.clientHeight, h = -1, d = b, f = d - h; 1 < f;) {
              var g = h + Math.floor(f / 2),
                f = a[g].page;
              f.offsetTop + f.clientTop + f.clientHeight >= e ? d = g : h = g;
              f = d - h
            }
            this.first_page_idx = d;
            for(var g = h = this.cur_page_idx, k = 0; d < b; ++d) {
              var f = a[d].page,
                l = f.offsetTop + f.clientTop,
                f = f.clientHeight;
              if(l > c) break;
              f = (Math.min(c, l + f) - Math.max(e, l)) / f;
              if(d === h && Math.abs(f - 1) <= EPS) {
                g = h;
                break
              }
              f > k && (k = f, g = d)
            }
            this.cur_page_idx = g
          }
        },
        schedule_render: function(a) {
          if(void 0 !== this.render_timer) {
            if(!a) return;
            clearTimeout(this.render_timer)
          }
          var b = this;
          this.render_timer = setTimeout(function() {
            delete b.render_timer;
            b.render()
          }, this.config.render_timeout)
        },
        register_key_handler: function() {
          var a = this;
          window.addEventListener("DOMMouseScroll", function(b) {
            if(b.ctrlKey) {
              b.preventDefault();
              var c = a.container,
                e = c.getBoundingClientRect(),
                c = [b.clientX - e.left - c.clientLeft, b.clientY - e.top - c.clientTop];
              a.rescale(Math.pow(a.config.scale_step, b.detail), !0, c)
            }
          }, !1);
          window.addEventListener("keydown", function(b) {
            var c = !1,
              e = b.ctrlKey || b.metaKey,
              h = b.altKey;
            switch(b.keyCode) {
              case 61:
              case 107:
              case 187:
                e && (a.rescale(1 / a.config.scale_step, !0), c = !0);
                break;
              case 173:
              case 109:
              case 189:
                e && (a.rescale(a.config.scale_step, !0), c = !0);
                break;
              case 48:
                e && (a.rescale(0, !1), c = !0);
                break;
              case 33:
                h ? a.scroll_to(a.cur_page_idx - 1) : a.container.scrollTop -= a.container.clientHeight;
                c = !0;
                break;
              case 34:
                h ? a.scroll_to(a.cur_page_idx + 1) : a.container.scrollTop += a.container.clientHeight;
                c = !0;
                break;
              case 35:
                a.container.scrollTop = a.container.scrollHeight;
                c = !0;
                break;
              case 36:
                a.container.scrollTop = 0, c = !0
            }
            c && b.preventDefault()
          }, !1)
        },
        rescale: function(a, b, c) {
          var e = this.scale;
          this.scale = a = 0 === a ? 1 : b ? e * a : a;
          c || (c = [0, 0]);
          b = this.container;
          c[0] += b.scrollLeft;
          c[1] += b.scrollTop;
          for(var h = this.pages, d = h.length, f = this.first_page_idx; f < d; ++f) {
            var g = h[f].page;
            if(g.offsetTop + g.clientTop >= c[1]) break
          }
          g = f - 1;
          0 > g && (g = 0);
          var g = h[g].page,
            k = g.clientWidth,
            f = g.clientHeight,
            l = g.offsetLeft + g.clientLeft,
            m = c[0] - l;
          0 > m ? m = 0 : m > k && (m = k);
          k = g.offsetTop + g.clientTop;
          c = c[1] - k;
          0 > c ? c = 0 : c > f && (c = f);
          for(f = 0; f < d; ++f) h[f].rescale(a);
          b.scrollLeft += m / e * a + g.offsetLeft + g.clientLeft - m - l;
          b.scrollTop += c / e * a + g.offsetTop + g.clientTop - c - k;
          this.schedule_render(!0)
        },
        fit_width: function() {
          var a = this.cur_page_idx;
          this.rescale(this.container.clientWidth / this.pages[a].width(), !0);
          this.scroll_to(a)
        },
        fit_height: function() {
          var a = this.cur_page_idx;
          this.rescale(this.container.clientHeight / this.pages[a].height(), !0);
          this.scroll_to(a)
        },
        get_containing_page: function(a) {
          for(; a;) {
            if(a.nodeType === Node.ELEMENT_NODE && a.classList.contains(CSS_CLASS_NAMES.page_frame)) {
              a = get_page_number(a);
              var b = this.page_map;
              return a in b ? this.pages[b[a]] : null
            }
            a = a.parentNode
          }
          return null
        },
        link_handler: function(a) {
          var b = a.target,
            c = b.getAttribute("data-dest-detail");
          if(c) {
            if(this.config.view_history_handler) try {
              var e = this.get_current_view_hash();
              window.history.replaceState(e, "", "#" + e);
              window.history.pushState(c, "", "#" + c)
            } catch(h) {}
            this.navigate_to_dest(c, this.get_containing_page(b));
            a.preventDefault()
          }
        },
        navigate_to_dest: function(a, b) {
          try {
            var c = JSON.parse(a)
          } catch(e) {
            return
          }
          if(c instanceof Array) {
            var h = c[0],
              d = this.page_map;
            if(h in d) {
              for(var f = d[h], h = this.pages[f], d = 2, g = c.length; d < g; ++d) {
                var k = c[d];
                if(null !== k && "number" !== typeof k) return
              }
              for(; 6 > c.length;) c.push(null);
              var g = b || this.pages[this.cur_page_idx],
                d = g.view_position(),
                d = transform(g.ictm, [d[0], g.height() - d[1]]),
                g = this.scale,
                l = [0, 0],
                m = !0,
                k = !1,
                n = this.scale;
              switch(c[1]) {
                case "XYZ":
                  l = [null === c[2] ? d[0] : c[2] * n, null === c[3] ? d[1] : c[3] * n];
                  g = c[4];
                  if(null === g || 0 === g) g = this.scale;
                  k = !0;
                  break;
                case "Fit":
                case "FitB":
                  l = [0, 0];
                  k = !0;
                  break;
                case "FitH":
                case "FitBH":
                  l = [0, null === c[2] ? d[1] : c[2] * n];
                  k = !0;
                  break;
                case "FitV":
                case "FitBV":
                  l = [null === c[2] ? d[0] : c[2] * n, 0];
                  k = !0;
                  break;
                case "FitR":
                  l = [c[2] * n, c[5] * n], m = !1, k = !0
              }
              if(k) {
                this.rescale(g, !1);
                var p = this,
                  c = function(a) {
                    l = transform(a.ctm, l);
                    m && (l[1] = a.height() - l[1]);
                    p.scroll_to(f, l)
                  };
                h.loaded ? c(h) : (this.load_page(f, void 0, c), this.scroll_to(f))
              }
            }
          }
        },
        scroll_to: function(a, b) {
          var c = this.pages;
          if(!(0 > a || a >= c.length)) {
            c = c[a].view_position();
            void 0 === b && (b = [0, 0]);
            var e = this.container;
            e.scrollLeft += b[0] - c[0];
            e.scrollTop += b[1] - c[1]
          }
        },
        get_current_view_hash: function() {
          var a = [],
            b = this.pages[this.cur_page_idx];
          a.push(b.num);
          a.push("XYZ");
          var c = b.view_position(),
            c = transform(b.ictm, [c[0], b.height() - c[1]]);
          a.push(c[0] / this.scale);
          a.push(c[1] / this.scale);
          a.push(this.scale);
          return JSON.stringify(a)
        }
      };
      pdf2htmlEX.Viewer = Viewer;
    })();
    </script>
    <script>
    try {
      pdf2htmlEX.defaultViewer = new pdf2htmlEX.Viewer({});
    } catch(e) {}
    </script>
    <title></title>
  </head>
  
  <body>
    <div id="sidebar">
      <div id="outline"> </div>
    </div>
    <div id="page-container">
      <div id="pf1" class="pf w0 h0" data-page-no="1">
        <div class="pc pc1 w0 h0"><img class="bi x0 y0 w1 h1" alt="" src="data:image/png;base64,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q9P1OsBdzYyfD2wyC4MP35i7wU0V5MdMRkSHPt75BiU70dzl6sdAR3Pz6/yeILDRcQb18KZ5RHQOfeZuCjezUkrJZRiH+/v724fbt2/fvvnxpzdv3sxTlOfn599///33333/7TffvHz5crFYJA7MDIL7sQX5q3x7mLg81kyfI6W7mz0/6lSjZlVVVVVVVVXVbPl3JB7X2HxZ/TqHyee3+9dp8ktZjYhIyEVgClUALALhYjaVYqbC1DC/WJ9dnZ798x/+4dX51fXy9Grx458+vv+T0yb3g+UBylE4iplOY87jZFm9FAG7u7k9PD6M+/79z2/fXL14eX39229+849/+MM//v4fogiBBOwSiUSI53HHw3dqpmbFlOaa6GEyFMDzaOUhNsN8HqWc/7XERMwgMOCAzWHyuOLIYAZXNzVTVzXNWorqbrfbbrebzebt27fv3r378P79x/cfP3/6dH19fX19/d133/3zP/3Tv/zTP6/X665pJQQCO8gcsLmfFkRfhjjnDPlnXbJfv52Z5+snVVVVVVVVVVXVbPl38xh9GSjE1xnyf5pdnhs1DxVBBDmGOmVQEyVAilnxuTLHiej761erkF6dX/3bmx/Plqt39zcfH29vto9THnor5sagAJLUhKYlEJnt+37sxz3Lk4Rxmp5227v7+5/e/un/+W//7dtvXn/7+tsX19ddbDpoI0EoRBI6Dk0qYHP/65fg/NXKouein9BX/xp/Pu+pcAPmnlg7zFHO2RIGV1hx7cfhcfP4uNm8f/fu559//vDhw8P9/cP9g5YSJbx49fL733z33W+++/6777775tuLk4uUIhFc1Zl+UaT8d9pdjyt8vsy3VlVVVVVVVVVVs+XfKdFj1e4XsQaH9EN/ETefu0h/8d5k7qZqqizCLMxMpqzmRA520PXq5KxdXK1OTrrFxfr0j+/f/I93b+QTP/bbTb/NRQEnUIhIEohYSy6qWUspee/Iptuh//Rw175PTWp+e/P9Hx7vf7P5Zr1crZerdbdctotVswgSAgsTjOZznQS4fFW09PlfQHCaD4sAh4VGPp/3nJOkfhUp1S1bKWZZSzEtueyHft/vHzebm5ubz59v3v7885s3f7r59MnNXPV0fXp+ff7qxcvffvf99999/82r1xcnZ6vFkgBzdVP6Opr/lebW5809xPylokzkzHTcJltVVVVVVVVV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BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAwHmfCVYlMQJwV1V1tx0AgIdCaWasAAAAwA6fWAAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAYEkSIwAAALDrB6pCWaO0khiEAAAAAElFTkSuQmCC"
          />
          <div class="c x1 y1 w2 h2">
            <div class="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0">Date</div>
          </div>
          <div class="c x3 y1 w3 h2">
            <div class="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0">Invoice </div>
            <div class="t m0 x2 h3 y3 ff1 fs0 fc0 sc0 ls1 ws0">No</div>
          </div>
          <div class="c x1 y4 w4 h4">
            <div class="t m0 x2 h3 y5 ff1 fs0 fc0 sc0 ls0 ws0">Buyers </div>
            <div class="t m0 x2 h3 y6 ff1 fs0 fc0 sc0 ls0 ws0">Name</div>
          </div>
          <div class="c x1 y4 w2 h4">
            <div class="t m0 x4 h3 y5 ff1 fs0 fc0 sc0 ls0 ws0">Region</div>
          </div>
          <div class="c x1 y7 w2 h5">
            <div class="t m0 x2 h3 y8 ff1 fs0 fc0 sc0 ls0 ws0">Address<span class="_ _0"> </span>Area</div>
          </div>
          ${ordersDiv.map((obj) => obj)}
          <div class="c x1 y9 w2 h6">
            <div class="t m0 x5 h7 ya ff1 fs1 fc0 sc0 ls0 ws0">1<span class="_ _1"> </span>HI-PURE<span class="_ _2"> </span>250GM</div>
            <div class="t m0 x6 h8 yb ff1 fs2 fc0 sc0 ls0 ws0">AA/PM-21</div>
            <div class="t m0 x7 h7 ya ff1 fs1 fc0 sc0 ls0 ws0">Net 05<span class="_ _3"> </span><span class="ls2">65<span class="_ _4"> </span>550<span class="_ _5"> </span>35750</span>
            </div>
          </div>
          <div class="c x1 yc w2 h9">
            <div class="t m0 x5 h7 yd ff1 fs1 fc0 sc0 ls0 ws0">2<span class="_ _1"> </span>ThiaMethoxam<span class="_ _6"> </span>24GM<span class="_ _7"> </span>21JHF05001-FM<span class="_ _8"> </span>Net 05<span class="_ _9"> </span><span class="ls2">300<span class="_ _a"> </span>95<span class="_ _5"> </span>28500</span>
            </div>
          </div>
          <div class="c x1 ye w2 h9">
            <div class="t m0 x5 h7 yd ff1 fs1 fc0 sc0 ls0 ws0">3<span class="_ _1"> </span>ThiaMethoxam<span class="_ _6"> </span>48GM<span class="_ _7"> </span>21JHF05001-FM<span class="_ _8"> </span>Net 05<span class="_ _9"> </span><span class="ls2">252<span class="_ _4"> </span>180<span class="_ _5"> </span>45360</span>
            </div>
          </div>
          
          <div class="c x1 y10 w2 h9">
            <div class="t m0 x5 h7 yd ff1 fs1 fc0 sc0 ls0 ws0">5</div>
          </div>
          <div class="c x1 y11 w2 h9">
            <div class="t m0 x5 h7 yd ff1 fs1 fc0 sc0 ls0 ws0">6</div>
          </div>
          <div class="c x1 y12 w2 h9">
            <div class="t m0 x5 h7 yd ff1 fs1 fc0 sc0 ls0 ws0">7</div>
          </div>
          <div class="c x1 y13 w2 h9">
            <div class="t m0 x5 h7 yd ff1 fs1 fc0 sc0 ls0 ws0">8</div>
          </div>
          <div class="c x1 y14 w2 h9">
            <div class="t m0 x5 h7 yd ff1 fs1 fc0 sc0 ls0 ws0">9</div>
          </div>
          <div class="c x1 y15 w2 h9">
            <div class="t m0 x8 h7 yd ff1 fs1 fc0 sc0 ls2 ws0">10</div>
          </div>
          <div class="c x1 y16 w2 h9">
            <div class="t m0 x8 h7 yd ff1 fs1 fc0 sc0 ls2 ws0">11</div>
          </div>
          <div class="c x1 y17 w2 h9">
            <div class="t m0 x8 h7 yd ff1 fs1 fc0 sc0 ls2 ws0">12</div>
          </div>
          <div class="c x1 y18 w2 h9">
            <div class="t m0 x8 h7 yd ff1 fs1 fc0 sc0 ls2 ws0">13</div>
          </div>
          <div class="c x1 y19 w2 h9">
            <div class="t m0 x8 h7 yd ff1 fs1 fc0 sc0 ls2 ws0">14</div>
          </div>
          <div class="c x1 y1a w2 h9">
            <div class="t m0 x8 h7 yd ff1 fs1 fc0 sc0 ls2 ws0">15</div>
          </div>
          <div class="c x1 y1b w2 ha">
            <div class="t m0 x9 hb y1c ff2 fs1 fc0 sc0 ls3 ws0">168110</div>
          </div>
          <div class="c x1 y1d w2 hc">
            <div class="t m0 x2 h3 y1e ff1 fs0 fc0 sc0 ls0 ws0">Preparid By<span class="_ _d"> </span>Warehouse Incharge</div>
            <div class="t m0 x2 hd y1f ff3 fs2 fc0 sc0 ls0 ws0">Party / Receiver’s Sign / Stamp<span class="_ _e"> </span>Driver’s Name Sign</div>
          </div>
          <div class="c xa y20 w5 he">
            <div class="t m0 xb h3 y21 ff1 fs0 fc0 sc0 ls0 ws0">Dawood Sons</div>
          </div>
          <div class="c xa y22 w6 hf">
            <div class="t m0 xc h10 y23 ff2 fs3 fc0 sc0 ls0 ws0">ICON AGRO SCIENCES</div>
          </div>
          <div class="c xa y24 w6 h11">
            <div class="t m0 xd h12 y25 ff4 fs4 fc0 sc0 ls0 ws0">61- B, I<span class="_ _f"></span>ndustrial Area - Bhahawalpur <span class="_ _f"></span>– Pakistan (60000)</div>
          </div>
          <div class="c x1 y26 w7 h13">
            <div class="t m0 xe h14 y27 ff2 fs5 fc0 sc0 ls0 ws0">Commercial Invoice</div>
          </div>
          <div class="c x1 y28 w8 h15">
            <div class="t m0 x2 h3 y25 ff1 fs0 fc0 sc0 ls0 ws0">Amount in words</div>
          </div>
          <div class="c xf y28 w9 h15">
            <div class="t m0 x10 h12 y25 ff1 fs4 fc0 sc0 ls0 ws0">One Hundred and<span class="_ _f"></span> Sixty Eight Thousand One Hundred a<span class="_ _f"></span>nd Ten </div>
          </div>
          <div class="c x11 y29 wa h16">
            <div class="t m0 x12 h3 y2a ff1 fs0 fc0 sc0 ls4 ws0">200219</div>
          </div>
          <div class="c x11 y20 wa he">
            <div class="t m0 x13 h3 y2a ff1 fs0 fc0 sc0 ls0 ws0">Lahore</div>
          </div>
          <div class="c x11 y2b wa h15">
            <div class="t m0 x13 h3 y2a ff1 fs0 fc0 sc0 ls0 ws0">Lahore</div>
          </div>
          <div class="c xa y2b w5 h15">
            <div class="t m0 x14 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">Galla Mandi, SKP</div>
          </div>
          <div class="c xa y29 w5 h16">
            <div class="t m0 x15 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">1/3/2022</div>
          </div>
          <div class="c x3 y2e wb h17">
            <div class="t m0 x2 hb y2f ff2 fs1 fc0 sc0 ls0 ws0">Unit </div>
          </div>
          <div class="c x11 y2e wc h17">
            <div class="t m0 x2 hb y2f ff2 fs1 fc0 sc0 ls0 ws0">Rate </div>
          </div>
          <div class="c x16 y2e wd h17">
            <div class="t m0 x2 hb y2f ff2 fs1 fc0 sc0 ls0 ws0">Amount </div>
          </div>
          <div class="c x1 y30 we h18">
            <div class="t m0 x2 h19 y31 ff2 fs0 fc0 sc0 ls5 ws0"> <span class="fc1 sc0">        </span></div>
            <div class="t m0 x2 h19 y2a ff2 fs0 fc0 sc0 ls0 ws0">Net Total</div>
          </div>
          <div class="c x1 y32 wf h1a">
            <div class="t m0 x2 h7 y33 ff4 fs1 fc0 sc0 ls0 ws0">Party/Receive<span class="_ _f"></span>r’s Acknowledge<span class="_ _f"></span>ment, <span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span></div>
            <div class="t m0 x2 h7 y34 ff1 fs1 fc0 sc0 ls0 ws0">* I acknowle<span class="_ _f"></span>dge the above<span class="_ _f"></span> mentione<span class="_ _f"></span>d quantity </div>
            <div class="t m0 x2 h7 y35 ff1 fs1 fc0 sc0 ls0 ws0">of goods is rece<span class="_ _f"></span>ived fully and fourd in goo<span class="_ _f"></span>d </div>
            <div class="t m0 x2 h7 y36 ff1 fs1 fc0 sc0 ls0 ws0">condition.</div>
          </div>
          <div class="c x17 y32 w10 h1a">
            <div class="t m0 x2 h8 y37 ff1 fs2 fc0 sc0 ls0 ws0">*Goods are <span class="_ _f"></span>dispatched in good condition, </div>
            <div class="t m0 x2 h8 y38 ff1 fs2 fc0 sc0 ls0 ws0">Howeve<span class="_ _f"></span>r any quality claim<span class="_ _10"></span> can be <span class="_ _f"></span>within </div>
            <div class="t m0 x2 h8 y39 ff1 fs2 fc0 sc0 ls0 ws0">seve<span class="_ _f"></span>n days rec<span class="_ _f"></span>eiving the goods. <span class="_ _f"></span> <span class="_ _f"></span> <span class="_ _f"></span> <span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="_ _f"></span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="_ _f"></span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="_ _f"></span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="_ _f"></span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="_ _f"></span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="_ _f"></span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span><span class="fc1 sc0"> </span></div>
          </div>
          <div class="c x18 y32 w11 h1a">
            <div class="t m0 x12 h1b y3a ff2 fs6 fc0 sc0 ls0 ws0">NOTE</div>
          </div>
          <div class="c x1 y2e w12 h17">
            <div class="t m0 x19 hb y2f ff2 fs1 fc0 sc0 ls0 ws0">Sr. No</div>
          </div>
          <div class="c x1 y3b w8 h1c">
            <div class="t m0 x2 h3 y2a ff1 fs0 fc0 sc0 ls0 ws0">Remarks</div>
          </div>
          <div class="c xa y2e w13 h17">
            <div class="t m0 x2 hb y2f ff2 fs1 fc0 sc0 ls0 ws0">Name of Product</div>
          </div>
          <div class="c xf y2e w14 h17">
            <div class="t m0 x2 hb y2f ff2 fs1 fc0 sc0 ls0 ws0">Pack size </div>
          </div>
          <div class="c x18 y2e w11 h17">
            <div class="t m0 x2 hb y2f ff2 fs1 fc0 sc0 ls0 ws0">Batch no. </div>
          </div>
          <div class="c x17 y2e w15 h17">
            <div class="t m0 x2 hb y2f ff2 fs1 fc0 sc0 ls0 ws0">Phase </div>
          </div>
        </div>
        <div class="pi" data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'></div>
      </div>
    </div>
    <div class="loading-indicator"> <img alt="" src="data:image/png;base64,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" /> </div>
  </body>
  
  </html>`;

  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  return (
    <View style={styles.container}>
      <View>
        <Button title="Print" onPress={print} />
        <View />
        <Button title="Print to PDF file" onPress={printToFile} />
        {Platform.OS === "ios" && (
          <>
            <View />
            <Button title="Select printer" onPress={selectPrinter} />
            <View />
            {selectedPrinter ? (
              <Text>{`Selected printer: ${selectedPrinter.name}`}</Text>
            ) : undefined}
          </>
        )}
      </View>

      <View style={styles.footerView}>
        <Text style={styles.footerText}>Parties</Text>
      </View>
      <View style={styles.viewCheck}>
        <Button
          title="Add Parties"
          onPress={() => navigation.navigate("AddParties")}
        />
      </View>
      <View style={styles.viewCheck}>
        <Button
          title="Goto Parties List"
          color="green"
          onPress={() => navigation.navigate("Parties")}
        />
      </View>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>Products</Text>
      </View>
      <View style={styles.viewCheck}>
        <Button
          title="Add Products"
          onPress={() => navigation.navigate("AddProducts")}
        />
      </View>
      <View style={styles.viewCheck}>
        <Button
          title="Goto Products"
          color="green"
          onPress={() => navigation.navigate("Products")}
        />
      </View>

      <View style={styles.footerView}>
        <Text style={styles.footerText}>Orders</Text>
      </View>
      <View style={styles.viewCheck}>
        <Button
          title="Add Orders"
          onPress={() => navigation.navigate("AddOrders")}
        />
      </View>
      <View style={styles.viewCheck}>
        <Button
          title="Goto Orders"
          color="green"
          onPress={() => navigation.navigate("OrdersList")}
        />
      </View>
    </View>
  );
}

const htmlStyles = `
*{
  border: 0;
  box-sizing: content-box;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: top;
}
h1 { font: bold 100% sans-serif; letter-spacing: 0.5em; text-align: center; text-transform: uppercase; }
/* table */
table { font-size: 75%; table-layout: fixed; width: 100%; }
table { border-collapse: separate; border-spacing: 2px; }
th, td { border-width: 1px; padding: 0.5em; position: relative; text-align: left; }
th, td { border-radius: 0.25em; border-style: solid; }
th { background: #EEE; border-color: #BBB; }
td { border-color: #DDD; }
/* page */
html { font: 16px/1 'Open Sans', sans-serif; overflow: auto; }
html { background: #999; cursor: default; }
body { box-sizing: border-box;margin: 0 auto; overflow: hidden; padding: 0.25in; }
body { background: #FFF; border-radius: 1px; box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5); }
/* header */
header { margin: 0 0 3em; }
header:after { clear: both; content: ""; display: table; }
header h1 { background: #000; border-radius: 0.25em; color: #FFF; margin: 0 0 1em; padding: 0.5em 0; }
header address { float: left; font-size: 75%; font-style: normal; line-height: 1.25; margin: 0 1em 1em 0; }
header address p { margin: 0 0 0.25em; }
header span, header img { display: block; float: right; }
header span { margin: 0 0 1em 1em; max-height: 25%; max-width: 60%; position: relative; }
header img { max-height: 100%; max-width: 100%; }
/* article */
article, article address, table.meta, table.inventory { margin: 0 0 3em; }
article:after { clear: both; content: ""; display: table; }
article h1 { clip: rect(0 0 0 0); position: absolute; }
article address { float: left; font-size: 125%; font-weight: bold; }
/* table meta & balance */
table.meta, table.balance { float: right; width: 36%; }
table.meta:after, table.balance:after { clear: both; content: ""; display: table; }
/* table meta */
table.meta th { width: 40%; }
table.meta td { width: 60%; }
/* table items */
table.inventory { clear: both; width: 100%; }
table.inventory th { font-weight: bold; text-align: center; }
table.inventory td:nth-child(1) { width: 26%; }
table.inventory td:nth-child(2) { width: 38%; }
table.inventory td:nth-child(3) { text-align: right; width: 12%; }
table.inventory td:nth-child(4) { text-align: right; width: 12%; }
table.inventory td:nth-child(5) { text-align: right; width: 12%; }
/* table balance */
table.balance th, table.balance td { width: 50%; }
table.balance td { text-align: right; }
/* aside */
aside h1 { border: none; border-width: 0 0 1px; margin: 0 0 1em; }
aside h1 { border-color: #999; border-bottom-style: solid; }
`;
