/* Common CSS */

.RadMenu
{
	white-space:nowrap;
	float:left;
	position:relative;
    z-index /*\**/: 7000\9; /* IE8 hasLayout fix */
}

.RadMenu .rmRootGroup
{
	margin:0;
	padding:0;
	position:relative;
	left:0;
	display: inline-block;
}

* html .RadMenu .rmRootGroup { float: left; }

.RadMenu:after,
.RadMenu .rmRootGroup:after
{
    content:""; 
    display:block;
    height:0;
    overflow: hidden;
    line-height:0;
    font-size:0;
    clear:both;
    visibility:hidden;
}

.RadMenu ul.rmVertical,
.RadMenu ul.rmHorizontal,
.RadMenu ul.rmRootScrollGroup,
.RadMenu_Context ul.rmHorizontal
{
	margin:0;
	padding:0;
	display:none;
	position:relative;
	left:0;
	float:left;
}

.rmSized ul.rmVertical
{
	width: 100%;
}

.rmSized ul.rmRootGroup
{
	float: none;
}

.rmSized .rmRootGroup .rmVertical
{
	width: auto;
}

.RadMenu .rmItem
{
	float:left;
	position:relative;
	list-style-image: none;
	list-style-position:outside;
	list-style:none;	
}

* html .RadMenu .rmItem
{
	display:inline;
}

.RadMenu .rmHorizontal .rmItem
{
	clear:none;
}

.RadMenu .rmVertical .rmItem
{
	clear:both;
}

.rmSized .rmVertical .rmItem
{
	width: 100%;
}

.rmSized .rmHorizontal .rmItem,
.rmSized .rmRootGroup .rmVertical .rmItem
{
	width: auto;
}

.RadMenu ul.rmActive,
.RadMenu ul.rmRootGroup
{
	display:block;
}

.RadMenu .rmSlide, 
.RadMenu_Context
{
	position:absolute;
	overflow:hidden;
	display:none;
	float:left;
}

* html .RadMenu .rmSlide, 
* html .RadMenu_Context
{
	height:1px;
}

.RadMenu_Context
{
	z-index:1000;
	overflow:visible;
}

.RadMenu .rmText
{
	display:block;
}

.RadMenu div.rmText /*templates*/
{
	white-space:normal;
	background: transparent;
}

.RadMenu a.rmLink
{
	cursor:default;
	display:block;
}

.rmScrollWrap
{
	position:absolute;
	float:left;
	overflow:hidden;
	left:0;
}

.RadMenu .rmLeftArrow,
.RadMenu .rmTopArrow,
.RadMenu .rmBottomArrow,
.RadMenu .rmRightArrow
{
	position:absolute;
	z-index:2000;
	text-indent:-1000em;
	font-size: 0;
	line-height: 0;
	outline: 0;
	overflow: hidden;
}

.RadMenu .rmLeftArrowDisabled,
.RadMenu .rmTopArrowDisabled,
.RadMenu .rmBottomArrowDisabled,
.RadMenu .rmRightArrowDisabled
{
	display:none;
	text-indent:-1000em;
	font-size: 0;
	line-height: 0;
}

.RadMenu .rmBottomArrow,
.RadMenu .rmBottomArrowDisabled
{
	margin-bottom: -1px;
}

.RadMenu .rmLeftImage
{
	border:0;
	float:left;
}

.RadMenu_rtl
{
	float:right;
	text-align: right;
}

.RadMenu_rtl ul.rmVertical
{
	float:right;
}

.RadMenu_rtl .rmItem
{
	float:right;	
}

.RadMenu_rtl .rmLeftImage,
.RadMenu_Context_rtl .rmLeftImage
{
	border:0;
	float:right;
}

.RadMenu_rtl .rmLeftArrow,
.RadMenu_rtl .rmTopArrow,
.RadMenu_rtl .rmBottomArrow,
.RadMenu_rtl .rmRightArrow,
.RadMenu_rtl .rmLeftArrowDisabled,
.RadMenu_rtl .rmTopArrowDisabled,
.RadMenu_rtl .rmBottomArrowDisabled,
.RadMenu_rtl .rmRightArrowDisabled
{
	text-indent:1000em !important;
}

