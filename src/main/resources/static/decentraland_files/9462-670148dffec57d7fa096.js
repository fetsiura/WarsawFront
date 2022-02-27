"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9462],{9462:function(t,e,r){var o=r(2784);function n(){}function a(){}a.resetWarningCache=n;var i,s=(function(t){t.exports=function(){function t(t,e,r,o,n,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}()}(i={exports:{}},i.exports),i.exports);function u(){}function l(t){return!!(t||"").match(/\d/)}function p(t){return null===t||void 0===t}function f(t){return t.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function c(t,e){void 0===e&&(e=!0);var r="-"===t[0],o=r&&e,n=(t=t.replace("-","")).split(".");return{beforeDecimal:n[0],afterDecimal:n[1]||"",hasNagation:r,addNegation:o}}function h(t,e,r){for(var o="",n=r?"0":"",a=0;a<=e-1;a++)o+=t[a]||n;return o}function g(t,e){return Array(e+1).join(t)}function m(t,e){if(t.value=t.value,null!==t){if(t.createTextRange){var r=t.createTextRange();return r.move("character",e),r.select(),!0}return t.selectionStart||0===t.selectionStart?(t.focus(),t.setSelectionRange(e,e),!0):(t.focus(),!1)}}function d(t,e,r){return Math.min(Math.max(t,e),r)}function v(t){return Math.max(t.selectionStart,t.selectionEnd)}var y={thousandSeparator:s.oneOfType([s.string,s.oneOf([!0])]),decimalSeparator:s.string,allowedDecimalSeparators:s.arrayOf(s.string),thousandsGroupStyle:s.oneOf(["thousand","lakh","wan"]),decimalScale:s.number,fixedDecimalScale:s.bool,displayType:s.oneOf(["input","text"]),prefix:s.string,suffix:s.string,format:s.oneOfType([s.string,s.func]),removeFormatting:s.func,mask:s.oneOfType([s.string,s.arrayOf(s.string)]),value:s.oneOfType([s.number,s.string]),defaultValue:s.oneOfType([s.number,s.string]),isNumericString:s.bool,customInput:s.elementType,allowNegative:s.bool,allowEmptyFormatting:s.bool,allowLeadingZeros:s.bool,onValueChange:s.func,onKeyDown:s.func,onMouseUp:s.func,onChange:s.func,onFocus:s.func,onBlur:s.func,type:s.oneOf(["text","tel","password"]),isAllowed:s.func,renderText:s.func,getInputRef:s.oneOfType([s.func,s.shape({current:s.any})])},S={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:u,onChange:u,onKeyDown:u,onMouseUp:u,onFocus:u,onBlur:u,isAllowed:function(){return!0}},b=function(t){function e(e){t.call(this,e);var r=e.defaultValue;this.validateProps();var o=this.formatValueProp(r);this.state={value:o,numAsString:this.removeFormatting(o),mounted:!1},this.selectionBeforeInput={selectionStart:0,selectionEnd:0},this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.componentDidMount=function(){this.setState({mounted:!0})},e.prototype.componentDidUpdate=function(t){this.updateValueIfRequired(t)},e.prototype.componentWillUnmount=function(){clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout)},e.prototype.updateValueIfRequired=function(t){var e=this,r=e.props,o=e.state,n=e.focusedElm,a=o.value,i=o.numAsString;if(void 0===i&&(i=""),t!==r){this.validateProps();var s=this.formatNumString(i),u=p(r.value)?s:this.formatValueProp(),l=this.removeFormatting(u),f=parseFloat(l),c=parseFloat(i);(isNaN(f)&&isNaN(c)||f===c)&&s===a&&(null!==n||u===a)||this.updateValue({formattedValue:u,numAsString:l,input:n})}},e.prototype.getFloatString=function(t){void 0===t&&(t="");var e=this.props.decimalScale,r=this.getSeparators().decimalSeparator,o=this.getNumberRegex(!0),n="-"===t[0];n&&(t=t.replace("-","")),r&&0===e&&(t=t.split(r)[0]);var a=(t=(t.match(o)||[]).join("").replace(r,".")).indexOf(".");return-1!==a&&(t=t.substring(0,a)+"."+t.substring(a+1,t.length).replace(new RegExp(f(r),"g"),"")),n&&(t="-"+t),t},e.prototype.getNumberRegex=function(t,e){var r=this.props,o=r.format,n=r.decimalScale,a=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!a||0===n||e||o?"":"|"+f(a)),t?"g":void 0)},e.prototype.getSeparators=function(){var t=this.props.decimalSeparator,e=this.props,r=e.thousandSeparator,o=e.allowedDecimalSeparators;return!0===r&&(r=","),o||(o=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:o}},e.prototype.getMaskAtIndex=function(t){var e=this.props.mask;return void 0===e&&(e=" "),"string"===typeof e?e:e[t]||" "},e.prototype.getValueObject=function(t,e){var r=parseFloat(e);return{formattedValue:t,value:e,floatValue:isNaN(r)?void 0:r}},e.prototype.validateProps=function(){var t=this.props.mask,e=this.getSeparators(),r=e.decimalSeparator,o=e.thousandSeparator;if(r===o)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: "+o+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: '+r+" (default value for decimalSeparator is .)\n       ");if(t&&("string"===t?t:t.toString()).match(/\d/g))throw new Error("\n          Mask "+t+" should not contain numeric character;\n        ")},e.prototype.setPatchedCaretPosition=function(t,e,r){m(t,e),this.caretPositionTimeout=setTimeout((function(){t.value===r&&m(t,e)}),0)},e.prototype.correctCaretPosition=function(t,e,r){var o=this.props,n=o.prefix,a=o.suffix,i=o.format;if(""===t)return 0;if(e=d(e,0,t.length),!i){var s="-"===t[0];return d(e,n.length+(s?1:0),t.length-a.length)}if("function"===typeof i)return e;if("#"===i[e]&&l(t[e]))return e;if("#"===i[e-1]&&l(t[e-1]))return e;var u=i.indexOf("#");e=d(e,u,i.lastIndexOf("#")+1);for(var p=i.substring(e,i.length).indexOf("#"),f=e,c=e+(-1===p?0:p);f>u&&("#"!==i[f]||!l(t[f]));)f-=1;return!l(t[c])||"left"===r&&e!==u||e-f<c-e?l(t[f])?f+1:f:c},e.prototype.getCaretPosition=function(t,e,r){var o,n,a=this.props.format,i=this.state.value,s=this.getNumberRegex(!0),u=(t.match(s)||[]).join(""),l=(e.match(s)||[]).join("");for(o=0,n=0;n<r;n++){var p=t[n]||"",f=e[o]||"";if((p.match(s)||p===f)&&("0"!==p||!f.match(s)||"0"===f||u.length===l.length)){for(;p!==e[o]&&o<e.length;)o++;o++}}return"string"!==typeof a||i||(o=e.length),o=this.correctCaretPosition(e,o)},e.prototype.removePrefixAndSuffix=function(t){var e=this.props,r=e.format,o=e.prefix,n=e.suffix;if(!r&&t){var a="-"===t[0];a&&(t=t.substring(1,t.length));var i=(t=o&&0===t.indexOf(o)?t.substring(o.length,t.length):t).lastIndexOf(n);t=n&&-1!==i&&i===t.length-n.length?t.substring(0,i):t,a&&(t="-"+t)}return t},e.prototype.removePatternFormatting=function(t){for(var e=this.props.format.split("#").filter((function(t){return""!==t})),r=0,o="",n=0,a=e.length;n<=a;n++){var i=e[n]||"",s=n===a?t.length:t.indexOf(i,r);if(-1===s){o=t;break}o+=t.substring(r,s),r=s+i.length}return(o.match(/\d/g)||[]).join("")},e.prototype.removeFormatting=function(t){var e=this.props,r=e.format,o=e.removeFormatting;return t?(r?t="string"===typeof r?this.removePatternFormatting(t):"function"===typeof o?o(t):(t.match(/\d/g)||[]).join(""):(t=this.removePrefixAndSuffix(t),t=this.getFloatString(t)),t):t},e.prototype.formatWithPattern=function(t){for(var e=this.props.format,r=0,o=e.split(""),n=0,a=e.length;n<a;n++)"#"===e[n]&&(o[n]=t[r]||this.getMaskAtIndex(r),r+=1);return o.join("")},e.prototype.formatAsNumber=function(t){var e=this.props,r=e.decimalScale,o=e.fixedDecimalScale,n=e.prefix,a=e.suffix,i=e.allowNegative,s=e.thousandsGroupStyle,u=this.getSeparators(),l=u.thousandSeparator,p=u.decimalSeparator,f=-1!==t.indexOf(".")||r&&o,g=c(t,i),m=g.beforeDecimal,d=g.afterDecimal,v=g.addNegation;return void 0!==r&&(d=h(d,r,o)),l&&(m=function(t,e,r){var o=function(t){switch(t){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),n=t.search(/[1-9]/);return n=-1===n?t.length:n,t.substring(0,n)+t.substring(n,t.length).replace(o,"$1"+e)}(m,l,s)),n&&(m=n+m),a&&(d+=a),v&&(m="-"+m),t=m+(f&&p||"")+d},e.prototype.formatNumString=function(t){void 0===t&&(t="");var e=this.props,r=e.format,o=e.allowEmptyFormatting,n=t;return n=""!==t||o?"-"!==t||r?"string"===typeof r?this.formatWithPattern(n):"function"===typeof r?r(n):this.formatAsNumber(n):"-":""},e.prototype.formatValueProp=function(t){var e=this.props,r=e.format,o=e.decimalScale,n=e.fixedDecimalScale,a=e.allowEmptyFormatting,i=this.props,s=i.value,u=i.isNumericString,l=!(s=p(s)?t:s)&&0!==s;return l&&a&&(s=""),l&&!a?"":("number"===typeof s&&(s=function(t){var e="-"===(t+="")[0]?"-":"";e&&(t=t.substring(1));var r=t.split(/[eE]/g),o=r[0],n=r[1];if(!(n=Number(n)))return e+o;var a=1+n,i=(o=o.replace(".","")).length;return a<0?o="0."+g("0",Math.abs(a))+o:a>=i?o+=g("0",a-i):o=(o.substring(0,a)||"0")+"."+o.substring(a),e+o}(s),u=!0),"Infinity"===s&&u&&(s=""),u&&!r&&"number"===typeof o&&(s=function(t,e,r){if(-1!==["","-"].indexOf(t))return t;var o=-1!==t.indexOf(".")&&e,n=c(t),a=n.beforeDecimal,i=n.afterDecimal,s=n.hasNagation,u=parseFloat("0."+(i||"0")),l=(i.length<=e?"0."+i:u.toFixed(e)).split(".");return(s?"-":"")+a.split("").reverse().reduce((function(t,e,r){return t.length>r?(Number(t[0])+Number(e)).toString()+t.substring(1,t.length):e+t}),l[0])+(o?".":"")+h(l[1]||"",Math.min(e,i.length),r)}(s,o,n)),u?this.formatNumString(s):this.formatInput(s))},e.prototype.formatNegation=function(t){void 0===t&&(t="");var e=this.props.allowNegative,r=new RegExp("(-)"),o=new RegExp("(-)(.)*(-)"),n=r.test(t),a=o.test(t);return t=t.replace(/-/g,""),n&&!a&&e&&(t="-"+t),t},e.prototype.formatInput=function(t){return void 0===t&&(t=""),this.props.format||(t=this.removePrefixAndSuffix(t),t=this.formatNegation(t)),t=this.removeFormatting(t),this.formatNumString(t)},e.prototype.isCharacterAFormat=function(t,e){var r=this.props,o=r.format,n=r.prefix,a=r.suffix,i=r.decimalScale,s=r.fixedDecimalScale,u=this.getSeparators().decimalSeparator;return"string"===typeof o&&"#"!==o[t]||!(o||!(t<n.length||t>=e.length-a.length||i&&s&&e[t]===u))},e.prototype.correctInputValue=function(t,e,r){var o=this,n=this.props,a=n.format,i=n.allowNegative,s=n.prefix,u=n.suffix,l=n.decimalScale,p=this.getSeparators(),f=p.allowedDecimalSeparators,h=p.decimalSeparator,g=this.state.numAsString||"",m=this.selectionBeforeInput,d=m.selectionStart,v=m.selectionEnd,y=function(t,e){for(var r=0,o=0,n=t.length,a=e.length;t[r]===e[r]&&r<n;)r++;for(;t[n-1-o]===e[a-1-o]&&a-o>r&&n-o>r;)o++;return{start:r,end:n-o}}(e,r),S=y.start,b=y.end;if(!a&&S===b&&-1!==f.indexOf(r[d])){var x=0===l?"":h;return r.substr(0,d)+x+r.substr(d+1,r.length)}var w=a?0:s.length,P=e.length-(a?0:u.length);if(r.length>e.length||!r.length||S===b||0===d&&v===e.length||0===S&&b===e.length||d===w&&v===P)return r;var O=e.substr(S,b-S);if(!![].concat(O).find((function(t,r){return o.isCharacterAFormat(r+S,e)}))){var N=e.substr(S),T={},C=[];[].concat(N).forEach((function(t,r){o.isCharacterAFormat(r+S,e)?T[r]=t:r>O.length-1&&C.push(t)})),Object.keys(T).forEach((function(t){C.length>t?C.splice(t,0,T[t]):C.push(T[t])})),r=e.substr(0,S)+C.join("")}if(!a){var F=this.removeFormatting(r),E=c(F,i),D=E.beforeDecimal,V=E.afterDecimal,A=E.addNegation,I=t<r.indexOf(h)+1;if(F.length<g.length&&I&&""===D&&!parseFloat(V))return A?"-":""}return r},e.prototype.updateValue=function(t){var e=t.formattedValue,r=t.input,o=t.setCaretPosition;void 0===o&&(o=!0);var n=t.numAsString,a=t.caretPos,i=this.props.onValueChange,s=this.state.value;if(r)if(o){if(!a){var u=t.inputValue||r.value,l=v(r);r.value=e,a=this.getCaretPosition(u,e,l)}this.setPatchedCaretPosition(r,a,e)}else r.value=e;void 0===n&&(n=this.removeFormatting(e)),e!==s&&(this.setState({value:e,numAsString:n}),i(this.getValueObject(e,n)))},e.prototype.onChange=function(t){var e=t.target,r=e.value,o=this.state,n=this.props,a=n.isAllowed,i=o.value||"",s=v(e);r=this.correctInputValue(s,i,r);var u=this.formatInput(r)||"",l=this.removeFormatting(u),p=a(this.getValueObject(u,l));p||(u=i),this.updateValue({formattedValue:u,numAsString:l,inputValue:r,input:e}),p&&n.onChange(t)},e.prototype.onBlur=function(t){var e=this.props,r=this.state,o=e.format,n=e.onBlur,a=e.allowLeadingZeros,i=r.numAsString,s=r.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout),!o){isNaN(parseFloat(i))&&(i=""),a||(i=function(t){if(!t)return t;var e="-"===t[0];e&&(t=t.substring(1,t.length));var r=t.split("."),o=r[0].replace(/^0+/,"")||"0",n=r[1]||"";return(e?"-":"")+o+(n?"."+n:"")}(i));var u=this.formatNumString(i);if(u!==s)return this.updateValue({formattedValue:u,numAsString:i,input:t.target,setCaretPosition:!1}),void n(t)}n(t)},e.prototype.onKeyDown=function(t){var e,r=t.target,o=t.key,n=r.selectionStart,a=r.selectionEnd,i=r.value;void 0===i&&(i="");var s=this.props,u=s.decimalScale,l=s.fixedDecimalScale,p=s.prefix,f=s.suffix,c=s.format,h=s.onKeyDown,g=void 0!==u&&l,m=this.getNumberRegex(!1,g),d=new RegExp("-"),v="string"===typeof c;if(this.selectionBeforeInput={selectionStart:n,selectionEnd:a},"ArrowLeft"===o||"Backspace"===o?e=n-1:"ArrowRight"===o?e=n+1:"Delete"===o&&(e=n),void 0!==e&&n===a){var y=e,S=v?c.indexOf("#"):p.length,b=v?c.lastIndexOf("#")+1:i.length-f.length;if("ArrowLeft"===o||"ArrowRight"===o){var x="ArrowLeft"===o?"left":"right";y=this.correctCaretPosition(i,e,x)}else if("Delete"!==o||m.test(i[e])||d.test(i[e])){if("Backspace"===o&&!m.test(i[e]))if(n<=S+1&&"-"===i[0]&&"undefined"===typeof c){var w=i.substring(1);this.updateValue({formattedValue:w,caretPos:y,input:r})}else if(!d.test(i[e])){for(;!m.test(i[y-1])&&y>S;)y--;y=this.correctCaretPosition(i,y,"left")}}else for(;!m.test(i[y])&&y<b;)y++;(y!==e||e<S||e>b)&&(t.preventDefault(),this.setPatchedCaretPosition(r,y,i)),t.isUnitTestRun&&this.setPatchedCaretPosition(r,y,i),h(t)}else h(t)},e.prototype.onMouseUp=function(t){var e=t.target,r=e.selectionStart,o=e.selectionEnd,n=e.value;if(void 0===n&&(n=""),r===o){var a=this.correctCaretPosition(n,r);a!==r&&this.setPatchedCaretPosition(e,a,n)}this.props.onMouseUp(t)},e.prototype.onFocus=function(t){var e=this;t.persist(),this.focusedElm=t.target,this.focusTimeout=setTimeout((function(){var r=t.target,o=r.selectionStart,n=r.selectionEnd,a=r.value;void 0===a&&(a="");var i=e.correctCaretPosition(a,o);i===o||0===o&&n===a.length||e.setPatchedCaretPosition(r,i,a),e.props.onFocus(t)}),0)},e.prototype.render=function(){var t=this.props,e=t.type,r=t.displayType,n=t.customInput,a=t.renderText,i=t.getInputRef,s=t.format,u=this.state,l=u.value,p=u.mounted,f=function(t,e){var r={};return Object.keys(t).forEach((function(o){e[o]||(r[o]=t[o])})),r}(this.props,y),c=p&&function(t){return t||!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}(s)?"numeric":void 0,h=Object.assign({inputMode:c},f,{type:e,value:l,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===r)return a?a(l,f)||null:o.createElement("span",Object.assign({},f,{ref:i}),l);if(n){var g=n;return o.createElement(g,Object.assign({},h,{ref:i}))}return o.createElement("input",Object.assign({},h,{ref:i}))},e}(o.Component);b.propTypes=y,b.defaultProps=S,e.Z=b}}]);
//# sourceMappingURL=9462-670148dffec57d7fa096.js.map