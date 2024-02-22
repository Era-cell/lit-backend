import{s as i,i as t,x as e}from"./lit-element-urrf30Hv.js";class s extends i{static properties={images:{type:Array}};constructor(){super(),this.images=[1,2,3,4,5,6,7,8,9,10]}static styles=t`
        .content__img {
        width: var(--img-width);
        aspect-ratio: var(--img-ratio);
        border-radius: var(--img-border-radius);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        overflow: hidden;
        will-change: transform, filter;
        }
        
        .content__img-inner {
            background-position: 50% 50%;
            width: calc(100% + var(--img-offset-x));
            height: calc(100% + var(--img-offset-y));
            background-size: cover;
            position: absolute;
            top: calc( -1 * var(--img-offset-y) / 2 );
            left: calc( -1 * var(--img-offset-x) / 2 );
        }
    `;render(){return this.images.map((i=>e`
        <div class="content__img">
            <div class="content__img-inner" style="background-image:url(src/assets/img/${i}.jpg)"></div>
            <!-- <div style="background-color: #fff; width: 100%; height: 100%; position: absolute; top: 0; left: 0; opacity: 0.5; background-image:url(../../assets/img/${i}.jpg)"></div> -->
            <div>Hi</div>
        </div>
        `))}}customElements.define("content-images",s);
