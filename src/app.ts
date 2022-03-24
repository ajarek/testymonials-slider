import { render } from "./Render.js"

async function loadData(){
    const btn=document.getElementById("btn") as HTMLButtonElement
    const name=document.getElementById("name") as HTMLElement
    const response =await fetch('data.json')
    const data = await response.json()
    const {testimonial1,testimonial2}=data
btn.addEventListener("click",()=>{
   name.innerText===testimonial1.name?render(testimonial2):render(testimonial1)  
})
}
loadData()