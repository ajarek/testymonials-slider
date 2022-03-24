var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { render } from "./Render.js";
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        const btn = document.getElementById("btn");
        const name = document.getElementById("name");
        const response = yield fetch('data.json');
        const data = yield response.json();
        const { testimonial1, testimonial2 } = data;
        btn.addEventListener("click", () => {
            name.innerText === testimonial1.name ? render(testimonial2) : render(testimonial1);
        });
    });
}
loadData();
