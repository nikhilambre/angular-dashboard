			(function() {

				function SVGInput( el, options ) {
					this.el = el;
					this.inputEl = this.el.querySelector( 'input' );
					this.init();
				}

				SVGInput.prototype.init = function() {
					this.shapeEl = this.el.querySelector( 'span.morph-shape' );

					var s = Snap( this.shapeEl.querySelector( 'svg' ) );
					this.pathEl = s.select( 'path' );
					this.paths = {
						reset : this.pathEl.attr( 'd' ),
						active : this.shapeEl.getAttribute( 'data-morph-active' )
					};

					this.initEvents();
				};

				SVGInput.prototype.initEvents = function() {
					if( this.inputEl.type === 'checkbox' || this.inputEl.type === 'radio' ) {
						this.el.addEventListener( 'mousedown', this.down.bind(this) );
						this.el.addEventListener( 'touchstart', this.down.bind(this) );

						this.el.addEventListener( 'mouseup', this.up.bind(this) );
						this.el.addEventListener( 'touchend', this.up.bind(this) );

						this.el.addEventListener( 'mouseout', this.up.bind(this) );
					}
					else {
						this.el.addEventListener( 'click', this.toggle.bind(this) );
					}
				};

				SVGInput.prototype.down = function() {
					this.pathEl.stop().animate( { 'path' : this.paths.active }, 150, mina.easein );
				};

				SVGInput.prototype.up = function() {
					this.pathEl.stop().animate( { 'path' : this.paths.reset }, 1000, mina.elastic );
				};

				SVGInput.prototype.toggle = function() {
					var self = this;

					this.pathEl.stop().animate( { 'path' : this.paths.active }, 200, mina.easein, function() {
						self.pathEl.stop().animate( { 'path' : self.paths.reset }, 600, mina.elastic );
					} );
				};

				[].slice.call( document.querySelectorAll( '.input-wrap' ) ).forEach( function( el ) {
					new SVGInput( el );
				} );

			})();