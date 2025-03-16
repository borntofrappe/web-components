class BrailleCharacters extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<svg style="display: none;" viewBox="-1.5 -1 17 29.5">
<defs>
<circle id="dot-o" r="0.35" fill="currentColor" />
<circle id="dot-x" r="0.35" fill="currentColor" fill-opacity="0.2" />
<symbol id="letter-a" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-b" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-c" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-d" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-e" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-f" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-g" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-h" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-i" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-j" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-k" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-l" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-m" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-n" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-o" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-p" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-q" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-r" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-s" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-t" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
<symbol id="letter-u" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
</symbol>
<symbol id="letter-v" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
</symbol>
<symbol id="letter-w" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-o" x="1" y="2" />
</symbol>
<symbol id="letter-x" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
</symbol>
<symbol id="letter-y" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
</symbol>
<symbol id="letter-z" viewBox="-0.5 -0.5 2 3">
  <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
</symbol>
<symbol id="letter-." viewBox="-0.5 -0.5 2 3">
  <use href="#dot-x" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-o" x="1" y="2" />
</symbol>
<symbol id="letter-," viewBox="-0.5 -0.5 2 3">
  <use href="#dot-x" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
</symbol>
</defs>
</svg>
`;
  }
}

customElements.define("braille-characters", BrailleCharacters);

class BrailleCipher extends HTMLElement {
  constructor() {
    super();

    const text = this.getAttribute("text") || "text not found";
    const separator = this.getAttribute("separator") || "|";
    const lines = text.split(separator);

    this.setAttribute("title", lines.join(" "));
    const measure = Math.max(...lines.map((d) => d.length));
    const w = 2;
    const h = 3;
    const [gx, gy] = [0.6, 0.7];
    this.innerHTML = `<svg viewBox="0 0 ${measure * (w + gx) - gx} ${
      lines.length * (h + gy) - gy
    }">
      ${lines
        .map((line, y) =>
          line
            .toLowerCase()
            .split("")
            .map(
              (key, x) =>
                `<use href="#letter-${key}" x="${x * (w + gx)}" y="${
                  y * (h + gy)
                }" width="${w}" height="${h}" />`
            )
            .join("")
        )
        .join("")}
    </svg>`;
  }
}

customElements.define("braille-cipher", BrailleCipher);
