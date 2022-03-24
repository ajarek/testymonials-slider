export function render(testimonial) {
    const position = document.getElementById("position");
    const name = document.getElementById("name");
    const text = document.getElementById("text");
    const image = document.getElementById("image");
    position.innerHTML = testimonial.position;
    name.innerText = testimonial.name;
    text.innerText = testimonial.text;
    image.src = testimonial.image;
}
