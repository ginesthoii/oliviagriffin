/***************** Waypoints ******************/
$(document).ready(function() {

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInDown');
    }, {
        offset: '55%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

});

/***************** Slide-In Nav ******************/
$(window).load(function() {

    $('.nav_slide_button').click(function() {
        $('.pull').slideToggle();
    });

});

/***************** Smooth Scrolling ******************/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000); // 2 seconds animation
                return false;
            }
        }
    });
});

/***************** Nav Transformicon ******************/
document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
});

/***************** Overlays ******************/
$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/
$(window).load(function() {

    $('#portfolioSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: false,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

    $('#servicesSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

    $('#teamSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

});

/***************** ScrollSpy for Active Navbar Links ******************/
$(document).ready(function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    const options = {
        threshold: 0.5, // 50% of the section should be visible to trigger
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

/***************** Navbar Show/Hide on Scroll ******************/
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.style.top = '-80px'; // Hide navbar
    } else {
        // Scroll Up
        navbar.style.top = '0'; // Show navbar
    }
    lastScrollTop = scrollTop;
});