.RadMenu .rmLink
{
	width:auto;
}

.RadMenu .rmSeparator,
.RadMenu .rmSeparator:after
{
    line-height: 0;
    font-size: 0;
    overflow: hidden;
}

.RadMenu div.rmRootGroup
{
    position: relative;
}
/* <base styles> */

.RadMenu .rmItem
{
	padding: 0;
}

.RadMenu .rmLink
{
	padding: 0 0 0 12px;
	outline: 0;
	float: left;
}

.RadMenu_rtl .rmLink
{
	padding: 0 12px 0 0;
    margin-left: 2px;
}

.RadMenu .rmText
{
	padding-bottom: 1px;
	float: left;
}

.RadMenu_rtl .rmText
{
    margin-left: -2px;
}

/* optimized for 16x16 */
.RadMenu .rmLeftImage
{
	margin: 4px 2px 0 -3px;
	padding-bottom: 4px;
}

.RadMenu_rtl .rmLeftImage
{
	margin: 4px -3px 0 2px;
	padding-bottom: 2px;
}

/* Image sprite placeholder size */
.RadMenu span.rmLeftImage
{
	width: 16px;
	height: 16px;
}

.RadMenu .rmVertical .rmLeftImage+.rmText
{
	padding: 0 8px 1px 24px;
}

.RadMenu .rmVertical .rmText
{
	padding: 0 24px 1px 0;
}

.RadMenu .rmHorizontal .rmText
{
	padding: 0 12px 1px 0;
}

.RadMenu_rtl .rmHorizontal .rmText
{
	padding: 0 0 1px 12px;
}

.RadMenu_rtl .rmVertical .rmText
{
	padding: 0 0 1px 24px;
}

.RadMenu .rmVertical .rmText,
.RadMenu .rmHorizontal .rmVertical .rmText
{
	display: block;
	float: none;
}

.RadMenu .rmVertical .rmLink,
.RadMenu .rmHorizontal .rmVertical .rmLink
{
	float: none;
}

* html .RadMenu .rmGroup .rmVertical .rmLink,
* html .RadMenu .rmGroup .rmHorizontal .rmLink
{
	float: left;
}

/* <Shadows and rounded corners */

.RadMenu .rmTopRight,
.RadMenu .rmBottomLeft,
.RadMenu .rmBottomRight,
.RadMenu .rmRoundedCorners ul.rmGroup,
.rmRoundedCorners ul.rmGroup,
.rmRoundedCorners ul.rmGroup ul.rmGroup,
.RadMenu .rmRoundedCorners .rmMultiColumn
{
	border: 0;
	background-position: 0 0;
}

.RadMenu .rmRoundedCorners .rmMultiColumn ul.rmMultiGroup
{
	background: none;
	margin: 0;
}

.RadMenu .rmRoundedCorners .rmGroupColumn
{
	height: 100%;
}

.RadMenu .rmRoundedCorners li.rmFirstGroupColumn
{
	background-color: transparent;
}

.RadMenu .rmTopFix,
.RadMenu .rmTopRight,
.RadMenu .rmBottomFix,
.RadMenu .rmBottomLeft,
.RadMenu .rmBottomRight
{
	position: absolute;
	width: 4px;
	height: 4px;
	list-style-type: none;
	list-style-position: outside;
	font-size: 0;
}

.RadMenu_rtl .rmTopRight,
.RadMenu_rtl .rmBottomRight
{
	width: 32px;
}

.RadMenu_rtl .rmTopShadowRight,
.RadMenu_rtl .rmBottomShadowRight
{
	width: 4px;
}

.RadMenu .rmTopShadowRight,
.RadMenu .rmBottomShadowLeft,
.RadMenu .rmBottomShadowRight
{
	background-repeat: no-repeat;
	background-color: transparent;
}

.rmRoundedCorners .rmTopShadowRight,
.rmRoundedCorners .rmBottomShadowLeft,
.rmRoundedCorners .rmBottomShadowRight
{
	width: 5px;
	height: 5px;
}

.RadMenu .rmTopRight
{
	background-position: 100% 0;
	top: 0;
	right: -4px;
	height: 100%;
}

