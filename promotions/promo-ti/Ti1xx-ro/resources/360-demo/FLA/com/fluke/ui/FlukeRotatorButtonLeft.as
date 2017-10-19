package com.fluke.ui
{
	import flash.display.*;
	import flash.events.*;
	import flash.text.*;
	import com.fluke.ui.FlukeRotatorButton;
	
	public class FlukeRotatorButtonLeft extends FlukeRotatorButton
	{

		override public function rotateMe(event:MouseEvent):void {
			
			// Label for the "last" frame (when we hit this, we'll turn it around)
			var mEnd:String = "wrap_" + _mc.name;
			var mEndNumber:uint = getFrameByLabel(mEnd);
			
			// Label for the "top" frame (after we hit this, we'll go to first frame)
			var mTop:String = "top_" + _mc.name;
			
			// Label for the "last" frame (after we hit this, we'll go to first frame)
			var mBottom:String = "bottom_" + _mc.name;
						
			resetBoard();

			// If we're at top or bottom, go to first frame
			if (_mc.currentLabel == mTop) {
				_mc.gotoAndPlay(2);
				_frameMap[2].click();
			}
			
			else if (_mc.currentLabel == mBottom) {
				_mc.gotoAndPlay(2);
				_frameMap[2].click();
			}			
			
			// Otherwise, move ahead/back
			else {

				_mc.prevFrame();

				// Current Frame ID
				var cf:uint = _mc.currentFrame;

				// trace(" | CF: " + cf + " ... " + _frameMap[cf] );
				
				if(_mc.currentFrame ==1) {
					cf = mEndNumber;
					trace("Going to " + mEnd);
					_mc.gotoAndPlay( mEnd );
				}
				
				// trace(cf);
				if( _frameMap[cf] ) 
					_frameMap[cf].click();
			
			}
			
			// Ensure that top and bottom start at ground zero
			lastClip = '';
			
		}
		

		private function getFrameByLabel( frameLabel: String ):int {
		
			var scene:Scene = _mc.currentScene;
		
			for( var i:int ; i < scene.labels.length ; ++i ) {
				if( scene.labels[i].name == frameLabel )
					return scene.labels[i].frame;
			}
			
			return 0;
		}

	}
	
}