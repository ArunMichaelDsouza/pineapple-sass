# pineapple-sass
A must-have Sass mixin library for all your Sassy needs

<img src="https://raw.githubusercontent.com/ArunMichaelDsouza/pineapple-sass/master/pineapple-sass.png" width="160" height="auto" />

* Easy to use
* Comprehensive list of mixins
* Forget about all those vendor prefixes
* Support for CSS3 animations, transforms and transitions
* Support for CSS3 filters
* Bundled with media query mixins

## Usage

The [_pineapple-sass.scss](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/build/_pineapple-sass.scss) build script is a Sass partial that can be included in your sass project. All pineapple sass mixins will be then readily avaialble for your use.

You can also use the individual mixin components present in the ``src`` folder - 

* [Animations component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_animations.scss)
* [Backgrounds component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_backgrounds.scss)
* [Borders component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_borders.scss)
* [Display component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_display.scss)
* [Filters component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_filters.scss)
* [Fonts component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_fonts.scss)
* [Media Queries component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_media-queries.scss)
* [Shadows component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_media-queries.scss)
* [Text component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_text.scss)
* [Transforms component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_transforms.scss)
* [Utilities component](https://github.com/ArunMichaelDsouza/pineapple-sass/blob/master/src/_utilities.scss)

## Mixins

### Animation mixins

#### transition
> Add CSS transition to any element

Syntax
```html
	@include transition($type, $duration, $easing);
```

Example
```html
	.element {
		@include transition(opacity, .20s, ease-in);
	}

	Output CSS - 
	.element {
	  -webkit-transition: opacity 0.2s ease-in;
	  -moz-transition: opacity 0.2s ease-in;
	  -o-transition: opacity 0.2s ease-in;
	  -ms-transition: opacity 0.2s ease-in;
	  transition: opacity 0.2s ease-in;
	}
```
#### animation
> Animate an element

Syntax
```html
	@include animation($animation, $duration, $iteration, $delay);
```

By default the delay is set to 0.

Example
```html
	.element {
		@include animation(test, 3s, infinte, 2s);
	}

	Output CSS - 
	.element {
		-webkit-animation: test 3s 2s infinte;
  		-moz-animation: test 3s 2s infinte;
  		-o-animation: test 3s 2s infinte;
 		animation: test 3s 2s infinte;
	}
```
### Background mixins

#### backgroundOpacity
> Add opacity to a background color. Converts a HEX value into its rgba() equivalent

Syntax
```html
	@include backgroundOpacity($color, $opacity);
```

Example
```html
	.element {
		@include backgroundOpacity(#50a4e2, .5);
	}

	Output CSS - 
	.element {
		background-color: rgba(80, 164, 226, 0.5);
	}
```




