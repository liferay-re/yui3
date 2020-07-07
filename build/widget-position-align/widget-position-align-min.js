YUI.add("widget-position-align",function(e,t){function c(e){}var n=e.Lang,r="align",i="alignOn",s="visible",o="boundingBox",u="offsetWidth",a="offsetHeight",f="region",l="viewportRegion";c.ATTRS={align:{value:null},centered:{setter:"_setAlignCenter",lazyAdd:!1,value:!1},alignOn:{value:[],validator:e.Lang.isArray}},c.TL="tl",c.TR="tr",c.BL="bl",c.BR="br",c.TC="tc",c.RC="rc",c.BC="bc",c.LC="lc",c.CC="cc",c.prototype={initializer:function(){this._posNode||e.error("WidgetPosition needs to be added to the Widget, before WidgetPositionAlign is added"),e.after(this._bindUIPosAlign,this,"bindUI"),e.after(this._syncUIPosAlign,this,"syncUI")},_posAlignUIHandles:null,destructor:function(){this._detachPosAlignUIHandles()},_bindUIPosAlign:function(){this.after("alignChange",this._afterAlignChange),this.after("alignOnChange",this._afterAlignOnChange),this.after("visibleChange",this._syncUIPosAlign)},_syncUIPosAlign:function(){var e=this.get(r);this._uiSetVisiblePosAlign(this.get(s)),e&&this._uiSetAlign(e.node,e.points)},align:function(e,t){return arguments.length?this.set(r,{node:e,points:t}):this._syncUIPosAlign(),this},centered:function(e){return this.align(e,[c.CC,c.CC])},_getAlignToXY:function(e,t,n,r){var i;switch(t){case c.TL:i=[n,r];break;case c.TR:i=[n-e.get(u),r];break;case c.BL:i=[n,r-e.get(a)];break;case c.BR:i=[n-e.get(u),r-e.get(a)];break;case c.TC:i=[n-e.get(u)/2,r];break;case c.BC:i=[n-e.get(u)/2,r-e.get(a)];break;case c.LC:i=[n,r-e.get(a)/2];break;case c.RC:i=[n-e.get(u),r-e.get(a)/2];break;case c.CC:i=[n-e.get(u)/2,r-e.get(a)/2];break;default:}return i},_getAlignedXY:function(t,r){if(!n.isArray(r)||r.length!==2){e.error("align: Invalid Points Arguments");return}var i=this._getRegion(t),s,o;if(!i)return;s=r[1];switch(s){case c.TL:o=[i.left,i.top];break;case c.TR:o=[i.right,i.top];break;case c.BL:o=[i.left,i.bottom];break;case c.BR:o=[i.right,i.bottom];break;case c.TC:o=[i.left+Math.floor(i.width/2),i.top];break;case c.BC:o=[i.left+Math.floor(i.width/2),i.bottom];break;case c.LC:o=[i.left,i.top+Math.floor(i.height/2)];break;case c.RC:o=[i.right,i.top+Math.floor(i.height/2)];break;case c.CC:o=[i.left+Math.floor(i.width/2),i.top+Math.floor(i.height/2)];break;default:}return this._getAlignToXY(this._posNode,r[0],o[0],o[1])},_setAlignCenter:function(e){return e&&this.set(r,{node:e===!0?null:e,points:[c.CC,c.CC]}),e},_uiSetAlign:function(e,t){var n=this._getAlignedXY(e,t);n&&this._doAlign(n)},_uiSetVisiblePosAlign:function(e){e?this._attachPosAlignUIHandles():this._detachPosAlignUIHandles()},_attachPosAlignUIHandles:function(){if(this._posAlignUIHandles)return;var t=this.get(o),n=e.bind(this._syncUIPosAlign,this),r=[];e.Array.each(this.get(i),function(i){var s=i.eventName,o=e.one(i.node)||t;s&&r.push(o.on(s,n))}),this._posAlignUIHandles=r},_detachPosAlignUIHandles:function(){var t=this._posAlignUIHandles;t&&((new e.EventHandle(t)).detach(),this._posAlignUIHandles=null)},_doAlign:function(e){e&&this.move(e)},_getRegion:function(t){var n;return t?(t=e.Node.one(t),t&&(n=t.get(f))):n=this._posNode.get(l),n},_afterAlignChange:function(e){var t=e.newVal;t&&this._uiSetAlign(t.node,t.points)},_afterAlignOnChange:function(e){this._detachPosAlignUIHandles(),this.get(s)&&this._attachPosAlignUIHandles()}},e.WidgetPositionAlign=c},"@VERSION@",{requires:["widget-position"]});
