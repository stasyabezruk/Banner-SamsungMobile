var BannerPhone = (function () {
	function Constructor (root) {
		this.root = document.querySelector(root);
		this.phone = this.root.querySelector('#phone-wrapper');
		this.dragBar = this.root.querySelector('#dragBar');
		this.dragBarWrapper = this.root.querySelector('.dragBar-wrapper');
		this.textContent = this.root.querySelector('.text-content');
		this.dragText = this.root.querySelector('.label-wrapper');
		this.buyBtn = this.root.querySelector('.buyBtn');
		
		this.loadBanner();
		this.scrollPhone();
	}

	Constructor.prototype.scrollPhone = function () {
		var self = this;

		this.dragBar.addEventListener('input', function () {
			var valueDragBar = self.dragBar.value,				
			    newBgPos = -Number(221*valueDragBar);
			    console.log(valueDragBar);			    
				self.phone.style.backgroundPositionY = newBgPos + 'px';
		});
	};

	Constructor.prototype.moveEl = function (el) {
		el.style.top = parseInt(el.offsetTop) + (-5) + 'px';

		var self = this,
			animate = window.setTimeout ( function () {
				self.moveEl(el);
			}, 12);	
		if (el.offsetTop == 15) {			
			window.clearTimeout(animate);
			
			var timeout1 = window.setTimeout(function () {self.dragText.style.opacity = '1';}, 500);
			var timeout2 = window.setTimeout(function () {self.buyBtn.style.opacity = '1'}, 1400);
		}
	};

	Constructor.prototype.loadBanner = function () {
		var self = this;
		
		this.moveEl(this.phone);
		var timeoutID = window.setTimeout(function () {self.moveEl(self.dragBarWrapper)}, 400);
		this.textContent.style.opacity = '1';
	};

	return Constructor;
})();

window.onload = function() {
	var banner1 = new BannerPhone('#moving-phone');	
}