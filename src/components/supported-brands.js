import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const scrollItems = [
  { src: "/brand-logos/certik.jpeg", alt: "certik logo" },
  { src: "/brand-logos/argent_icon.png", alt: "argent_icon" },
  { src: "/brand-logos/assure_icon.png", alt: "assure_icon" },
  { src: "/brand-logos/bitkeep_icon.png", alt: "bitkeep_icon" },
  { src: "/brand-logos/imtoken_icon.png", alt: "imtoken_icon" },
  { src: "/brand-logos/metamask_icon.png", alt: "metamask_icon" },
  { src: "/brand-logos/certik.jpeg", alt: "certik logo" },
  { src: "/brand-logos/rainbow_icon.png", alt: "rainbow_icon" },
  { src: "/brand-logos/spot_icon.png", alt: "spot_icon" },
  { src: "/brand-logos/trust_icon.png", alt: "trust_icon" },
  { src: "/brand-logos/zengo_icon.png", alt: "zengo_icon" },
  { src: "/brand-logos/zerion_icon.png", alt: "zerion_icon" },
  { src: "/brand-logos/certik.jpeg", alt: "certik logo" },
  { src: "/brand-logos/unstoppable_icon.png", alt: "unstoppable_icon" },
  { src: "/brand-logos/metamask_icon.png", alt: "metamask_icon" },
  { src: "/brand-logos/imtoken_icon.png", alt: "imtoken_icon" },
  { src: "/brand-logos/bitkeep_icon.png", alt: "bitkeep_icon" },
  { src: "/brand-logos/assure_icon.png", alt: "assure_icon" },
  { src: "/brand-logos/argent_icon.png", alt: "argent_icon" },
];

export default function SupportedBrands() {
  return (
    <div className="container px-3 mt-16">
      <h3 className="text-lg sm:text-3xl text-white font-semibold mb-6">
        We’re supported by over 300 brands.
      </h3>
      {/* Sliding slider */}
      <div className="relative">
        <div className="shadow-left"></div>
        <AliceCarousel
          ssrSilentMode={false}
          mouseTracking
          items={items2}
          autoPlay
          infinite
          disableButtonsControls
          disableDotsControls
          animationType="fadeout"
          autoPlayStrategy="none"
          animationDuration={3500}
          responsive={{
            0: {
              items: 5,
              itemsFit: "fill",
            },
            700: {
              items: 8,
              itemsFit: "fill",
            },
            1024: {
              items: 10,
              itemsFit: "cover",
            },
          }}
        />
        <div className="shadow-right"></div>
      </div>
    </div>
  );
}

/* 
Format to which items should be passed.
const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
]; */

const items2 = scrollItems.map(({ src, alt }, index) => (
  <div
    key={index}
    className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden"
  >
    {" "}
    <img src={src} alt={alt} />
  </div>
));
