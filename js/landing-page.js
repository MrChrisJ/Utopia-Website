$( document ).ready(function() {

    /* Toggle video play/pause in the intro header */
    var videoPlaying = true;

    $(".intro-header .btn-video-toggle").on("click", function() {
        if (videoPlaying) {
            $(".intro-video").get(0).pause();
            $(".intro-header .btn-video-toggle span").removeClass("glyphicon-pause")
                                                     .addClass("glyphicon-play")
        } else {
            $(".intro-video").get(0).play();
            $(".intro-header .btn-video-toggle span").removeClass("glyphicon-play")
                                                     .addClass("glyphicon-pause");
        }

        videoPlaying = !videoPlaying;
    });


    /* Detect video ended */
    $(".intro-video").bind("ended", function() {
        $(".intro-header .btn-video-toggle span").removeClass("glyphicon-pause")
                                                 .addClass("glyphicon-play");
        videoPlaying = false;
    });


});