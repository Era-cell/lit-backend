import{s as e,i as t,x as o}from"./lit-element-urrf30Hv.js";class r extends e{static properties={message:{type:String}};constructor(){super(),this.message="Hello World!"}static styles=t`
  .demo-3 {
    --img-width: 160px;
    --img-ratio: 0.7;
  }
  
  .demo-4 {
    --img-ratio: 1;
  }
  
  .demo-5 {
    --img-width: 230px;
    --img-ratio: 1.2;
  }
  
  .demo-6 {
    --color-bg: #000;
    --img-ratio: 0.85;
    --img-border-radius: 0px;
  }
  
  .demo-7 {
    --img-ratio: 1;
    --img-border-radius: 4px;
  }
  
  .demo-8 {
    --img-width: 175px;
    --img-ratio: 1;
    --img-border-radius: 4px;
  }
  
  .demo-9 {
    --img-width: 260px;
    --img-ratio: 1;
  }
  
  /* Page Loader */
  .js .loading::before,
  .js .loading::after {
    content: '';
    position: fixed;
    z-index: 2000;
  }
  
  .js .loading::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-bg);
  }
  
  .js .loading::after {
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    border-radius: 50%;
    opacity: 0.4;
    background: var(--color-link);
    animation: loaderAnim 0.7s linear infinite alternate forwards;
  
  }
  
  @keyframes loaderAnim {
    to {
      opacity: 1;
      transform: scale3d(0.5,0.5,1);
    }
  }
  
  a {
    text-decoration: none;
    color: var(--color-link);
    outline: none;
    cursor: pointer;
  }
  
  a:hover {
    color: var(--color-link-hover);
    outline: none;
  }
  
  /* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
  a:focus {
    /* Provide a fallback style for browsers
     that don't support :focus-visible */
    outline: none;
    background: lightgrey;
  }
  
  a:focus:not(:focus-visible) {
    /* Remove the focus indicator on mouse-focus for browsers
     that do support :focus-visible */
    background: inherit;
  }
  
  a:focus-visible {
    /* Draw a very noticeable focus style for
     keyboard-focus on browsers that do support
     :focus-visible */
    outline: 2px solid red;
    background: transparent;
  }
  
  .unbutton {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
  }
  
  .unbutton:focus {
    outline: none;
  }
  
  main {
    box-sizing: border-box;
    padding: 1.25rem;
    display: grid;
    height: 100vh;
    width: 100%;
    grid-row-gap: 1.25rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto auto;
    grid-template-areas: 'frame' 'content' 'meta' 'demos';
  }
  
  header-component{
    grid-area: frame;
    z-index: 1000;
  }

  footer-right{
    grid-area: demos;
  }

  footer-left{
    grid-area: meta;
  }
  
  .content {
    grid-area: content;
    display: flex;
    z-index: 100;
    width:100%;
    height:100%;
    justify-content: space-between;
    position: relative;
    padding-bottom:0px;
  }
  
  content-left {
    width:33%;
    background: var(--color-bg-content);
    border-radius: 8px;
  }
  content-right {
    width:66%;
    height: 100%;
    border-radius: 8px;
    background: var(--color-bg-content);
    margin-left: 20px;
  }
  
  @supports(font-variant-alternates: styleset(ss02)) {
    .show-if-variant-alternates-supported {
      color: #f00;
    }
  
    .hide-if-variant-alternates-supported {
      display: none;
    } 
  
    .show-if-no-variant-alternates-supported {
      display: none;
    }
  }
  
  @supports not (font-variant-alternates: styleset(ss02)) {
    .hide-if-no-variant-alternates-support {
      display: none;
    }
  
    .show-if-no-variant-alternates-supported {
      color: #f00;
    }
  
  }
  
  .ss01 {
    font-variant-alternates: styleset(ss01);
  }
  
  .ss02 {
    font-variant-alternates: styleset(ss02);
  }
  
  .ss03 {
    font-variant-alternates: styleset(ss03);
  }
  
  .ss04 {
    font-variant-alternates: styleset(ss04);
  }
  
  .ss05 {
    font-variant-alternates: styleset(ss05);
  }
  
  @media screen and (min-width: 53em) {
    main {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas: 'frame frame' 'content content' 'meta demos';
    }

    footer-right {
          justify-self: end;
          grid-column-gap: 0.5rem;
          grid-row-gap: 1rem;
    } 

    body #cdawrap {
        justify-self: end;
    }
  } `;render(){return o`<main>
                  <header-component></header-component>
                  <footer-left></footer-left>
                  <footer-right></footer-right>
                  <div class="content" style="backgroud-color:white">
                    <content-left ></content-left>
                    <content-right></content-right>
                    <content-images></content-images>
                  </div>
                </main>`}}customElements.define("my-element",r);export{r as MyElement};
