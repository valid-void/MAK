<script>
    function hover_arist_name(id_blue_div, id_empty_spacing_div, id_parent, id_child){
        

        var loading_speed = 100;
        var deloading_speed = 50;
        let StartProducing = [];
        // var StartProducing = null;
        var kids = [].reverse.call($(id_child).children());
        var kids_array_length = kids.length - 1;

        console.log('kids_array_length is:' + kids_array_length );

        $('#' + id_blue_div).css('visibility', 'visible');
        //console.log('display kids length:' + kids.length );
        //console.log('display kids length ----1111:' + kids_array_length );
        //var isHovered = $(id_parent).is(':hover'); // returns true or false


        //var set_time_for_spacing_div = kids.length * loading_speed;
        //var timing_counter = 0;


        //StartProducing.forEach(clearTimeout);
        var isHovered_now = $(id_parent).is(':hover'); // returns true or false

        //if ( isHovered_now == true ) {
        // while ( isHovered_now == true ) {
        //     console.log('Text wird jetzt eingerückt' );
        //     StartProducingImages();
        //     //StartSpacingDiv();
        // //} else if ( isHovered_now == false ) { 
        // } else { 
        //     console.log('hide spacing div' );
        //     console.log(Start deleting images);
        //     DeleteImages();
        // }


            
 
        
        if (isHovered_now == true) {
            StartProducingImages();
        } else if (isHovered_now == false) {
            DeleteImages();
        }




        //StartProducingImages();

        function DeleteImages(){
            console.log('DeleteImages');
            $.each(kids, function (i, kid) {
                console.log('tray clear timeout');
                
                for(int i = 0; i< StartProducing.length; i++){
                    clearTimeout(StartProducing[i]);
                    console.log(StartProducing[i]);

                }

                setTimeout(function () {
                    //$('#' + id_blue_div).css('visibility', 'hidden');
                    //$('#' + id_blue_div).css('display', 'none');
                    $(kid).css('display', 'none');
                    //clearTimeout(timer_spacing_div);
                    //$('#' + id_empty_spacing_div).css('display', 'none');
                    //$('#' + id_empty_spacing_div).css('width', '0px');
                }, i * deloading_speed);
            })
        }

        function StartProducingImages(){
            console.log('function StartProducingImages is starting');
                $.each(kids, function (i, kid) {
                    console.log('display i:' + i );
                    var timer_id = 
                    StartProducing.push() = window.setTimeout(function () {
                        $(kid).css('display', 'inline');
                    }, i * loading_speed);
                })
            
        }



        












            //for ( i = 0 ; i <= kids_array_length; i++ ){
                
                //timing_counter = time_counter + loading_speed;
                //console.log('display timing_counter:' + timing_counter );

                //var isHovered_now = $(id_parent).is(':hover'); // returns true or false
                // if ( set_time_for_spacing_div = timing_counter && isHovered_now == true ) {
                //     console.log('Text wird jetzt eingerückt' );
                //     //StartSpacingDiv();
                // } else if ( isHovered_now == false ) { 
                //     console.log('hide spacing div' );
                //     //stopLoadingImages();
                // } else { 
                //     console.log('i is still updating:' );
                // }
            //}
        



            // function StartSpacingDiv() {
            //         console.log('inside the final loop' + i );
            //         $('#' + id_empty_spacing_div).css('display', 'inline-block');
            //         $('#' + id_empty_spacing_div).css('width', '100%');
            //         $('#' + id_blue_div).css('visibility', 'hidden');
            // }

    }
</script>