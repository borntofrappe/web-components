# web-components

## text-to-speech

> spell out the input text

```html
<text-to-speech>HTML</text-to-speech>
```

### Attributes

- `speech`: alternative text `[textContent]`

```html
<text-to-speech speech="Cascading Style Sheets">CSS</text-to-speech>
```

### Styles

- `tts-button`: button element exposed from the shadow DOM

```css
::part(tts-button) {
  /* ... */
}
```

## typewriter-effect

> display text with a typewriter effect

```html
<typewriter-effect>is production ready</typewriter-effect>
```

```html
<typewriter-effect
  lines="dropped out of college.feels like SPA with SSR.is a library, like React"
  rate="4"
>
  is production ready
</typewriter-effect>
```

### Attributes

- `lines`: lines of text to display in succession

- `separator`: character separating multiple lines [`.`]

- `rate`: time to show and remove one letter [`5`]

- `delay`: milliseconds to display a complete line [`3000`]

## online-status

> notify the online status of the browser

```html
<online-status></online-status>
```

### Styles

- `--color-background`: color of the circle behind the online/offline icon

- `--color-online` and `--color-offline`: color of the icon in the online and offline state

## dot-matrix-display

> reproduce ASCII art with a low-res, SVG, dot-matrix display

```html
<dot-matrix-display>
  <pre><!-- ... --></pre>
</dot-matrix-display>
```

```html
<pre>
o o ooo o   o    o 
o o o   o   o   o o
ooo oo  o   o   o o
o o o   o   o   o o
o o ooo ooo ooo  o 
</pre>
```

```html
<pre rounding="0.1" inset="0.2">
                       
.......................
..o.o.ooo.o...o....o...
..o.o.o...o...o...o.o..
..ooo.oo..o...o...o.o..
..o.o.o...o...o...o.o..
..o.o.ooo.ooo.ooo..o...
.......................
                       </pre
>
```

### Attributes

- `dot`: dot character [`"o"`]

- `matrix`: matrix character [`"."`]

- `inset`: "padding" for the base shape [`"0.2"`]

- `rounding`: rounding for the base shape [`"0.5"`]

### Styles

- `color` and `background`: color of the base cell through inheritance and color of the background through the container

- `--color-dot`, `--color-matrix`, and `--color-display`: color of the circle used for the dot character [`"currentColor"`], color of the circles used for the matrix [`"var(--color-dot)"`], color of the makeshift background [`"none"`]

## toggle-password

> toggle an input of type password to and from type text

```html
<toggle-password>
  <input type="password" />
</toggle-password>
```
