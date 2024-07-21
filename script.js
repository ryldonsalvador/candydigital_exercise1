var tl = new TimelineLite();

function initThis(){
	setElements();
}

function setElements(){
	TweenMax.set('#main_content', {opacity:1, delay:.3});
	// frame 2
	TweenMax.set('#frame2_text_1', {scale:2, opacity:0});
	TweenMax.set('#frame2_logo', {x:300, opacity:0})
	TweenMax.set('#frame2_cta', {x:-300, opacity:0})
	TweenMax.set('.f2_txt_stag', {x:-20, opacity:0})
	// frame 3
	TweenMax.set('#frame3_logo', {opacity:0})
	TweenMax.set('#frame3_cta', {opacity:0})
	TweenMax.set('#frame3_text_1, #frame3_text_2', {opacity:0, x:-200})
	// frame 4
	TweenMax.set('#frame4_text_1, #frame4_text_2', {opacity:0, x:-200})

	// frame 5
	TweenMax.set('#frame5_text1', {y:-50, opacity:0});
	TweenMax.set('#frame5_text2', {rotate:90, scale:5, opacity:0});
	TweenMax.delayedCall(0.3, introFrame);
	// frame 1
	TweenMax.set('#intro_img', {scale:2, opacity:0})
}

function introFrame() {
	// Frame1
 	tl.to('#intro_img', {
 		z:"0.1px", rotation: 0.02, scale:1,
    	opacity: 1,
    	stagger: 0,
    	ease:Power2.easeOut
	})
 	.to('.intro_img1', 3, {x:-250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-1")
 	.to('.intro_img2', 3, {x:250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-3")
 	.to('.intro_img3', 3, {x:-250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-3")
 	.to('.intro_img4', 3, {x:250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-3")
 	.to('.intro_img5', 3, {x:-250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-3")
 	.to('.intro_img6', 3, {x:250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-3")
 	.to('.intro_img7', 3, {x:-250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-3")
 	.to('.intro_img8', 3, {x:250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-3")
 	.to('.intro_img9', 3, {x:-250, z:"0.1px", rotation: 0.02, ease:Power2.easeOut}, "=-3")
	.to('#intro_img', {
 		z:"0.1px", rotation: 0.02, scale:2,
    	opacity: 0,
    	stagger: 0.1,
    	ease:Power2.easeOut
	}, "=-.5")
	.to('#bg', .5, {backgroundColor:"#fc68c7" ,ease:Power2.easeOut}, "=-.4")
	.to('.f2_txt', {
 		z:"0.1px", rotation: 0.02, scale:1, x:0,
    	opacity: 1,
    	stagger: 0.3,
    	ease:Power4.easeOut
	}, "=-.4")
	.to('.f2_txt_stag', {
 		z:"0.1px", rotation: 0.02, x:0,
    	opacity: 1,
    	stagger: 0.3,
    	ease:Power3.easeOut
	}, "=-.8")
	.to('.f2_txt_stag', {
		delay:1, 
 		z:"0.1px", rotation: 0.02, x:0,
 		scale:6,
    	opacity: 0,
    	stagger: 0.1,
    	ease:Power2.easeOut
	})
	.to('#frame2_text_1', 0.5, {z:"0.1px", rotation: 0.02, x:0, scale:3, opacity:0, ease:Power4.easeOut}, "=-.3")
	.to('#bg', .5, {backgroundColor:"#221649" ,ease:Power2.easeOut}, "=-.5")
	.to('#frame2_logo, #frame2_cta', .5, {opacity:0 ,ease:Power2.easeOut}, "=-.5")
	.to('#frame3_logo, #frame3_cta', .5, {opacity:1 ,ease:Power2.easeOut}, "=-.5")
	.to('#frame3_text_1', .5, {x:0, opacity:1 ,ease:Power2.easeOut}, "=-.5")
	.to('#frame3_text_2', .5, {x:0, opacity:1 ,ease:Power2.easeOut})
	.to('#frame3_text_1, #frame3_text_2', .5, {delay:1, x:300, opacity:1 ,ease:Power2.easeOut})
	.to('#frame4_text_1', .5, {x:0, opacity:1 ,ease:Power2.easeOut}, "=-.5")
	.to('#frame4_text_2', .5, {x:0, opacity:1 ,ease:Power2.easeOut})
	.to('#frame4_text_1, #frame4_text_2', .5, {delay:1, x:300, opacity:0 ,ease:Power2.easeOut})
	.to('#bg', .5, {backgroundColor:"#fc68c7" ,ease:Power2.easeOut}, "=-.5")
	.to('#frame2_logo, #frame2_cta', .5, {opacity:1 ,ease:Power2.easeOut}, "=-.5")
	.to('#frame3_logo, #frame3_cta', .5, {opacity:0 ,ease:Power2.easeOut}, "=-.5")
	.to('#frame5_text1', .5, {y:0, opacity:1 ,ease:Power4.easeOut}, "=-.5")
	.to('#frame5_image_holder1', .5, {height:"121px" ,ease:Power4.easeOut})
	.to('#frame5_text2', .5, {z:"0.1px", rotation: 0.02, scale:1, rotate:0, opacity:1 ,ease:Power4.easeOut})
	.to('#frame5_text2', .5, {z:"0.1px", scale:1, rotate:10, opacity:1 ,ease:Power4.easeOut}, "=-.2")
	.to('#frame5_text2', .5, {z:"0.1px", scale:1, rotate:0, opacity:1 ,ease:Power4.easeOut})
}

window.addEventListener('load', initThis);