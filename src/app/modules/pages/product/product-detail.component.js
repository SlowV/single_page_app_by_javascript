import ProductService from "../../../service/product.service.js";
import {styles} from "./styles.js";

export default class ProductDetailComponent extends HTMLElement {
    static #tag = "product-detail-component"

    productService;

    constructor() {
        super();
        this.onInit();
    }

    onInit() {
        this.productService = ProductService.getInstance();
    }

    static observedAttributes() {
        return ["id"];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const product = this.productService.getProduct(this.id);
        console.log(product)
        let content;
        if (product) {
            content = ` <div class="user-info">
                            <h3>${product.name}</h3>
                            <div class="info">
                                <img src="${product.avatar}" alt="" class="avatar">
                                <div class="text">
                                    <div>Họ tên: ${product.name}</div> 
                                    <div>Năm sinh: ${product.dob}</div>
                                    <div>Tuổi: ${product.age}</div>
                                    <div>Giới thiệu: ${product.subName}</div>
                                    <div>Caption: ${product.caption}</div>
                                </div>
                            </div>
                            <div class="box-image">
                                <div class="images-title">Hình ảnh</div>
                                <div class="images">${this.buildHtmlListImage(product.image)}</div>
                            </div>
                        </div>`
        } else {
            content = `Khong tim thay san pham voi id: ${this.id}`;
        }
        this.updateView(content);
    }

    buildHtmlListImage(images) {
        let html = '';
        if (images) {
            images.forEach(src => {
                html += `<img src="${src}">`
            })
        }
        return html;
    }

    updateView(content) {
        this.innerHTML = styles + content
    }

    get id() {
        return this.getAttribute("id");
    }

    static getTag() {
        return this.#tag;
    }
}

customElements.define("product-detail-component", ProductDetailComponent);

