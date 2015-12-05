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

By default the $delay is set to 0.

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

#### backgroundSize
> Set background size for a background image

Syntax
```html
	@include backgroundSize($size);
```

Example
```html
	.element1 {
		@include backgroundSize(100%);
	}

	.element2 {
		@include backgroundSize(contain);
	}

	Output CSS - 
	.element1 {
		-webkit-background-size: 100% auto;
  		-moz-background-size: 100% auto;
  		-o-background-size: 100% auto;
  		background-size: 100% auto;
	}

	.element2 {
		-webkit-background-size: contain;
  		-moz-background-size: contain;
  		-o-background-size: contain;
  		background-size: contain;
	}
```

#### linearGradient
> Add a linear gradient to any element's background

Syntax
```html
	@include linearGradient($direction, $colors...);
```

Example
```html
	.element {
		@include linearGradient(left, red 5%, blue, yellow, orange);
	}

	Output CSS - 
	.element {
		background: -webkit-linear-gradient(left, red 5%, blue, yellow, orange);
  		background: -moz-linear-gradient(left, red 5%, blue, yellow, orange);
  		background: -o-linear-gradient(left, red 5%, blue, yellow, orange);
  		background: linear-gradient(to right, red 5%, blue, yellow, orange);
	}
```

#### repeatingLinearGradient
> Add a repeating linear gradient to any element's background

Syntax
```html
	@include repeatingLinearGradient($direction, $colors...)
```

Example
```html
	.element {
		@include repeatingLinearGradient(left, red, blue, yellow 5%);
	}

	Output CSS - 
	.element {
		background: -webkit-repeating-linear-gradient(left, red, blue, yellow 5%);
  		background: -moz-repeating-linear-gradient(left, red, blue, yellow 5%);
  		background: -o-repeating-linear-gradient(left, red, blue, yellow 5%);
  		background: repeating-linear-gradient(to right, red, blue, yellow 5%);
	}
```

#### radialGradient
> Add a radial gradient to any element's background

Syntax
```html
	@include radialGradient($gradientValues...);
```

Example
```html
	.element {
		@include radialGradient(red, green, blue);
	}

	Output CSS - 
	.element {
		background: -webkit-radial-gradient(red, green, blue);
  		background: -o-radial-gradient(red, green, blue);
  		background: -moz-radial-gradient(red, green, blue);
  		background: radial-gradient(red, green, blue);
	}
```

#### repeatingRadialGradient
> Add a repeating radial gradient to any element's background

Syntax
```html
	@include repeatingRadialGradient($gradientValues...);
```

Example
```html
	.element {
		@include repeatingRadialGradient(red, yellow, orange);
	}

	Output CSS - 
	.element {
		background: -webkit-repeating-radial-gradient(red, yellow, orange);
  		background: -o-repeating-radial-gradient(red, yellow, orange);
  		background: -moz-repeating-radial-gradient(red, yellow, orange);
  		background: repeating-radial-gradient(red, yellow, orange);
	}
```

### Border mixins

#### border
> Add a border to any element

Syntax
```html
	@include border($width, $style, $color);
```

Example
```html
	.element {
		@include border(1px, dotted, #000);
	}

	Output CSS - 
	.element {
		border: 1px dotted #000;
	}
```

#### borderRadius
> Add border radius to an element

Syntax
```html
	@include borderRadius($radius);
```

Example
```html
	.element {
		@include borderRadius(5px);
	}

	Output CSS - 
	.element {
		-webkit-border-radius: 5px;
  		-moz-border-radius: 5px;
  		border-radius: 5px;
	}
```

#### borderRadiusEdge
> Add border radius to a specifix edge(left/right) of an element

Syntax
```html
	@include borderRadiusEdge($edge, $radius);
```

Example
```html
	.element {
		@include borderRadiusEdge(left, 4px);
	}

	Output CSS - 
	.element {
		border-top-left-radius: 4px;
  		border-bottom-left-radius: 4px;
	}
```

#### sideBorderAndRadius
> Add border and a radius to any side(top/bottom/left/right) of an element

Syntax
```html
	@include sideBorderAndRadius($side, $width, $type, $color, $radius);
```

By default the $radius is set to 0.

Example
```html
	.element1 {
		@include sideBorderAndRadius(top, 2px, solid, #333);
	}
	.element2 {
		@include sideBorderAndRadius(left, 2px, solid, #333, 50%);
	}

	Output CSS - 
	.element1 {
		border-top: 2px solid #333;
  		border-bottom: none;
  		border-left: none;
  		border-right: none;
  		-webkit-border-radius: 0;
		moz-border-radius: 0;
  		border-radius: 0;
	}

	.element2 {
		border-left: 2px solid #333;
  		border-top: none;
  		border-right: none;
  		border-bottom: none;
  		-webkit-border-radius: 50%;
  		-moz-border-radius: 50%;
  		border-radius: 50%;
	}
```

#### borderImage
> Add a border image to any element

Syntax
```html
	@include borderImage($borderWidth, $url, $mode, $sliceTop, $sliceRight, $sliceBottom, $sliceLeft)
```

By default $sliceRight, $sliceBottom and $sliceLeft are set to 0.

Example
```html
	.element {
		@include borderImage(10px, "https://mdn.mozillademos.org/files/4127/border.png", round, 30);
	}

	Output CSS - 
	.element {
		border-width: 10px;
  		-webkit-border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 30 round;
  		-moz-border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 30 round;
  		-o-border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 30 round;
  		border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 30 round;
	}
```


