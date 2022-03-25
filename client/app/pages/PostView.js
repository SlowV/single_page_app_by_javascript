import AbstractView from "./AbstractView.js";
import {html} from "../core/core.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        return html`
            <h1>Post</h1>
            <p>You are viewing post  with id = ${this.postId}.</p>
        `;
    }
}
