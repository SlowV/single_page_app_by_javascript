import ProductService from "./service/product.service.js";
import LogUtils from "./utils/log-utils.js";
import App from "./app.js";

const style = `<style>
                            .user-card {
                                position: relative;
                                background: var(--white);
                                padding: 15px;
                                margin: var(--m-p-basic);
                                border-radius: 10px;
                                display: flex;
                                border: 1px solid #d7d7d7;
                                transition: .3s;
                            }
                            
                            h3 {
                                color: coral;
                            }
                            
                            h3 .subName {
                                font-size: 13px;
                                color: var(--secondary);
                            }
                            
                            img {
                                width: 120px;
                                height: 120px;
                                object-fit: cover;
                                border-radius: 50%;
                                margin-right: 10px;
                            }
                            .info {
                                display: flex;
                                flex-direction: column;
                            }
                            .info-detail, .caption, .label {
                                font-size: 13px;
                                margin-bottom: 10px;
                            }
                            .info-detail {
                                display: flex;
                            }
                            .info-detail span {
                                flex:1;
                            }
                            
                            .label {
                                font-weight:bold;
                                color: var(--secondary);
                            }
                        </style>`

export default class AppComponent extends HTMLElement {
    static #tag = "app-component";
    productService;
    log = new LogUtils('~.s.app.AppComponent');

    constructor() {
        super();
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this.onInit();
    }

    onInit() {
        this.productService = ProductService.getInstance();
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelectorAll(".user-card").forEach(card => {
            card.onclick = (e) => {
                const uri = e.target.getAttribute("routerLink");
                App.router.navigate(uri);
            }
        });
    }

    render() {
        let content = '';
        const products = this.productService.getProducts();
        products.forEach(product => {
                content += `
                        <div class="user-card" routerLink='/product/${product.id}'">
                            <img src="${product.avatar}" alt="">
                            <div class="info">
                                <h3>${product.name} <span class="subName">${product.subName}</span></h3>
                                <div class="info-detail"> 
                                    <span>
                                        <span class="label">Ngày sinh:</span> ${product.dob}
                                    </span>
                                    <span>
                                        <span class="label">Tuổi: </span> ${product.age}
                                    </span>
                                 </div>
                                <div class="caption">
                                    <span class="label">Caption: </span>
                                    ${product.caption}
                                </div>
                            </div>    
                        </div>`
            })
        this.updateView(content);
    }

    updateView(content) {
        this.shadowRoot.innerHTML = style + content;
    };

    static getTag() {
        return this.#tag;
    }
}

customElements.define("app-component", AppComponent);
