$(document).ready(function(){
    // DESKTOP VERSION
    const sliderWrapperDesktop = $('.slider-wrapper-desktop')
    function slideDesktop(width){
        if(sliderWrapperDesktop.css('marginLeft') == '-1800px'){
            sliderWrapperDesktop.css('marginLeft', '0px')
        }else{
            sliderWrapperDesktop.animate({marginLeft: width})
        }
    }

    const autoSlideDesktop = setInterval(() => {
        slideDesktop('-=450px')
    }, 2000)

    $('#nextDesktop').click(function(){
        if(sliderWrapperDesktop.css('marginLeft') == '-1350px')
            sliderWrapperDesktop.css('marginLeft', '0px')
        else
            slideDesktop('-=450px')
        clearInterval(autoSlideDesktop)
    })

    $('#prevDesktop').click(function(){
        if(sliderWrapperDesktop.css('marginLeft') == '0px')
            sliderWrapperDesktop.css('marginLeft', '-1350px')
        else
            slideDesktop('+=450px')
        clearInterval(autoSlideDesktop)
    })


    // MOBILE VERSION
    const sliderWrapperMobile = $('.slider-wrapper-mobile')
    function slideMobile(width){
        if(sliderWrapperMobile.css('marginLeft') == '-440px'){
            sliderWrapperMobile.css('marginLeft', '0px')
        }else{
            sliderWrapperMobile.animate({marginLeft: width})
        }
    }

    const autoSlideMobile = setInterval(() => {
        slideMobile('-=110px')
    }, 2000)

    $('#nextMobile').click(function(){
        if(sliderWrapperMobile.css('marginLeft') == '-220px')
            sliderWrapperMobile.css('marginLeft', '0px')
        else
            slideMobile('-=110px')
        clearInterval(autoSlideMobile)
    })

    $('#prevMobile').click(function(){
        if(sliderWrapperMobile.css('marginLeft') == '0px')
            sliderWrapperMobile.css('marginLeft', '-220px')
        else
            slideMobile('+=100px')
        clearInterval(autoSlideMobile)
    })
})
