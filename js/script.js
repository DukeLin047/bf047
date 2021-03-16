$( document ).on( "pagecreate", "#home", function() {
$( document ).on( "swipeleft swiperight", "#home", function( e ) {
/*當開啟網頁時panel會去自動偵測有沒有向左滑跟向右滑的動作
    如果有向左滑的動作就開啟右邊的panel
    如果有向右滑的動作就開啟左邊的panel*/
       	 if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
       	    if ( e.type === "swipeleft" ) {
       	        $( "#right-panel02" ).panel( "open" );
       	      } else if ( e.type === "swiperight" ) {
       	         $( "#left-panel02" ).panel( "open" );
        	         }
         	      }
      	  });
});