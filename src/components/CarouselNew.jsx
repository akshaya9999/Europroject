import { Carousel, Typography } from "@material-tailwind/react";
import pic1 from './europic.jpg';
import pic2 from './europic2.jpg';
import pic3 from './europic3.png';
 
export default function CarouselNew() {
  return (
    <Carousel className="rounded-xl flex-1">
      <div className="relative h-full w-full ">
        <img
          src={pic1}
          alt="image 1"
          className="h-full w-full object-cover max-h-100"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/10 ">
        <Typography
        variant="h1"
        color="white"
        className="mb-32 opacity-100"
        ><p>
          Crafting Strength and Precision: </p>
          Unleashing the Power of Steel
        </Typography>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={pic2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/10">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl "
            >
              We, EURO STEEL & FABRICATION LLC., introduce ourselves as one of the leading steel fabrication / erection unit in the UAE with a capacity to undertake major steel fabrication works since its inception in 2007
            </Typography>
            
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={pic3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/10">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl align-middle"
            >
              Ideally placed in Al Dhaid (Fujeirah) UAE , we provide high quality, custom based MS & SS Fabrication, Turnkey projects, Manufacturing parts and more
            </Typography>
          
            
          </div>
        </div>
      </div>
    </Carousel>
  );
}