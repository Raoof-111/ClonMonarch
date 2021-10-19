$(document).ready(function(){
    $("#sideNav").click(function(){
        $(".menu-alt").slideToggle(1000)
    })
})


AOS.init();



$(document).ready(function(){
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
         
        ]
    });
  });

  $(document).ready(function(){
    $(".counter").each(function(){
        var cnt = $(this),
        countTo = cnt.attr("data-count");
        $({countNum:cnt.text()}).animate({
          countNum:countTo
        },
        {
            duration:10000,
            easing:'linear',
            step:function(){
                cnt.text(Math.floor(this.countNum));
            },
            complete:function(){
                cnt.text(this.countNum)
            }
        }
        )
    })
})
