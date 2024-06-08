class OnlineStatus extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

  shadowRoot.innerHTML = `<style>
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  inline-size: 1px;
  block-size: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}
:host {
  display: block;
  position: fixed;
  inset-inline-end: 1rem;
  inset-block-end: 1rem;
}

svg {
  color: var(--color-online, hsl(209 18% 30%));
  inline-size: 100%;
  block-size: auto;
  max-inline-size: 2rem;
}

svg > circle {
  color: var(--color-background, hsl(216 33% 97%));
}

svg > g {
  color: var(--color-online, hsl(209 18% 30%));
  transition: color 0.4s ease-in-out;
}

svg > path {
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 0.3s ease-in-out;
}

svg.offline > g {
  color: var(--color-offline, hsl(210 16% 82%));
}

svg.offline > path {
  stroke-dashoffset: 0;
  transition-delay: 0.3s;
}
</style>
<p class="visually-hidden" role="alert" aria-live="polite"></p>
<svg style="display: block;" viewBox="-22 -23 44 44">
  <circle fill="currentColor" cy="-1" r="22" />
  <g>
    <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" d="M -3.5 3.5 A 5 5 0 0 1 3.5 3.5 M -7 0 A 10 10 0 0 1 7 0 M -10.5 -3.5 A 15 15 0 0 1 10.5 -3.5" />
    <circle fill="currentColor" cy="7" r="1.75" />
  </g>
  <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" d="M -7 -10.5 7 8.5" />
</svg>`;
  }

  connectedCallback() {
    this.handleStatus = this.handleStatus.bind(this);

    this.handleStatus();
    window.addEventListener("online", this.handleStatus);
    window.addEventListener("offline", this.handleStatus);
  }

  disconnectedCallback() {
    window.removeEventListener("online", this.handleStatus);
    window.removeEventListener("offline", this.handleStatus);
  }

  handleStatus() {
    const { shadowRoot } = this;
    const status = shadowRoot.querySelector("p");
    const signal = shadowRoot.querySelector("svg");

    const { onLine } = navigator;
    if (onLine) {
      status.textContent = "You are online";
      signal.classList.remove("offline");
    } else {
      status.textContent = "You are offline";
      signal.classList.add("offline");
    }
  }
}

customElements.define("online-status", OnlineStatus);
