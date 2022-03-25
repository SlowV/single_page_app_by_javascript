import AbstractView from "./AbstractView.js";
import {html} from "../core/core.js";

export default class Dashboard extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }


    async getHtml() {
        return html`
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. 
                Reprehenderit anim fugiat sint exercitation consequat. 
                Sit anim laborum sit amet Lorem adipisicing ullamco duis. 
                Anim in do magna ea pariatur et. ${true}
            </p>
            <p>
                <a href="/post" data-link>View recent post</a>.
            </p>
        `;
    }
}
