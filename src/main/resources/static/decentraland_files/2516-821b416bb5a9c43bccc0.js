(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2516],{55884:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r={fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0},i=(0,n(60739).By)(r);t.Z=i},38926:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=n(2784)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultWrapperStyle=t.defaultProps=t.defaultMenuStyle=void 0;var r={alignItems:"center",display:"flex",userSelect:"none"};t.defaultMenuStyle=r;var i={overflow:"hidden",userSelect:"none"};t.defaultWrapperStyle=i;var a={alignCenter:!0,alignOnResize:!0,arrowClass:"scroll-menu-arrow",arrowDisabledClass:"scroll-menu-arrow--disabled",arrowLeft:null,arrowRight:null,clickWhenDrag:!1,data:[],dragging:!0,hideArrows:!1,hideSingleArrow:!1,inertiaScrolling:!1,inertiaScrollingSlowdown:.25,innerWrapperClass:"menu-wrapper--inner",innerWrapperStyle:{textAlign:"left"},itemClass:"menu-item-wrapper",itemClassActive:"active",itemStyle:{display:"inline-block"},menuClass:"horizontal-menu",menuStyle:r,onFirstItemVisible:function(){return!1},onLastItemVisible:function(){return!1},onSelect:function(){return!1},onUpdate:function(){return!1},scrollBy:0,scrollToSelected:!1,selected:"",transition:.4,translate:0,useButtonRole:!0,wrapperClass:"menu-wrapper",wrapperStyle:i,wheel:!0,xPoint:0,disableTabindex:!1,rtl:!1};t.defaultProps=a},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(3));t.default=i.default},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollMenu=void 0;var l=o(n(0)),u=n(1),d=n(4),f=n(5),c=function(e){function t(t){var n=e.call(this,t)||this;return n.ref={},n.menuWrapper=null,n.menuInner=null,n.mounted=!1,n.needUpdate=!1,n.allItemsWidth=0,n.menuPos=0,n.menuWidth=0,n.wWidth=0,n.firstPageOffset=0,n.lastPageOffset=0,n.lastTranslateUpdate=0,n.menuItems=[],n.onLoadTimer=0,n.rafTimer=0,n.resizeTimer=0,n.frameId=0,n.data=null,n.dragHistory=[],n.state={dragging:!1,firstItemVisible:!0,lastItemVisible:!1,leftArrowVisible:!1,rightArrowVisible:!0,startDragTranslate:0,translate:n.props.translate,xDraggedDistance:0,xPoint:0},n.setRef=function(e){var t=Object.entries(e)[0],r=t[0],i=t[1];i.elem&&(n.ref[r]=i)},n.setMenuInnerRef=function(e){n.menuInner=e},n.setWrapperRef=function(e){n.menuWrapper=e},n.checkFirstLastItemVisibility=function(e){var t=e.translate,r=void 0===t?n.state.translate:t,i=n.menuItems,a=!0,s=!1;if(i){var o=n.getVisibleItems({offset:r});a=o.includes(i[0]),s=o.includes(i.slice(-1)[0])}return{firstItemVisible:a,lastItemVisible:s}},n.setFirstLastItemVisibility=function(){var e=n.state,t=e.firstItemVisible,r=e.lastItemVisible,i=n.checkFirstLastItemVisibility({}),a=i.firstItemVisible,s=i.lastItemVisible;if(t!==a||r!==s){var o=!a,l=!s;n.setState({firstItemVisible:a,lastItemVisible:s,leftArrowVisible:o,rightArrowVisible:l})}},n.onLoad=function(){n.setInitial(),n.mounted=!0},n.resizeHandler=function(){if(!n.props.alignOnResize)return!1;clearTimeout(n.resizeTimer),n.resizeTimer=setTimeout((function(){return n.resize()}),250)},n.resize=function(){var e=n.props.alignCenter;n.updateWidth({});var t=n.getVisibleItems({}),r=n.getOffsetToItemByIndex({index:t[0]&&t[0][1].index||0}),i=e?n.getCenterOffset({items:t}):0;n.setState({translate:-r+i}),n.setFirstLastItemVisibility()},n.setInitial=function(){var e=n.props,t=e.selected,r=e.data,a=e.translate,s=e.scrollToSelected,o=e.alignCenter,l=e.hideSingleArrow,f=n.state.translate;if(!r||!r.length)return!1;n.menuItems.length&&r===n.data||(n.menuItems=n.getMenuItems(),n.data=r),n.updateWidth({});var c=i({},n.state);(!n.mounted&&a===u.defaultProps.translate||!d.translateIsValid(a)&&!d.translateIsValid(f))&&(c.translate=o?n.firstPageOffset:u.defaultProps.translate);var m=n.checkFirstLastItemVisibility({translate:a}),p=m.firstItemVisible,g=m.lastItemVisible;c.firstItemVisible=p,c.lastItemVisible=g,c.leftArrowVisible=!l||!p,c.rightArrowVisible=!l||!g,s&&n.isScrollNeeded({itemId:t,translate:c.translate})&&(c.translate=n.getOffsetToItemByKey(t)),n.setState(i({},c))},n.isScrollNeeded=function(e){var t=e.itemId,r=e.translate,i=void 0===r?n.state.translate:r,a=n.getItemByKey(t);return!n.getVisibleItems({offset:i}).includes(a)},n.scrollTo=function(e){var t=n.state.translate,r=n.getOffsetToItemByKey(e);if(n.selected=e,t===r)return!1;n.setState({translate:r})},n.getMenuItems=function(){return Object.entries(n.ref).slice(0,n.props.data.length||0)},n.getItemsWidth=function(e){var t=e.items;return(void 0===t?n.menuItems:t).map((function(e){return e[1].elem})).filter(Boolean).reduce((function(e,t){return e+d.getClientRect(t).width}),0)},n.getWidth=function(e){var t=e.items,r=window&&window.innerWidth,i=d.getClientRect(n.menuWrapper);return{wWidth:r,menuPos:i.x,menuWidth:i.width,allItemsWidth:n.getItemsWidth({items:t})}},n.updateWidth=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=n.getWidth({items:r}),a=i.wWidth,s=i.menuPos,o=i.menuWidth,l=i.allItemsWidth,u=n.getPagesOffsets({allItemsWidth:l,items:r,menuWidth:o}),d=u.firstPageOffset,f=u.lastPageOffset;n.menuPos=s,n.wWidth=a,n.allItemsWidth=l,n.menuWidth=o,n.firstPageOffset=d,n.lastPageOffset=f},n.getFirstPageOffset=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=e.offset,a=void 0===i?n.state.translate:i,s=e.menuWidth,o=void 0===s?n.menuWidth:s,l=n.getVisibleItems({items:r,menuWidth:o,offset:a});return n.getCenterOffset({items:l,menuWidth:o})},n.getLastPageOffset=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=e.allItemsWidth,a=void 0===i?n.allItemsWidth:i,s=e.menuWidth,o=void 0===s?n.menuWidth:s,l=n.props.rtl,u=n.getVisibleItems({items:r,menuWidth:o,offset:l?a-o:-a+o});return n.getCenterOffset({items:u,menuWidth:o})},n.getPagesOffsets=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=e.allItemsWidth,a=void 0===i?n.allItemsWidth:i,s=e.menuWidth,o=void 0===s?n.menuWidth:s,l=e.offset,u=void 0===l?n.state.translate:l;return{firstPageOffset:n.getFirstPageOffset({items:r,menuWidth:o,offset:u}),lastPageOffset:n.getLastPageOffset({allItemsWidth:a,items:r,menuWidth:o})}},n.onItemClick=function(e){var t=n.props,r=t.clickWhenDrag,i=t.onSelect;if(n.state.xDraggedDistance>5&&!r)return!1;n.selected=e,i&&i(e)},n.getVisibleItems=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=e.menuWidth,a=void 0===i?n.menuWidth:i,s=e.offset,o=void 0===s?n.state.translate:s,l=e.translate,f=void 0===l?n.state.translate||u.defaultProps.translate:l;return r.filter((function(e){var t=d.getClientRect(e[1].elem).width,i=n.getItemInd(r,e),s=n.getOffsetToItemByIndex({index:i,menuItems:r,translate:f});return n.elemVisible({elWidth:t,menuWidth:a,offset:o,x:s})}))},n.elemVisible=function(e){var t=e.x,r=e.offset,i=void 0===r?0:r,a=e.elWidth,s=e.menuWidth,o=void 0===s?n.menuWidth:s,l=n.props.rtl,u=l?-(o+1):-1,d=l?1:o+1,f=l?-(t+i):t+i,c=l?f-a:f+a;return l?c>=u&&f<=d:f>=u&&c<=d},n.getItemInd=function(e,t){return void 0===e&&(e=n.menuItems),e&&t?e.findIndex((function(e){return e[0]===t[0]})):0},n.getNextItemInd=function(e,t){var r=n.menuItems;if(e){if(!t.length)return 0}else if(!t.length)return r.length;var i=e?n.getItemInd(r,t[0])-1:n.getItemInd(r,t.slice(-1)[0])+1;return i<0?0:i},n.getOffsetToItemByKey=function(e){var t=n.state.translate,r=n.getItemIndexByKey(e);if(-1===r)return t;var i=n.props,a=i.alignCenter,s=i.rtl;t=n.getOffsetToItemByIndex({index:r});var o=n.getVisibleItems({offset:-t}),l=a?n.getCenterOffset({items:o}):u.defaultProps.translate;return t=-(t-(s?-l:l)),n.itBeforeStart(t)?t=n.getOffsetAtStart():n.itAfterEnd(t)&&(t=n.getOffsetAtEnd()),t},n.getItemByKey=function(e){return n.menuItems.find((function(t){return t[1].key===e}))||["",{key:"n",elem:null,index:-1}]},n.getItemIndexByKey=function(e){return e?n.menuItems.findIndex((function(t){return t[1].key===e})):-1},n.getOffsetToItemByIndex=function(e){var t=e.index,r=e.menuItems,i=void 0===r?n.menuItems:r,a=e.translate,s=void 0===a?n.state.translate:a;if(!i.length)return 0;var o=t>=i.length?i.length-1:t,l=d.getClientRect(i[o][1].elem),u=l.x,f=l.x2;return n.props.rtl?n.menuPos+n.menuWidth-s-f:+u-s-n.menuPos},n.getScrollRightOffset=function(e,t){void 0===t&&(t=n.menuItems);var r=n.props,i=r.scrollBy,a=r.rtl,s=i?e[0][1].index+i:a?n.getPrevItem((e[0]&&e[0][1]||t[0][1]).key)[1].index:n.getNextItem((e.slice(-1)[0]&&e.slice(-1)||t.slice(-1))[0][1].key)[1].index,o=-n.getOffsetToItemByIndex({index:s,menuItems:t});return a?-o:o},n.getScrollLeftOffset=function(e,t){void 0===t&&(t=n.menuItems);var r=n.props,i=r.scrollBy,a=(r.rtl?n.getNextItem((e.slice(-1)[0]&&e.slice(-1)||t.slice(-1))[0][1].key):n.getPrevItem((e[0]&&e[0][1]||t[0][1]).key))[1].index-(i?i-1:e.length);return-n.getOffsetToItemByIndex({index:a<0?0:a,menuItems:t})},n.getNextItem=function(e){var t=n.menuItems;return t[t.findIndex((function(t){return t[1].key===e}))+1]||t.slice(-1)[0]},n.getPrevItem=function(e){var t=n.menuItems;return t[t.findIndex((function(t){return t[1].key===e}))-1]||t[0]},n.getOffset=function(e,t){void 0===t&&(t=n.menuItems),e=n.props.rtl?!e:e;var r=n.getVisibleItems({items:t});return e?n.getScrollLeftOffset(r,t):n.getScrollRightOffset(r,t)},n.getCenterOffset=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=e.menuWidth,a=void 0===i?n.menuWidth:i;return r.length?(a-n.getItemsWidth({items:r}))/2:0},n.handleWheel=function(e){if(!n.props.wheel)return!1;e.deltaY<0?n.handleArrowClick():n.handleArrowClick(!1)},n.getOffsetAtStart=function(){var e=n.firstPageOffset;return n.props.alignCenter?e:u.defaultProps.translate},n.getOffsetAtEnd=function(){var e=n.props.alignCenter,t=n,r=t.allItemsWidth,i=t.menuWidth,a=t.lastPageOffset,s=r-i;return e?-s-a:-s},n.handleArrowClickRight=function(){n.handleArrowClick(!1)},n.handleArrowClick=function(e){void 0===e&&(e=!0);var t=n.props,r=t.alignCenter,i=t.rtl,a=n,s=a.allItemsWidth,o=a.menuWidth;if(!r&&!e&&s<o)return!1;var l=0,d=n.getVisibleItems({}),f=d[0]&&0===d[0][1].index,c=d.slice(-1)[0]&&d.slice(-1)[0][1].index===n.menuItems.length-1,m=n.getOffset(e);if(e&&(f||n.itBeforeStart(m)))l=n.getOffsetAtStart();else if(e||!c&&!n.itAfterEnd(m)){var p=r?n.getCenterOffset({items:n.getVisibleItems({offset:m})}):0;l=m+(i?e?p+n.menuWidth:-p-n.menuWidth:p)}else l=n.getOffsetAtEnd();n.setState({startDragTranslate:0,translate:l,xDraggedDistance:0,xPoint:u.defaultProps.xPoint})},n.itBeforeStart=function(e){var t=n.props.alignCenter,r=n,i=r.menuWidth,a=r.allItemsWidth,s=r.firstPageOffset;return a<i||(t?e>s:e>u.defaultProps.translate)},n.itAfterEnd=function(e){var t=n.props.alignCenter,r=n,i=r.menuWidth,a=r.allItemsWidth,s=r.lastPageOffset;return a<i||(t?e<u.defaultProps.translate&&Math.abs(e)>a-i+s:e<u.defaultProps.translate&&Math.abs(e)>a-i)},n.getPoint=function(e){return"touches"in e?e.touches[0].clientX:"clientX"in e?e.clientX:0},n.handleDragStart=function(e){if(e&&"buttons"in e&&2===e.buttons)return!1;if(!n.props.dragging)return!1;var t=n.state.translate;n.dragHistory=[{time:Date.now(),position:t}],n.setState({dragging:!0,startDragTranslate:t,xDraggedDistance:0,xPoint:0})},n.handleDragWrapper=function(e){n.handleDrag(e)},n.handleDrag=function(e){var t=n.props,r=t.dragging,i=t.rtl,a=n.state,s=a.translate,o=a.dragging,l=a.xPoint,d=a.xDraggedDistance;if(!r||!o)return!1;var f=n.getPoint(e),c=l===u.defaultProps.xPoint?u.defaultProps.xPoint:l-f,m=s-(i?-c:c);n.itBeforeStart(m)?m-=Math.abs(c)/2:n.itAfterEnd(m)&&(m+=Math.abs(c)/2),0!==c&&n.dragHistory.push({time:Date.now(),position:m});var p=m;n.setState({translate:p,xDraggedDistance:d+Math.abs(c),xPoint:f})},n.handleDragStopWrapper=function(e){n.handleDragStop(e)},n.handleDragStop=function(e){var t=n,r=t.allItemsWidth,i=t.menuWidth,a=n.state,s=a.translate,o=a.xPoint,l=void 0===o?n.getPoint(e):o,d=n.state,f=d.dragging,c=d.startDragTranslate,m=n.props,p=m.dragging,g=m.alignCenter;if(!p||!f)return!1;if(n.props.inertiaScrolling){var h=Date.now(),v=n.dragHistory.filter((function(e){return h-e.time<150}));if(v.length>2){var I=v[0],y=v[v.length-1],b=(y.position-I.position)/(y.time-I.time);s+=(b*=n.props.inertiaScrollingSlowdown)*(1e3*n.props.transition)}}var S=s;n.itBeforeStart(s)?(S=n.getOffsetAtStart(),l=u.defaultProps.xPoint):n.itAfterEnd(s)&&(S=n.getOffsetAtEnd(),l=u.defaultProps.xPoint),!g&&r<=i&&(S=u.defaultProps.translate,l=u.defaultProps.xPoint),n.setState({dragging:!1,translate:S,xPoint:l},(function(){return n.onUpdate({translate:S,translateOld:c})}))},n.isArrowsVisible=function(){var e=n,t=e.allItemsWidth,r=e.menuWidth,i=e.props.hideArrows;return!Boolean(i&&t<=r)},n.onUpdate=function(e){var t=e.translate,r=void 0===t?n.state.translate:t,i=e.translateOld,a=void 0===i?n.state.translate:i,s=n.props.onUpdate,o=n.lastTranslateUpdate;r!==a&&r!==o&&(n.lastTranslateUpdate=r,"function"==typeof s&&s({translate:r}))},n.selected=String(t.selected)||"",n}return r(t,e),t.prototype.componentDidCatch=function(e,t){console.log("ScrollMenu catched error: ",e,t)},t.prototype.componentDidMount=function(){var e=this;this.setInitial(),window.requestAnimationFrame=window.requestAnimationFrame||function(){return!1},window.addEventListener("load",this.onLoad),window.addEventListener("resize",this.resizeHandler),document.addEventListener("mousemove",this.handleDragWrapper),document.addEventListener("mouseup",this.handleDragStopWrapper),this.onLoadTimer=setTimeout((function(){return e.onLoad(),e.forceUpdate()}),0)},t.prototype.shouldComponentUpdate=function(e,t){var n=this.state,r=n.translate,i=n.dragging,a=n.firstItemVisible,s=n.lastItemVisible,o=t.translate,l=t.dragging,u=t.firstItemVisible,f=t.lastItemVisible,c=this.props,m=c.translate,p=c.selected,g=c.scrollToSelected,h=e.translate,v=e.selected,I=d.notUndefOrNull(h)&&m!==h,y=h!==o||r!==o||I,b=d.notUndefOrNull(v)&&p!==v,S=b||this.selected!==v,w=y||S,W=a!==u,P=s!==f,x=o,C=this.props.data!==e.data||this.props.data.length!==e.data.length,O=d.translateIsValid(h)&&I&&!C;return(C||g&&b)&&(this.needUpdate=!0),w&&(b&&(this.selected=v),O&&(x=h)),O&&this.setState({translate:+x}),C||y||i!==l||w||W||P},t.prototype.componentDidUpdate=function(e,t){var n=this;this.needUpdate&&(this.needUpdate=!1,this.onLoad());var r=t.translate,i=this.state,a=i.translate;i.dragging||r===a||this.onUpdate({translate:a,translateOld:r});var s=this.checkFirstLastItemVisibility({translate:a}),o=s.firstItemVisible,l=s.lastItemVisible,u=this.props,d=u.onFirstItemVisible,f=u.onLastItemVisible;o&&d(),l&&f();var c=this.props,m=c.hideSingleArrow,p=c.transition;m&&(cancelAnimationFrame(this.frameId),clearTimeout(this.rafTimer),this.frameId=requestAnimationFrame(this.setFirstLastItemVisibility),this.rafTimer=setTimeout((function(){cancelAnimationFrame(n.frameId),n.frameId=requestAnimationFrame(n.setFirstLastItemVisibility)}),1e3*p+10))},t.prototype.componentWillUnmount=function(){window.removeEventListener("load",this.onLoad),window.removeEventListener("resize",this.resizeHandler),document.removeEventListener("mousemove",this.handleDragWrapper),document.removeEventListener("mouseup",this.handleDragStopWrapper),clearTimeout(this.rafTimer),clearTimeout(this.onLoadTimer),clearTimeout(this.resizeTimer),cancelAnimationFrame(this.frameId)},t.prototype.render=function(){var e=this.props,t=e.arrowClass,n=e.arrowDisabledClass,r=e.arrowLeft,a=e.arrowRight,s=e.data,o=e.inertiaScrolling,d=e.innerWrapperStyle,c=e.innerWrapperClass,m=e.itemStyle,p=e.itemClass,g=e.itemClassActive,h=e.menuStyle,v=e.menuClass,I=e.transition,y=e.useButtonRole,b=e.wrapperClass,S=e.wrapperStyle,w=e.disableTabindex,W=e.rtl,P=this.state,x=P.translate,C=P.dragging,O=P.leftArrowVisible,A=P.rightArrowVisible,k=this.selected,_=this.mounted;if(!s||!s.length)return null;var T=!_||this.isArrowsVisible(),V=i(i({},u.defaultMenuStyle),h),D=i(i({},u.defaultWrapperStyle),S),R=i(i({},u.defaultProps.itemStyle),m),Z={className:t,disabledClass:n};return l.createElement("div",{className:v,style:V,onWheel:this.handleWheel},r&&l.createElement(f.ArrowWrapper,i({},Z,{isDisabled:!T||!O,onClick:this.handleArrowClick}),r),l.createElement("div",{className:b,style:D,ref:this.setWrapperRef,onMouseDown:this.handleDragStart,onTouchStart:this.handleDragStart,onTouchEnd:this.handleDragStop,onMouseMove:this.handleDrag,onTouchMove:this.handleDrag},l.createElement(f.InnerWrapper,{disableTabindex:w,data:s,translate:x,dragging:C,mounted:_,transition:_?I:0,selected:k,setRef:this.setRef,setMenuInnerRef:this.setMenuInnerRef,onClick:this.onItemClick,innerWrapperStyle:d,innerWrapperClass:c,itemStyle:R,itemClass:p,itemClassActive:g,inertiaScrolling:o,useButtonRole:y,rtl:W})),a&&l.createElement(f.ArrowWrapper,i({},Z,{isDisabled:!T||!A,onClick:this.handleArrowClickRight}),a))},t.defaultProps=u.defaultProps,t}(l.Component);t.ScrollMenu=c,t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatTranslate=t.translateIsValid=t.validateTranslate=t.getClientRect=t.notUndefOrNull=void 0,t.notUndefOrNull=function(e){return void 0!==e&&null!==e},t.getClientRect=function(e){if(!e||!e.getBoundingClientRect||"function"!=typeof e.getBoundingClientRect)return{width:0,x:0,x2:0};var t=e.getBoundingClientRect(),n=t.left,r=void 0===n?0:n,i=t.width,a=void 0===i?0:i,s=t.right;return{width:a,x:+r,x2:+(void 0===s?0:s)}},t.formatTranslate=function(e){return+e.toFixed(0)};var r=function(e){return"number"==typeof e&&!isNaN(+e)};t.translateIsValid=r,t.validateTranslate=function(e,t){return r(e)?+e:t}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InnerWrapper=t.innerStyle=t.ArrowWrapper=void 0;var s=a(n(0)),o=n(1),l={disabledClass:o.defaultProps.arrowDisabledClass},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.isDisabled,n=e.className,r=e.disabledClass,i=e.onClick,a=e.children,o=n+" "+(t?r:"");return s.default.createElement("div",{className:o,onClick:function(){return i()}},s.default.cloneElement(a,a.props))},t.defaultProps=l,t}(s.default.PureComponent);t.ArrowWrapper=u,t.innerStyle=function(e){var t=e.translate,n=e.dragging,r=e.mounted,i=e.transition,a=e.inertiaScrolling;return{transform:"translate3d("+(e.rtl?-t:t)+"px, 0, 0)",transition:"transform "+(n||!r?"0":i)+"s"+(a?" ease-out":""),width:"990000px"}};var d=function(e){function n(t){var n=e.call(this,t)||this;return n.setMenuInnerRef=function(e){(0,n.props.setMenuInnerRef)({menuInner:{key:"menuInner",elem:e}})},n.setRef=function(e,t,r,i){var a;(0,n.props.setRef)(((a={})[e]={index:r,key:t,elem:i},a))},n.state={data:[],items:[],selected:""},n}return r(n,e),n.getDerivedStateFromProps=function(e,t){return t.data!==e.data||t.selected!==e.selected?{data:e.data,items:n.setItems(e.data,e.selected,e.onClick),selected:e.selected}:null},n.prototype.render=function(){var e=this,n=this.props,r=n.translate,a=n.dragging,o=n.mounted,l=n.transition,u=n.innerWrapperStyle,d=n.innerWrapperClass,f=n.itemStyle,c=n.itemClass,m=n.itemClassActive,p=n.inertiaScrolling,g=n.useButtonRole,h=n.disableTabindex,v=n.rtl,I=t.innerStyle({dragging:a,inertiaScrolling:p,mounted:o,rtl:v,transition:l,translate:r}),y=i(i({},I),u);return s.default.createElement("div",{className:d,style:y,ref:function(t){return e.setMenuInnerRef(t)}},this.state.items.map((function(t,n){return s.default.createElement("div",{ref:function(r){return e.setRef("menuitem-"+n,String(t.key||""),n,r)},className:c+" "+(t.props.selected?m:""),key:"menuItem-"+t.key,style:f,onClick:t.props.onClick(),tabIndex:h?void 0:0,role:g?"button":void 0},t)})))},n.defaultProps={data:[],dragging:!0,mounted:!1,selected:o.defaultProps.selected,transition:o.defaultProps.transition,translate:o.defaultProps.translate},n.isElementActive=function(e,t){return String(e)===String(t)},n.setItems=function(e,t,r){return e.map((function(e){var i=e.props.onClick,a=void 0===i?function(){return!1}:i,o={onClick:function(){return n.forwardClickHandler(e.key,a,r)},selected:n.isElementActive(e.key,t)};return s.default.cloneElement(e,o)}))},n.forwardClickHandler=function(e,t,n){return void 0===t&&(t=function(){return!1}),function(){t(),n(e)}},n}(s.default.PureComponent);t.InnerWrapper=d}])},46289:function(e,t,n){"use strict";n.d(t,{Cg:function(){return f.C},$_:function(){return a.$},GQ:function(){return o.G},bK:function(){return i.b},AF:function(){return I.A},Dh:function(){return v.Dh},cp:function(){return s.c},bU:function(){return y.bU}});var r=n(60739),i=n(97993),a=n(99932),s=n(55884),o=n(84072),l={space:[0,4,8,16,32,64,128,256,512]},u={gridGap:{property:"gridGap",scale:"space",defaultScale:l.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:l.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:l.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},d=(0,r.By)(u),f=n(79256),c={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};c.bgImage=c.backgroundImage,c.bgSize=c.backgroundSize,c.bgPosition=c.backgroundPosition,c.bgRepeat=c.backgroundRepeat;var m=(0,r.By)(c),p={space:[0,4,8,16,32,64,128,256,512]},g={position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:p.space},right:{property:"right",scale:"space",defaultScale:p.space},bottom:{property:"bottom",scale:"space",defaultScale:p.space},left:{property:"left",scale:"space",defaultScale:p.space}},h=(0,r.By)(g),v=n(54604),I=n(35901),y=n(71011);i.Z.width,i.Z.height,i.Z.minWidth,i.Z.minHeight,i.Z.maxWidth,i.Z.maxHeight,i.Z.size,i.Z.verticalAlign,i.Z.display,i.Z.overflow,i.Z.overflowX,i.Z.overflowY,a.Z.opacity,s.Z.fontSize,s.Z.fontFamily,s.Z.fontWeight,s.Z.lineHeight,s.Z.textAlign,s.Z.fontStyle,s.Z.letterSpacing,o.Z.alignItems,o.Z.alignContent,o.Z.justifyItems,o.Z.justifyContent,o.Z.flexWrap,o.Z.flexDirection,o.Z.flex,o.Z.flexGrow,o.Z.flexShrink,o.Z.flexBasis,o.Z.justifySelf,o.Z.alignSelf,o.Z.order,d.gridGap,d.gridColumnGap,d.gridRowGap,d.gridColumn,d.gridRow,d.gridAutoFlow,d.gridAutoColumns,d.gridAutoRows,d.gridTemplateColumns,d.gridTemplateRows,d.gridTemplateAreas,d.gridArea,f.Z.borderWidth,f.Z.borderStyle,f.Z.borderColor,f.Z.borderTop,f.Z.borderRight,f.Z.borderBottom,f.Z.borderLeft,f.Z.borderRadius,m.backgroundImage,m.backgroundSize,m.backgroundPosition,m.backgroundRepeat,h.zIndex,h.top,h.right,h.bottom,h.left}}]);
//# sourceMappingURL=2516-821b416bb5a9c43bccc0.js.map