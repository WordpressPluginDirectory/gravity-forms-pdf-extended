"use strict";(self.webpackChunkgravity_pdf=self.webpackChunkgravity_pdf||[]).push([[291],{7291:(t,e,r)=>{r.r(e),r.d(e,{default:()=>C});var o=r(7294),n=r(5697),s=r.n(n),a=r(3727),i=r(6550),l=(r(752),r(6265),r(4043),r(7267),r(6544),r(1057),r(6706));r(3374);const c=()=>o.createElement("div",{className:"gfpdf-core-font-spacer"},"---");function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
/**
 * @package     Gravity PDF
 * @copyright   Copyright (c) 2023, Blue Liquid Designs
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       5.0
 */(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class p extends o.Component{render(){var t=this.props.console,e=Object.keys(t).reverse(),r=this.props.retry.length>0;return e.length?o.createElement("ul",{className:"gfpdf-core-font-list-results-container","aria-label":GFPDF.coreFontAriaLabel},e.map((e=>o.createElement("li",{key:e,className:"gfpdf-core-font-status-"+t[e].status},t[e].message," ","completed"===e&&r&&o.createElement(d,{history:this.props.history,retryText:this.props.retryText}),"completed"===e&&o.createElement(c,null))))):null}}u(p,"propTypes",{console:s().object,retry:s().array,history:s().object,retryText:s().string});class d extends o.Component{constructor(){super(...arguments),u(this,"handleTriggerRetryFontDownload",(t=>{t.preventDefault(),this.props.history.replace("retryDownloadCoreFonts")}))}render(){return o.createElement("a",{href:"#",onClick:this.handleTriggerRetryFontDownload,"aria-live":"polite",role:"dialog"},this.props.retryText)}}u(d,"propTypes",{history:s().object,retryText:s().string});
/**
 * @package     Gravity PDF
 * @copyright   Copyright (c) 2023, Blue Liquid Designs
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       5.0
 */
var h=t=>{var{queue:e,text:r}=t;return o.createElement("span",{className:"gfpdf-core-font-counter"},r," ",e)};h.propTypes={queue:s().number,text:s().string};const m=h;var y=r(1581),F=r(7046);function b(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
/**
 * @package     Gravity PDF
 * @copyright   Copyright (c) 2023, Blue Liquid Designs
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       5.0
 */(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class g extends o.Component{constructor(){var t;super(...arguments),t=this,b(this,"state",{ajax:!1}),b(this,"maybeStartDownload",(function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;"/downloadCoreFonts"===e&&t.startDownloadFonts(r,o),"/retryDownloadCoreFonts"===e&&(t.setState({ajax:!0}),t.startDownloadFonts(r,o))})),b(this,"startDownloadFonts",((t,e)=>{if(0===t.length)return this.props.clearButtonClickedAndRetryList(),this.handleGithubApiError(e);this.props.clearConsole(),this.props.clearButtonClickedAndRetryList(),this.props.history.replace(""),setTimeout((()=>t.map((t=>this.props.downloadFontsApiCall(t)))),300)})),b(this,"handleGithubApiError",(t=>{this.setState({ajax:!1}),this.props.addToConsole("completed","error",t),this.props.history.replace("")})),b(this,"handleTriggerFontDownload",(()=>{!1===this.state.ajax&&this.setState({ajax:!0},(()=>{this.props.getFilesFromGitHub()}))})),b(this,"resetState",(()=>{var{clearRequestRemainingData:t,history:e}=this.props;this.setState({ajax:!1}),t(),e.replace("")}))}componentDidUpdate(){var{fontList:t,buttonClicked:e,location:r,retry:o,getFilesFromGitHubFailed:n,requestDownload:s}=this.props;t.length>0&&e&&this.startDownloadFonts(t),"/downloadCoreFonts"===r.pathname&&this.handleTriggerFontDownload(),"/retryDownloadCoreFonts"===r.pathname&&this.maybeStartDownload(r.pathname,o),""!==n&&e&&this.startDownloadFonts(t,n),"finished"===s&&this.resetState()}componentDidMount(){"/downloadCoreFonts"===this.props.location.pathname&&this.handleTriggerFontDownload()}render(){var{ajax:t}=this.state,{fontList:e,buttonClassName:r,buttonText:n,counterText:s,queue:a,history:i,console:l,retry:c,retryText:u}=this.props,d=a<e.length&&0!==a||t;return o.createElement("div",null,o.createElement("button",{className:r,type:"button",onClick:this.handleTriggerFontDownload,disabled:d},n),t&&o.createElement(y.Z,null),t&&0!==a&&o.createElement(m,{text:s,queue:a}),o.createElement(p,{history:i,console:l,retry:c,retryText:u}))}}b(g,"propTypes",{location:s().object,requestDownload:s().string,clearRequestRemainingData:s().func,getFilesFromGitHub:s().func,buttonClicked:s().bool,fontList:s().array,getFilesFromGitHubFailed:s().string,retry:s().array,clearConsole:s().func,history:s().object,clearButtonClickedAndRetryList:s().func,downloadFontsApiCall:s().func,addToConsole:s().func,console:s().object,buttonClassName:s().string,buttonText:s().string,counterText:s().string,retryText:s().string,queue:s().number});const f=(0,l.$j)((t=>({buttonClicked:t.coreFonts.buttonClicked,fontList:t.coreFonts.fontList,getFilesFromGitHubFailed:t.coreFonts.getFilesFromGitHubFailed,console:t.coreFonts.console,retry:t.coreFonts.retry,requestDownload:t.coreFonts.requestDownload,queue:t.coreFonts.downloadCounter})),{addToConsole:F.hA,clearButtonClickedAndRetryList:F.cL,getFilesFromGitHub:F.Zh,downloadFontsApiCall:F.gX,clearRequestRemainingData:F.io,clearConsole:F.En})(g);
/**
 * @package     Gravity PDF
 * @copyright   Copyright (c) 2023, Blue Liquid Designs
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       5.0
 */
var v=t=>{var{button:e}=t;return o.createElement(a.UT,null,o.createElement(i.rs,null,o.createElement(i.AW,{render:t=>o.createElement(w,{history:t.history,button:e})}),o.createElement(i.AW,{path:"/downloadCoreFonts",exact:!0,render:t=>o.createElement(w,{history:t.history,button:e})}),o.createElement(i.AW,{path:"/retryDownloadCoreFonts",exact:!0,render:t=>o.createElement(w,{history:t.history,button:e})})))};v.propTypes={history:s().object,button:s().object};var w=t=>{var{history:e,button:r}=t;return o.createElement(f,{history:e,location:e.location,buttonClassName:r.className,buttonText:r.innerText,success:GFPDF.coreFontSuccess,error:GFPDF.coreFontError,itemPending:GFPDF.coreFontItemPendingMessage,itemSuccess:GFPDF.coreFontItemSuccessMessage,itemError:GFPDF.coreFontItemErrorMessage,counterText:GFPDF.coreFontCounter,retryText:GFPDF.coreFontRetry})};w.propTypes={history:s().object,button:s().object};const C=v},3374:(t,e,r)=>{var o=r(9989),n=r(8844),s=r(2297),a=n([].reverse),i=[1,2];o({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),a(this)}})}}]);