.RadMenu .rmBottomLeft
{
	background-position: 0 100%;
	bottom: -4px;
	left: 0;
	width: 100%;
}

.RadMenu .rmBottomFix
{
	background-position: -1px 0;
	width: auto;
	bottom: -4px;
	left: 5px;
	right: 0;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.RadMenu .rmTopFix
{
	background-position: -1px 0;
	width: auto;
	top: 0;
	left: 5px;
	right: 0;
	border-top-width: 1px;
	border-top-style: solid;
}

* html .RadMenu .rmTopFix,
* html .RadMenu .rmBottomFix,
* html .RadMenu .rmBottomShadowLeft
{
	width: 0;
}

.RadMenu .rmBottomRight
{
	background-position: 100% 100%;
	bottom: -4px;
	right: -4px;
	width: 8px;
}

.RadMenu .rmShadows li.rmBottomShadowLeft,
.RadMenu .rmShadows .rmBottomShadowRight,
.rmShadows .rmGroup li.rmBottomShadowLeft,
.rmShadows .rmGroup .rmBottomShadowRight
{
	background-image: url('WebResource.axd?d=-MqYRb37DhmrEDF95HlL3qE7q-gy6EvTS0LfsCyHRDwHEBIMm8h1u1tDPAreBw8nLcB2WgXNzi2hHabvlCiXtpXOEtoUtDVj2p8DSR-r-K5gqMiIxWOsFXo01-oEVXibEy-UwHPN_cu-fIjhkS9errIqveoNMUecOt6YjpmuthLduCjv0&t=634673729650000000');
}

.RadMenu .rmRoundedCorners li.rmBottomShadowLeft,
.RadMenu .rmRoundedCorners .rmBottomShadowRight,
.rmRoundedCorners .rmGroup li.rmBottomShadowLeft,
.rmRoundedCorners .rmGroup .rmBottomShadowRight
{
	background-image: url('WebResource.axd?d=tTvYC5AQxLCAE4iyJ1sbwfOjZjCA0K-6wWdozP4KtpcOnFiHVtSLoVXdWrmGDmJqmAQuNfieNXee4W_6UnoBy9NRhsy3eh8O4S5yZf4kdTCJzgAaF63T3nUbraw4iKu8AheAR3pdqWgc8fN7hGLIAdda5tFUOpPz4tGNDfRx_gsLdyIH0&t=634673729650000000');
}

.RadMenu .rmShadows .rmTopShadowRight,
.rmShadows .rmGroup .rmTopShadowRight
{
	right: -5px;
	background-image: url('WebResource.axd?d=jNiVzrAVdGRSjI3ZJbU3Oa1Ys4qmFpfm_N-kETYm7tZkTsNtso0pMxLrEzxRPvBooi1t7EEq4ZZO_LQk3Pqq8CXGmTYo9SLwfl2gz1an-AmIKySjkoOGxbwPeTMMUu8ePZFzPRVIvL2il6GStO1H87BO_rcnwyoUtOzJuUEz5Rul_er70&t=634673729650000000');
	background-position: 100% 0;
}

.RadMenu .rmBottomShadowLeft
{
	bottom: -5px;
	left: 1px;
	background-position: 0 100%;
}

.RadMenu .rmBottomShadowRight
{
	bottom: -5px;
	right: -5px;
	width: 4px;
	height: 5px;
}

.RadMenu .rmScrollWrapContainer .rmTopShadowRight
{
	right: -4px;
}

.RadMenu .rmScrollWrapContainer .rmBottomShadowRight
{
	bottom: -4px;
	right: -4px;
	width: 3px;
	height: 4px;
}

.RadMenu .rmScrollWrapContainer .rmBottomShadowLeft
{
	bottom: -4px;
}

.RadMenu .rmRoundedCorners .rmTopShadowRight,
.rmRoundedCorners .rmGroup .rmTopShadowRight
{
	right: -8px;
	background-image: url('WebResource.axd?d=CjPr5ypSc6J5UJMnJv4gyTQo-Wizhv9vqliI5eG2gmEsZvdn8L-1nk8JIuucA0PfVWDi1vY006FEJn47EJXOf841r93r5fn7yojZnOtut2-YT6Z-CXf8E1vkrv78kDu9vXYqpsaUH_Jx1_R6dIvFxabrfD_ausJHShAd62ZHnCTWwsgE0&t=634673729650000000');
}

.RadMenu .rmRoundedCorners .rmBottomShadowLeft,
.rmRoundedCorners .rmGroup .rmBottomShadowLeft
{
	bottom: -8px;
}

.RadMenu .rmRoundedCorners .rmBottomShadowRight,
.rmRoundedCorners .rmGroup .rmBottomShadowRight
{
	bottom: -8px;
	right: -8px;
	width: 7px;
	height: 8px;
}

* html .RadMenu .rmRoundedCorners .rmBottomShadowRight,
* html .rmRoundedCorners .rmGroup .rmBottomShadowRight
{
	width: 11px;
	height: 8px;
	font-size: 0;
}

.RadMenu .rmAccessKey
{
	font-size: 10px;
	font-weight: normal;
	float: right;
	padding-right: 8px;
}

.RadMenu .rmRoundedCorners .rmGroup .rmItem,
.rmRoundedCorners .rmGroup .rmItem
{
	z-index: 1;
}

* html .RadMenu .rmRoundedCorners .rmGroup .rmText,
* html .RadMenu .rmShadows .rmGroup .rmText, 
* html .rmRoundedCorners .rmGroup .rmText,
* html .rmShadows .rmGroup .rmText { zoom: normal }

.RadMenu .rmRoundedCorners .rmSlide .rmScrollWrap,
.rmRoundedCorners .rmScrollWrapContainer .rmScrollWrap
{
	background-image: none;
}

.RadMenu .rmRoundedCorners .rmMultiGroup > .rmItem
{
	background-image: none;
}

.RadMenu .rmRoundedCorners .rmSlide,
.RadMenu .rmShadows .rmSlide,
.rmRoundedCorners .rmSlide,
.rmShadows .rmSlide,
div.rmRoundedCorners,
div.rmShadows
{
	padding: 0 8px 10px 0;
}

.RadMenu .rmRoundedCorners ul.rmGroup,
.rmRoundedCorners .rmGroup ul.rmGroup,
.rmRoundedCorners ul.rmGroup
{
	margin-top: 1px;
	padding: 1px;
}

.RadMenu .rmRoundedCorners ul.rmGroup .rmSlide,
.rmRoundedCorners ul.rmGroup .rmSlide
{
	margin-top: -5px;
}

.RadMenu_rtl .rmRoundedCorners ul.rmGroup .rmSlide,
.RadMenu_rtl.rmRoundedCorners ul.rmGroup .rmSlide
{
	margin-right: -5px;
}

.RadMenu .rmRoundedCorners .rmSlide .rmScrollWrap,
.rmRoundedCorners .rmSlide .rmScrollWrap
{
	border: 0;
}

.RadMenu .rmRoundedCorners .rmScrollWrap,
.RadMenu .rmShadows .rmScrollWrap,
.rmRoundedCorners .rmScrollWrap,
.rmShadows .rmScrollWrap
{
	position: relative;
}

.RadMenu .rmRoundedCorners .rmScrollWrapContainer,
.rmRoundedCorners .rmScrollWrapContainer
{
	padding: 4px 0 0 4px;
}

.RadMenu .rmScrollWrapContainer
{
	position: absolute;
}

.RadMenu .rmScrollWrapContainer .rmTopFix
{
	height: 100%;
}

* html .RadMenu .rmScrollWrapContainer .rmTopFix
{
	height: 5px;
}

.RadMenu .rmRoundedCorners ul.rmGroup,
.rmRoundedCorners .rmGroup ul.rmGroup,
.rmRoundedCorners ul.rmGroup
{
	padding: 4px 0 0 4px;
}

.RadMenu .rmScrollWrapContainer .rmGroup,
.rmScrollWrapContainer .rmGroup .rmGroup,
.rmScrollWrapContainer .rmGroup
{
	padding: 0;
}

/* </Shadows and rounded corners */

.RadMenu .rmRootGroup .rmItem .rmGroup
{
	padding-bottom: 1px;
}

.RadMenu .rmRoundedCorners .rmItem .rmGroup
{
	padding-bottom: 0;
}

.RadMenu .rmGroup .rmItem
{
	padding: 0;
}

.RadMenu .rmGroup .rmLink,
.RadMenu .rmSlide .rmGroup .rmTemplate
{
	padding: 0;
}

.RadMenu_rtl .rmGroup .rmLink,
.RadMenu_rtl .rmSlide .rmGroup .rmTemplate
{
	padding: 0;
}

.RadMenu .rmGroup .rmText
{
	padding: 0 54px 0 28px;
	margin: 0 0 0 4px;
}

.RadMenu_rtl .rmGroup .rmText
{
	padding: 0 28px 0 54px;
	margin: 0 4px 0 0;
}

.RadMenu .rmMultiColumn
{
	list-style: none;
	display: block;
   	position: relative;
	margin: 0;
	padding: 0;
	zoom: 1;
}

.RadMenu .rmMultiColumn .rmMultiGroup
{
	background: none;
	border: 0;
	float: left;
	display: block;
    position: static;
}

.RadMenu .rmMultiColumn .rmGroupColumn
{
	float: left;
}

.RadMenu_rtl .rmMultiColumn .rmGroupColumn  
{
	float: right;
}

*+html .RadMenu_rtl .rmMultiColumn .rmItem { float: left; }
* html .RadMenu_rtl .rmMultiColumn .rmItem { float: left; }

.RadMenu .rmSlide .rmVertical .rmLeftImage+.rmText,
.RadMenu_Context .rmGroup .rmLeftImage+.rmText
{
	padding: 0 54px 0 28px;
}

.RadMenu_rtl .rmSlide .rmVertical .rmLeftImage+.rmText,
.RadMenu_Context_rtl .rmGroup .rmLeftImage+.rmText
{
	padding: 0 28px 0 54px;
}

.RadMenu .rmSlide .rmHorizontal .rmText
{
	padding: 0 11px 0 10px;
}

.RadMenu .rmGroup .rmLeftImage
{
	margin: 4px 0 0 6px;
}

* html .RadMenu .rmGroup .rmLeftImage { margin-left: 4px; }
*+html .RadMenu .rmGroup .rmLeftImage { margin-left: 4px; }

* html .rmRoundedCorners .rmGroup .rmLeftImage { margin-left: 1px; }
*+html ul.rmRoundedCorners .rmGroup .rmLeftImage { margin-left: 2px; }

.RadMenu_rtl .rmGroup .rmLeftImage
{
	margin: 4px 6px 0 0;
}

* html .RadMenu .rmGroup .rmLeftImage { position: absolute; }
*+html .RadMenu .rmGroup .rmLeftImage { position: absolute; }

.RadMenu a.rmImageOnly img.rmLeftImage,
.RadMenu .rmRootGroup a.rmImageOnly
{
	padding: 0;
	margin: 0;
}

.RadMenu .rmRootGroup a.rmImageOnly span.rmText
{
	display: none;
}

* html .RadMenu .rmImageOnly .rmLeftImage { position: static; }
*+html .RadMenu .rmImageOnly .rmLeftImage { position: static; }

* html .RadMenu_rtl .rmGroup .rmLeftImage { right: 0; }
*+html .RadMenu_rtl .rmGroup .rmLeftImage { right: 0; }

*+html .RadMenu_Context_rtl ul.rmGroup { position: absolute; }
* html .RadMenu_Context_rtl ul.rmGroup { position: absolute; }

*+html .RadMenu_Context_rtl .rmGroup .rmItem { float: left; }
* html .RadMenu_Context_rtl .rmGroup .rmItem { float: left; }

/* <separators> */

.RadMenu .rmSeparator .rmText
{
	line-height: 0;
	font-size: 0;
	padding: 0;
	background-repeat: repeat-x;
	overflow: hidden;
}

.RadMenu .rmVertical .rmSeparator .rmText,
.RadMenu .rmHorizontal .rmVertical .rmSeparator .rmText
{
	height: auto;
	width: auto;
	padding-bottom: 2px;
}

*+html .RadMenu .rmSeparator .rmText,   /* IE7 separator height problem */
*+html .RadMenu .rmVertical .rmSeparator .rmText,
*+html .RadMenu .rmHorizontal .rmVertical .rmSeparator .rmText
{
	height: 2px;
	padding: 0;
}

* html .RadMenu .rmVertical .rmSeparator { height: 3px; }
* html .RadMenu .rmVertical .rmSeparator .rmText { height: auto; padding: 2px 0 0; }
* html .RadMenu .rmHorizontal .rmSeparator .rmText { padding: 0; }
* html .RadMenu .rmHorizontal .rmVertical .rmSeparator { height: 3px; }
* html .RadMenu .rmHorizontal .rmVertical .rmSeparator .rmText { height: 2px; }

.RadMenu .rmRootGroup .rmSeparator .rmText
{
	margin: 1px 12px;
}

.RadMenu .rmRootGroup .rmVertical .rmSeparator .rmText,
.RadMenu_Context .rmVertical .rmSeparator .rmText
{
	margin: 1px 2px 1px 31px;
}

.RadMenu_rtl .rmRootGroup .rmVertical .rmSeparator .rmText,
.RadMenu_Context_rtl .rmVertical .rmSeparator .rmText
{
	margin: 1px 31px 1px 2px;
}

.RadMenu .rmHorizontal .rmSeparator .rmText,
.RadMenu .rmVertical .rmHorizontal .rmSeparator .rmText
{
	margin: 2px 0 0;
	height: 20px;
	width: 2px;
}

* html .RadMenu .rmHorizontal .rmVertical .rmSeparator .rmText
{
	zoom: 1;
}

/* </separators> */

/* <scroll arrows> */

.RadMenu .rmLeftArrow,
.RadMenu .rmRightArrow
{
	width: 10px;
	height: 24px;
}

.RadMenu .rmTopArrow,
.RadMenu .rmBottomArrow
{
	height: 10px;
	width: 100%;
}

/* </scroll arrows> */

/* </base styles> */

/** ================================================================================================================================================ */

.RadTabStrip,
.RadTabStripVertical
{
	margin: 0;
	padding: 0;
}

.RadTabStripVertical
{
	vertical-align: top;
}

.RadTabStripVertical,
.RadTabStripVertical .rtsLevel
{
	display: -moz-inline-stack;
	display: inline-block;
	zoom: 1;
	*display: inline;
}

.RadTabStripVertical .rtsLevel
{
	height: 100%;
	float: left;
}

* html .RadTabStripVertical .rtsLevel
{
	width: 150px; /* Width is needed for IE6 to show the vertical RadTabStrip properly. */
}

div.RadTabStripVertical .rtsHasWidth,
.RadTabStripVertical .rtsHasWidth .rtsUL,
.RadTabStripVertical .rtsHasWidth .rtsLI
{
	width: 100%;
}

.RadTabStrip .rtsLevel
{
	clear: both;
	overflow: hidden;
	width: 100%;
	position: relative;
	padding-top: 1px;
}

* html .RadTabStrip .rtsLevel
{
	position:static;
}

*+html .RadTabStrip .rtsLevel
{
	position:static;
}

.RadTabStrip .rtsLevel1
{
	padding-top: 0;
}

.RadTabStrip .rtsScroll
{
	width: 100%;
    height: 26px;
	white-space: nowrap;
}

.RadTabStrip .rtsUL,
.RadTabStripVertical .rtsUL
{
	overflow: hidden;
	float: left;
	margin: 0;
	padding: 0;
}

.RadTabStrip_rtl .rtsUL
{
    float: right;
}

.RadTabStrip_rtl .rtsScroll /* IE6/7 scrolling calculation is problematic with float: right */
{
    float: left;
}

.RadTabStrip .rtsUL:after
{
	clear: both;
	content: "."; 
	display: block; 
	visibility: hidden;
	height: 0;
	line-height: 0;
	font-size: 0;
}

.RadTabStrip .rtsLI,
.RadTabStripVertical .rtsLI
{
	overflow: hidden;
	list-style-type: none;
	margin: 0;
    padding: 0;
}

.RadTabStrip .rtsLI
{
	float: left;
	display: inline;
	zoom: 1;
}

* html .RadTabStrip .rtsLI { float: none; }
*+html .RadTabStrip .rtsLI { float: none; }

.RadTabStrip .rtsSeparator,
.RadTabStripVertical .rtsSeparator
{
	height: 26px;
}

/* <focus cue> */
.RadTabStrip a.rtsLink:focus,
.RadTabStripVertical a.rtsLink:focus
{
    outline: 1px dotted #555;
    outline-offset: -2px;
    position /*\**/: relative\9;
}
.RadTabStripVertical a.rtsLink:focus
{
    outline-offset: -2px;
}

*+html .RadTabStrip a.rtsLink:focus,
*+html .RadTabStripVertical a.rtsLink:focus{ position: static; }
* html .RadTabStrip a.rtsLink:focus,
* html .RadTabStripVertical a.rtsLink:focus{ position: static; }

.RadTabStrip a.rtsClicked:focus,
.RadTabStripVertical a.rtsClicked:focus
{
    outline: none;
}

.RadTabStrip a.rtsLink:focus:after, /* Hack for IE8 which doesn't support outline-offset */
.RadTabStripVertical a.rtsLink:focus:after
{
    content /*\**/: " ";
    position /*\**/: absolute\9;
    display /*\**/: block\9;
    border /*\**/: 1px dotted #555\9;
    left /*\**/: 1px\9;
    top /*\**/: 1px\9;
    right /*\**/: 1px\9;
    bottom /*\**/: 0\9;
}

.RadTabStrip a.rtsClicked:focus:after,
.RadTabStripVertical a.rtsClicked:focus:after
{
    content /*\**/: none;
}
/* </focus cue> */

.RadTabStrip .rtsLink,
.RadTabStripVertical .rtsLink
{
	display: block;
	cursor: pointer;
	text-decoration: none;
	white-space: nowrap;
	padding-left: 9px;
}

.RadTabStrip .rtsLink
{
	text-align: center;
}

.RadTabStripVertical .rtsLink
{
	text-align: right;
}

/* Opera & IE8 bozos do not inherit text-decoration */
.RadTabStrip .rtsLevel .rtsOut,
.RadTabStrip .rtsLevel .rtsIn,
.RadTabStrip .rtsLevel .rtsTxt { text-decoration: inherit; }

.RadTabStrip .rtsOut,
.RadTabStripVertical .rtsOut
{
	display: block;
	padding-right: 9px;
}

.RadTabStrip .rtsIn,
.RadTabStripVertical .rtsIn
{
	display: block;
	padding: 0 5px;
}

.RadTabStrip .rtsImg,
.RadTabStripVertical .rtsImg
{
	border: 0;
	margin-top: -2px;
	vertical-align: middle;
}

.RadTabStrip .rtsTxt,
.RadTabStripVertical .rtsTxt
{
	display: inline-block;
}

.RadTabStrip .rtsLevel1 .rtsTxt,
.RadTabStripVertical .rtsLevel1 .rtsTxt
{
	padding: 0 5px;
}

.RadTabStrip .rtsDisabled,
.RadTabStripVertical .rtsDisabled
{
	cursor: default;
}

.RadTabStrip .rtsPrevArrow,
.RadTabStrip .rtsNextArrow,
.RadTabStrip .rtsPrevArrowDisabled,
.RadTabStrip .rtsNextArrowDisabled,
.RadTabStripVertical .rtsPrevArrow,
.RadTabStripVertical .rtsNextArrow,
.RadTabStripVertical .rtsPrevArrowDisabled,
.RadTabStripVertical .rtsNextArrowDisabled
{
	margin-top: 5px;
	height: 18px;
	width: 18px;
	font-size: 0;
	line-height: 18px;
	text-indent:-9999px;
	overflow: hidden;
	outline: 0;
	background-color: transparent;
	background-repeat: no-repeat;
}

.RadTabStrip .rtsPrevArrowDisabled,
.RadTabStrip .rtsNextArrowDisabled,
.RadTabStrip .rtsPrevArrow,
.RadTabStrip .rtsNextArrow
.RadTabStripVertical .rtsPrevArrowDisabled,
.RadTabStripVertical .rtsNextArrowDisabled,
.RadTabStripVertical .rtsPrevArrow,
.RadTabStripVertical .rtsNextArrow
{
	display: block;
}

.RadTabStrip .rtsPrevArrow { background-position: 0 -208px; }
.RadTabStrip .rtsNextArrow { background-position: -18px -208px; }
.RadTabStrip .rtsPrevArrow:hover { background-position: -36px -208px; }
.RadTabStrip .rtsNextArrow:hover { background-position: -54px -208px; }
.RadTabStrip .rtsPrevArrowDisabled,
.RadTabStrip .rtsPrevArrowDisabled:hover { background-position: -72px -208px; }
.RadTabStrip .rtsNextArrowDisabled,
.RadTabStrip .rtsNextArrowDisabled:hover { background-position: -90px -208px; }

.RadTabStripVertical .rtsPrevArrow { background-position: 0 -228px; }
.RadTabStripVertical .rtsNextArrow { background-position: -18px -228px; }
.RadTabStripVertical .rtsPrevArrow:hover { background-position: -36px -228px; }
.RadTabStripVertical .rtsNextArrow:hover { background-position: -54px -228px; }
.RadTabStripVertical .rtsPrevArrowDisabled,
.RadTabStripVertical .rtsPrevArrowDisabled:hover { background-position: -72px -228px; }
.RadTabStripVertical .rtsNextArrowDisabled,
.RadTabStripVertical .rtsNextArrowDisabled:hover { background-position: -90px -228px; }

.RadTabStrip .rtsCenter
{
	text-align: center;
}

.RadTabStrip .rtsImg
{
	border: none;
}
.RadTabStrip .rtsImg+.rtsTxt { display: -moz-inline-box; display: inline-block; }
.RadTabStrip .rtsTxt { display: inline-block; }

.RadTabStrip .rtsRight .rtsUL
{
	float:right;
}

.RadTabStrip .rtsCenter .rtsUL
{
	display: -moz-inline-box;
	display: inline-block;
	float: none;
}

.RadTabStrip .rtsBreak
{
	height: 0;
	width: 0;
	font-size: 0;
	line-height: 0;
	display: block;
	clear: left;
	overflow: hidden;
}

* html .RadTabStrip .rtsCenter .rtsUL { display: inline-block; }
* html .RadTabStrip .rtsCenter .rtsUL { display: inline; }

*+html .RadTabStrip .rtsCenter .rtsUL { display: inline-block; }
*+html .RadTabStrip .rtsCenter .rtsUL { display: inline; }

.RadTabStrip_rtl .rtsLI
{
	float:right;
}

* html .RadTabStrip_rtl .rtsLI
{
	float:none;
}

*+html .RadTabStrip_rtl .rtsLI
{
	float:none;
}

@media screen and (min-width:50px)
{
	:root .RadTabStripHorizontal .rtsScroll
	{
		width: auto;
	}
	
	:root .RadTabStripHorizontal .rtsScroll .rtsLI
	{
		float:none;
		display: inline-block;
	}

	:root .RadTabStripVertical .rtsScroll .rtsLI
	{
		float:none;
	}
}

.RadTabStripVertical .rtsLink,
.RadTabStripVertical .rtsLI .rtsDisabled:hover { background-position: 0 0; }
.RadTabStripVertical .rtsLink:hover { background-position: 0 -200px; }
.RadTabStripVertical .rtsSelected,
.RadTabStripVertical .rtsSelected:hover { background-position: 0 -400px; }

.RadTabStripVertical .rtsLI
{
/*	display: block;*/
}

* html .RadTabStripVertical .rtsLI
{
	display: inline;
}

*+html .RadTabStripVertical .rtsLI
{
	display: inline;
}

.RadTabStripVertical .rtsSeparator
{
	display: block;
	height: 2px;
}

* html .RadTabStripVertical .rtsSeparator
{
	line-height: 0;
	font-size: 0;
}

*+html .RadTabStripVertical .rtsSeparator
{
	line-height: 0;
	font-size: 0;
}

* html .RadTabStripVertical .rtsLevel
{
	overflow: hidden;
}

*+html .RadTabStripVertical .rtsLevel
{
	overflow: hidden;
}
