package com.fluke.ui
{
	import flash.display.*;
	import flash.events.*;
	import flash.text.*;
	import com.fluke.ui.FlukeRotatorButton;
	
	public class FlukeRotatorButtonRight extends FlukeRotatorButton
	{

		override public function rotateMe(event:MouseEvent):void {

			// Label for the "last" frame (when we hit this, we'll turn it around)
			var mEnd:String = "end_" + _mc.name;  // i.e. end_Ti125_rotate_mc
						
			resetBoard();
			
			_mc.nextFrame();
						
			var cf:uint = _mc.currentFrame;

			// trace("CurrentLabel: " + _mc.currentLabel + " ... Looking for: " + mEnd + " | CF: " + cf + " ... " + _frameMap[cf] );

			if( _mc.currentLabel == mEnd ) {
				// trace("Bounced back .... playing 2");
				cf = 2;
				_mc.gotoAndPlay(2);
			}
			
			// trace(cf);
			if( _frameMap[cf] ) 
				_frameMap[cf].click();
				
			// Ensure that top and bottom start at ground zero
			lastClip = '';
		}

	}
	
}