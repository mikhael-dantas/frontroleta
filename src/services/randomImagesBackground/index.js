import img1 from "./../../assets/img-background/oficial.png";
// import img2 from "./../../assets/img-background/2.jpg";
// import img3 from "./../../assets/img-background/3.jpg";
// import img4 from "./../../assets/img-background/4.jpg";
// import img5 from "./../../assets/img-background/5.jpg";
// import img6 from "./../../assets/img-background/06.png";
// import img7 from "./../../assets/img-background/07.png";
// import img8 from "./../../assets/img-background/08.png";

//const imagesBackground = [img1, img2, img3, img4, img5, img6, img7, img8];
const imagesBackground = [img1];

const randomElement =
    imagesBackground[Math.floor(Math.random() * imagesBackground.length)];

export default randomElement;