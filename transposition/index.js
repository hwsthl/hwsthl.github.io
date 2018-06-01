window.onscroll = function() {
	var scrollPos = 0;
	var title = document.getElementsByClassName("title")[0];
	title.style.animationDelay = "0s";
	if (window.pageYOffset > window.innerHeight / 8) {
		title.style.animationName = "fade-out";
		title.style.opacity = 1;
	} else {
		title.style.animationName = "fade-up";
		title.style.opacity = 0;
	}
	var imgs = document.getElementsByClassName("card-image");
	var titles = document.getElementsByClassName("image-title");
	if (window.pageYOffset > window.innerHeight * 2.6) {
		imgs[0].style.left = "0vw";
		titles[0].style.left = "0vw";
		imgs[1].style.right = "0vw";
		titles[1].style.right = "0vw";
		imgs[0].style.opacity = 1;
		imgs[1].style.opacity = 1;
		imgs[0].style.transform = "rotateY(0deg)";
		imgs[1].style.transform = "rotateY(0deg)";
		setTimeout(function(){
			imgs[2].style.left = "0vw";
			titles[2].style.left = "0vw";
			imgs[3].style.right = "0vw";
			titles[3].style.right = "0vw";
			imgs[2].style.opacity = 1;
			imgs[3].style.opacity = 1;
			imgs[2].style.transform = "rotateY(0deg)";
			imgs[3].style.transform = "rotateY(0deg)";
		}, 250);
	} else {
		imgs[0].style.left = "-1vw";
		titles[0].style.left = "-1vw";
		imgs[1].style.right = "-1vw";
		titles[1].style.right = "-1vw";
		imgs[0].style.opacity = 0;
		imgs[1].style.opacity = 0;
		imgs[0].style.transform = "rotateY(10deg)";
		imgs[1].style.transform = "rotateY(-10deg)";
		setTimeout(function(){
			imgs[2].style.left = "-1vw";
			titles[2].style.left = "-1vw";
			imgs[3].style.right = "-1vw";
			titles[3].style.right = "-1vw";
			imgs[2].style.opacity = 0;
			imgs[3].style.opacity = 0;
			imgs[2].style.transform = "rotateY(10deg)";
			imgs[3].style.transform = "rotateY(-10deg)";
		}, 250);
	}
	if (Math.abs(window.pageYOffset - window.innerHeight) < (window.innerHeight/4) || Math.abs(window.pageYOffset - (window.innerHeight*2)) < (window.innerHeight/4)) {
		console.log("match");
		scrollPos = window.pageYOffset;
		setTimeout(function() {
			if (window.pageYOffset - scrollPos == 0) {
				console.log("effect");
				if (Math.abs(window.pageYOffset - window.innerHeight) < (window.innerHeight/4)) {
					var scrolling = setInterval(function() {
						window.scrollTo(window.pageXOffset, window.pageYOffset + ((window.innerHeight - window.pageYOffset) / 4));
					}, 10);
					setTimeout(function() {clearInterval(scrolling);window.scrollTo(window.pageXOffset,window.innerHeight);console.log(player1);player1.playVideo();player2.pauseVideo();}, 150);
				} else if (Math.abs(window.pageYOffset - (window.innerHeight*2)) < (window.innerHeight/4)) {
					var scrolling = setInterval(function() {
						window.scrollTo(window.pageXOffset, window.pageYOffset + (((window.innerHeight*2) - window.pageYOffset) / 4));
					}, 10);
					setTimeout(function() {clearInterval(scrolling);window.scrollTo(window.pageXOffset,window.innerHeight*2);player2.playVideo();player1.pauseVideo();}, 150);
				}
			}
		}, 150);
	}
}

window.addEventListener('resize', function() {
	galleryImg.style.left = (((window.innerWidth/window.innerHeight - galleryImg.clientWidth/galleryImg.clientHeight) / (window.innerWidth/window.innerHeight)) * 50) + "%";
});

