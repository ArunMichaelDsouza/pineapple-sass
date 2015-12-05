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

```html
	.element {
		@include transition(all, .20s, ease-in-out);
	}
```







