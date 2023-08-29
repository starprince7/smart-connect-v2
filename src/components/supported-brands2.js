import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const scrollItems = [
  { src: "/brand-logos/solidity_finance.jpeg", alt: "certik logo" },
  { src: "/brand-logos/certik.jpeg", alt: "certik logo" },
  { src: "/brand-logos/argent_icon.png", alt: "argent_icon" },
  { src: "/brand-logos/assure_icon.png", alt: "assure_icon" },
  { src: "/brand-logos/bitkeep_icon.png", alt: "bitkeep_icon" },
  { src: "/brand-logos/imtoken_icon.png", alt: "imtoken_icon" },
  { src: "/brand-logos/metamask_icon.png", alt: "metamask_icon" },
  { src: "/brand-logos/solidity_finance.jpeg", alt: "certik logo" },
  { src: "/brand-logos/certik.jpeg", alt: "certik logo" },
  { src: "/brand-logos/rainbow_icon.png", alt: "rainbow_icon" },
  { src: "/brand-logos/spot_icon.png", alt: "spot_icon" },
  { src: "/brand-logos/trust_icon.png", alt: "trust_icon" },
  { src: "/brand-logos/zengo_icon.png", alt: "zengo_icon" },
  { src: "/brand-logos/zerion_icon.png", alt: "zerion_icon" },
  { src: "/brand-logos/solidity_finance.jpeg", alt: "certik logo" },
  { src: "/brand-logos/certik.jpeg", alt: "certik logo" },
  { src: "/brand-logos/unstoppable_icon.png", alt: "unstoppable_icon" },
  { src: "/brand-logos/metamask_icon.png", alt: "metamask_icon" },
  { src: "/brand-logos/imtoken_icon.png", alt: "imtoken_icon" },
  { src: "/brand-logos/bitkeep_icon.png", alt: "bitkeep_icon" },
  { src: "/brand-logos/assure_icon.png", alt: "assure_icon" },
  { src: "/brand-logos/argent_icon.png", alt: "argent_icon" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
    slidesToSlide: 10, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8,
    slidesToSlide: 8, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
};

export default function SupportedBrands2() {
  return (
    <div className="container px-3 mt-16">
      <h3 className="text-lg sm:text-3xl text-white font-semibold mb-6">
        We’re supported by over 300 brands.
      </h3>
      {/* Sliding slider */}
      <div className="relative">
        <div className="shadow-left"></div>
        <Carousel
          autoPlay
          autoPlaySpeed={3000}
          customTransition="all 5s ease"
          transitionDuration={900}
          ssr={true}
          infinite={true}
          swipeable={true}
          draggable={true}
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {items2}
        </Carousel>
        <div className="shadow-right"></div>
      </div>
    </div>
  );
}

const items2 = scrollItems.map(({ src, alt }, index) => (
  <div
    key={index}
    className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden"
  >
    {" "}
    <img src={src} alt={alt} />
  </div>
));
