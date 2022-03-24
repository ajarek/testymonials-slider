export class Testimonial  {
    name:string ;
    text:string;
    position:string;
    image:string;
    
    constructor(name:string, text:string, position:string,image:string) {
        this.name = name;
        this.text = text;
        this.position = position;
        this.image = image;
    }
}