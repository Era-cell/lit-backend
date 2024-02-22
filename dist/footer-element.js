import{s as e,i as a,x as r}from"./lit-element-urrf30Hv.js";import{a as t}from"./constants-RSApeIlE.js";class s extends e{static properties={array:{Array}};static styles=a`
      
      .meta__title {
        margin: 0;
        font-size: clamp(2rem,5vw,5rem);
        font-weight: 300;
      }
      
      .meta__subtitle {
        margin: 0;
      }      
  `;constructor(){super(),this.rand=Math.floor(9*Math.random())+1}render(){return r`
    <div class="meta">
      <p style="display:none;">${this.rand}</p>
      <h2 class="meta__title">${t[this.rand-1][0]}${this.rand}</h2>
      <p class="meta__subtitle">${t[this.rand-1][1]}</p>
    </div>
    `}}class n extends e{static styles=a`
    .demos {
        position: relative;
        text-align: right;
        background: var(--color-bg-demos);
        border-radius: 8px;
        padding: 0.5rem;
        display: flex;
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
        align-items: flex-end;
        align-content: flex-end;
        flex-wrap: wrap;
        justify-content: flex-end;
        z-index: 200;
      }
      
      a{
        text-decoration: none;
        color: var(--color-text);
      }
      span {
        /* padding-top: 0.5rem; */
        width: 100%;
      }

      .demo {
        background: var(--color-bg);
        aspect-ratio: 1;
        flex: none;
        width: 3rem;
        display: grid;
        place-items: center;
        text-align: center;
        border-radius: 5px;
      }
      


      .demo--current {
        color: rgba(255,255,255,0.5);
      }

      @media screen and (min-width: 53em) {
        .demos {
          justify-self: end;
          grid-column-gap: 0.5rem;
          grid-row-gap: 1rem;
          padding: 1rem;
        }

        @media screen and (min-width: 1220px) {
          span {
            padding-top: 0.9rem; 
            //Increase top padding beyond 1140px 
          } 
        }
        
        a{
          text-decoration: none;
          color: var(--color-text);
        }
      } 
  `;render(){return r`
    <nav class="demos">
      <span>Variations </span>
      <a href="#" class="demo demo--current">1</a>
      <a href="#" class="demo">2</a>
      <a href="#" class="demo">3</a>
      <a href="#" class="demo">4</a>
      <a href="#" class="demo">5</a>
      <a href="#" class="demo">6</a>
      <a href="#" class="demo">7</a>
      <a href="#" class="demo">8</a>
      <a href="#" class="demo">9</a>
    </nav>
    `}}customElements.define("footer-left",s),customElements.define("footer-right",n);
