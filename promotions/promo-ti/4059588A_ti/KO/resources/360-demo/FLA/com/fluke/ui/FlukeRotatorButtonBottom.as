package com.fluke.ui
{
	import flash.display.*;
	import flash.events.*;
	import flash.text.*;
	import com.fluke.ui.FlukeRotatorButton;
	
	public class FlukeRotatorButtonBottom extends FlukeRotatorButton
	{
		
		override public function rotateMe(event:MouseEvent):void {
				
			// Label for the "last" frame (when we hit this, we'll turn it around)
			var mBottom:String = "bottom_" + _mc.name;  // i.e. bottom_Ti125_rotate_mc
			var mTop:String = "top_" + _mc.name;  // i.e. top_Ti125_rotate_mc
			var mFront:String = "front_" + _mc.name;  // i.e. top_Ti125_rotate_mc
			var mBack:String = "back_" + _mc.name;  // i.e. top_Ti125_rotate_mc

			resetBoard();
			
			trace("Last Clip Was: " + lastClip);
			
			if ( lastClip == mBottom ) {
				_mc.gotoAndStop((mFront));
				lastClip = (mFront);
			}
			else if ( lastClip == (mFront) ) {
				_mc.gotoAndStop(mTop);
				lastClip = (mTop);
			}
			else if ( lastClip == (mTop) ) {
				_mc.gotoAndStop(mBack);
				lastClip = mBack;
			}
			else if ( lastClip == (mBack) ) {
				_mc.gotoAndStop(mBottom);
				lastClip = mBottom;
			}
			else {
				_mc.gotoAndStop(mBottom);
				lastClip = mBottom;
			}
			
			trace("Last Clip Is Now: " + lastClip);
			
			
		}


	}
	
}