var initialize = function() {
	
	var titles = document.getElementsByClassName("image-title");
	for (var i=0; i<4; i++) {
		titles[i].style.height = (document.getElementsByClassName("card-image")[i].clientHeight) + "px";
	}
	titles[1].onmouseover = function() {showCaption(1)};
	titles[1].onmouseout = function() {hideCaption(1)};
	titles[2].onmouseover = function() {showCaption(2)};
	titles[2].onmouseout = function() {hideCaption(2)};
	titles[3].onmouseover = function() {showCaption(3)};
	titles[3].onmouseout = function() {hideCaption(3)};
	titles[0].onmouseover = function() {showCaption(0)};
	titles[0].onmouseout = function() {hideCaption(0)};
	var imgs = document.getElementsByClassName("card-image");
	var srcs = ["before1full.jpg", "after1full.jpg", "before2full.jpg", "after2full.jpg"];
	galleryImg = document.getElementsByClassName("gallery-img")[0];
	galleryImg.open = false;
	galleryImg.onload = function() {
		if (this.open) {
			var offset = imgs[this.index].getBoundingClientRect();
			
			galleryImg.style.left = offset.left + "px";
			galleryImg.style.top = offset.top + "px";
			galleryImg.style.height = imgs[this.index].clientHeight + "px";
			console.log(imgs[this.index].clientWidth);
			galleryImg.style.width = imgs[this.index].clientWidth + "px";
			galleryImg.offsetHeight;
			this.style.transition = "top 0.3s, left 0.3s, height 0.3s, width 0.3s, opacity 0.3s";
			galleryBack.style.display = "block";
			galleryImg.offsetHeight;
			galleryBack.style.opacity = 0.85;
			galleryImg.style.top = "8vh";
			galleryImg.style.height = window.innerHeight * 0.84 + "px";
			galleryImg.style.width = "auto";
			galleryImg.style.left = (((window.innerWidth/window.innerHeight - ((galleryImg.clientWidth/galleryImg.clientHeight) * 0.84)) / (window.innerWidth/window.innerHeight)) * 50) + "%";
			galleryImg.style.width = (window.innerHeight * 0.84) * (galleryImg.clientWidth/galleryImg.clientHeight) + "px";
			this.open = false;
		}
	}
	galleryBack = document.getElementsByClassName("gallery-back")[0];
	galleryBack.onclick = function() {
		this.style.opacity = 0;
		galleryImg.style.opacity = 0;
		setTimeout(function() {
			galleryBack.style.display = "none";
			galleryImg.style.display = "none";
			galleryImg.style.opacity = 1;
		}, 300);
	}
	titles[0].onclick = function() {
		galleryImg.open = true;
		galleryImg.index = 0
		galleryImg.style.display = "block";
		galleryImg.style.transition = "none";
		galleryImg.src = srcs[0];
	}
	titles[1].onclick = function() {
		galleryImg.open = true;
		galleryImg.index = 1
		galleryImg.style.display = "block";
		galleryImg.style.transition = "none";
		galleryImg.src = srcs[1];
	}
	titles[2].onclick = function() {
		galleryImg.open = true;
		galleryImg.index = 2
		galleryImg.style.display = "block";
		galleryImg.style.transition = "none";
		galleryImg.src = srcs[2];
	}
	titles[3].onclick = function() {
		galleryImg.open = true;
		galleryImg.index = 3
		galleryImg.style.display = "block";
		galleryImg.style.transition = "none";
		galleryImg.src = srcs[3];
	}
}

var showCaption = function(index) {
	document.getElementsByClassName("caption")[index].style.opacity = 0.6;
}

var hideCaption = function(index) {
	document.getElementsByClassName("caption")[index].style.opacity = 0;
}

window.onresize = function() {
	var titles = document.getElementsByClassName("image-title");
	for (var i=0; i<4; i++) {
		titles[i].style.height = (document.getElementsByClassName("card-image")[i].clientHeight) + "px";
	}
}