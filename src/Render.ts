import { Testimonial } from "./Testimonial";

export function render(testimonial:Testimonial){
    const position=document.getElementById("position") as HTMLSpanElement;
    const name=document.getElementById("name") as HTMLElement;
    const text=document.getElementById("text") as HTMLParagraphElement;
    const image=document.getElementById("image") as HTMLImageElement;
    position.innerHTML=testimonial.position;
    name.innerText=testimonial.name;
    text.innerText=testimonial.text;
    image.src=testimonial.image; 
}