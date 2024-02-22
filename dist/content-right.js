import{s,i,x as e}from"./lit-element-urrf30Hv.js";class d extends s{static styles=i`
        :root {
        background-color: var(--color-bg);
        height: 100%;
        overflow: hidden;
        }

        @keyframes loaderAnim {
            to {
                opacity: 1;
                transform: scale3d(0.5,0.5,1);
            }
        }

        main{
            display:block;
            height: 100%;
            width: 100%;
            border-radius: 8px;
        }
        .frame {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        body #cdawrap {
            align-self: start;
            justify-self: start;
        }

        .slides {
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: grid;
            grid-template-rows: 100%;
            grid-template-columns: 100%;
            place-items: center;
        }

        .slide {
            width: 100%;
            height: 100%;
            grid-area: 1 / 1 / -1 / -1;
            pointer-events: none;
            opacity: 0;
            overflow: hidden;
            position: relative;
            display: grid;
            place-items: center;
            will-change: transform, opacity;
        }

        .slide--current {
            pointer-events: auto;
            opacity: 1;
        }

        .slide__img {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            will-change: transform, opacity, filter;
        }

        button{
            display: none;
        }

        .deco {
            width: 100%;
            height: 100%;
            grid-area: 1 / 1 / -1 / -1;
            pointer-events: none;
            position: relative;
            opacity: 0;
            background: #8c718e;
            will-change: transform, opacity;
        }

        .deco--1 {
            background: #d4503e;
        }

        .deco--2 {
            background: #1c1a1a;
        }

        .deco--3 {
            background: #4e4141;
        }

        .deco--4 {
            background: #000;
        }

        .deco--5 {
            background: #060b17;
        }

        .deco--6 {
            background: #34365c;
        }

        .deco--7 {
            background: #9f6794;
        }

        @media screen and (min-width: 53em) {
            .frame { 
                height: 100vh; 
            }

            .slides-nav {
                justify-self: end;
            }
            body #cdawrap {
                align-self: center;
                justify-self: start;
            }
        }
    `;constructor(){super(),this.deco=Array.from({length:7},((s,i)=>i+1))}render(){return e`
        <main>
			<div class="frame">
				<nav class="slides-nav">
					<button class="slides-nav__item slides-nav__item--prev"></button>
					<button class="slides-nav__item slides-nav__item--next"></button>
				</nav>
			</div>
			<div class="slides">
                <div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/1.jpg); border-radius:8px;"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/2.jpg); border-radius:8px;"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/3.jpg); border-radius:8px;"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/4.jpg); border-radius:8px;"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/5.jpg); border-radius:8px;"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/6.jpg); border-radius:8px;"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/7.jpg); border-radius:8px;"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/8.jpg); border-radius:8px;"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(src/assets/img_ss/9.jpg); border-radius:8px;"></div>
				</div>
                ${this.deco.map((s=>e`
                <div class="deco deco--${s}"></div>
                `))}
			</div>
        </main> 

    `}}customElements.define("content-right",d);
