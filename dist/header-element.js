import{s as t,i as o,x as l}from"./lit-element-urrf30Hv.js";class i extends t{static styles=o`
    .frame {
      grid-area: frame;
      z-index: 1000;
      position: relative;
      display: grid;
      grid-template-columns: auto auto;
      grid-template-areas: 'title title' 'prev back' 'sponsor sponsor';
      grid-gap: 0.5rem;
    }

    .frame a {
      pointer-events: auto;
      color: white;
      text-decoration:none;
    }

    .frame__title {
      grid-area: title;
      font-size: inherit;
      margin: 0;
      font-weight: inherit;
    }

    .frame__back {
      grid-area: back;     
    }

    .frame__prev {
      grid-area: prev;
    }

    .frame__end{
      grid-area:sponsor;
      justify-self: start;
    }

    @media screen and (min-width: 53em) {
        .frame {
          grid-template-columns: auto auto auto 1fr;
          grid-template-areas:  'title prev back sponsor';
          align-content: space-between;
          align-items: end;
          grid-gap: 2rem;
        }
      
        .frame__title::after {
          content: '_';
        }
        .frame__title::before {
          content: '_';
        }
        .frame__end{
          justify-self: end;
        }
    }

    // tooltip animation ------------------------
    @keyframes loaderAnim {
      to {
        opacity: 1;
        transform: scale3d(0.5, 0.5, 1);
      }
    }

    /* width */
    ::-webkit-scrollbar {
      width: 1px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #aacb1964;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #abcb19;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #abcb19;
    }
    .trigger {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none;
      cursor: pointer;
      color: var(--color-trigger);
    }


    .glitch {
      animation-name: glitch-anim;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .glitch--1 {
      animation-delay: 16s;
    }

    .glitch--2 {
      animation-delay: 12s;
    }

    @keyframes glitch-anim {
      0% { 
        transform: translate3d(-5px,0,0) scale3d(-1,-1,1);
        -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
        clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      }
      2% {
        -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
        clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      }
      4% {
        -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
        clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      }
      5% {
        -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
        clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      }
      6% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      }
      7% {
        -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
        clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      }
      8% {
        -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
        clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      }
      9% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
        clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      }
      9.9% {
        transform: translate3d(-5px,0,0) scale3d(-1,-1,1);
      }
      10%, 100% {
        transform: translate3d(0,0,0) scale3d(1,1,1);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }

    .tooltip {
        --tt-width: 200px;
      --tt-height: 250px;
      --tt-columns: 3;
      --tt-rows: 4;
      --tt-bg-color: #4d25b0;
      --tt-text-color: #abcb19;
      position: absolute;
      pointer-events: none;
      opacity: 0;
      top: 50%;
      left: 50%;
      width: var(--tt-width);
      height: var(--tt-height);
      display: grid;
      grid-template-areas: 'tooltip';
    }

    .tooltip--style-alt {
      --tt-bg-color: #94ad24;
        --tt-text-color: #2e3023;
    }

    .tooltip--show {
      opacity: 1;
    }

    .tooltip__bg {
      grid-area: tooltip;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(var(--tt-columns), 1fr);
      grid-template-rows: repeat(var(--tt-rows), 1fr);
      /* background: var(--tt-bg-color); */
    }

    .js .tooltip__bg {
      background: transparent;
    }

    .tooltip__bg div {
      background: var(--tt-bg-color);
        outline: 1px solid var(--tt-bg-color); /* Fixes the gap in FF */
    }

    .tooltip__content {
      grid-area: tooltip;
      color: var(--tt-text-color);
      position: relative;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .tooltip__content-title {
      font-weight: normal;
      margin: 0;
      font-size: 1.5rem;
    }

    .tooltip__content-meta {
      margin: 0;
    }

    .tooltip__content-desc {
      margin: auto 0 0 0;
    }

    @media screen and (min-width: 53em) {
        .tooltip {
            --tt-width: 290px;
            --tt-height: 330px;
        }

        .tooltip__content {
            padding: 2rem;
        }
        
        .tooltip__content-title {
            font-size: 2rem;
        }
        
    }
    svg{
      display: none;
    }
  `;constructor(){super()}render(){return l`
      <div class="frame">
      <h1 class="frame__title"><span class="trigger">1.Header element to left</span></h1>
        <a class="frame__prev"><span class="trigger">2.Header</span></a>
        <a class="frame__back"><span class="trigger">3.Header</span></a>  
        <a class="frame__end" href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">loremllllllllllllllllllllllllllllllllllllllllllllll
          llllllllllllllllllll</a>     
      </div>
      <div id="tooltip-1" class="tooltip" data-rows="12" data-cols="10">
          <div class="tooltip__bg"></div>
          <div class="tooltip__content">
            <h3 class="tooltip__content-title"></h3>
            <p class="tooltip__content-desc"></p>
          </div>
      </div>
      <div id="tooltip-2" class="tooltip tooltip--style-alt" data-rows="9" data-cols="3">
        <div class="tooltip__bg"></div>
        <div class="tooltip__content">
          <h3 class="tooltip__content-title"></h3>
          <p class="tooltip__content-desc"></p>
        </div>
      </div>
      <div id="tooltip-3" class="tooltip" data-rows="8" data-cols="6">
        <div class="tooltip__bg"></div>
        <div class="tooltip__content">
          <h3 class="tooltip__content-title"></h3>
          <p class="tooltip__content-desc"></p>
        </div>
      </div>
      <div id="tooltip-4" class="tooltip tooltip--style-alt" data-rows="1" data-cols="14">
        <div class="tooltip__bg"></div>
        <div class="tooltip__content">
          <h3 class="tooltip__content-title"></h3>
          <p class="tooltip__content-desc"></p>
        </div>
      </div>
      <div id="tooltip-5" class="tooltip" data-rows="8" data-cols="12">
        <div class="tooltip__bg"></div>
        <div class="tooltip__content">
          <h3 class="tooltip__content-title"></h3>
          <p class="tooltip__content-desc"></p>
        </div>
      </div>
      <div id="tooltip-6" class="tooltip" data-rows="5" data-cols="3">
        <div class="tooltip__bg"></div>
        <div class="tooltip__content">
          <h3 class="tooltip__content-title"></h3>
          <p class="tooltip__content-desc"></p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10.2" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    `}}customElements.define("header-component",i);
