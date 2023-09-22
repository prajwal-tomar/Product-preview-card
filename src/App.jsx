import productImage from "./assets/images/image-product-desktop.jpg";
import productImageMobile from "./assets/images/image-product-mobile.jpg";
import iconCart from "./assets/images/icon-cart.svg";

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream font-montserrat">
      <div className="md:h-[400px] md:w-[550px] bg-white rounded-xl md:flex md:flex-row flex flex-col w-[300px] h-[550px]">
        <div className="md:w-1/2 w-full">
          <img
            src={productImage}
            alt="product-image"
            className="h-full rounded-tl-xl rounded-bl-xl md:block hidden"
          />
          <img
            src={productImageMobile}
            alt="product-image"
            className="h-full rounded-tl-xl rounded-tr-xl md:hidden"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:space-y-5 md:mt-0 mt-3 space-y-3 px-7 justify-center">
          <p className="text-slate-400 text-xs tracking-[0.2rem]"> PERFUME</p>
          <h1 className="font-fraunces font-bold text-3xl">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-slate-500 text-xs">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex justify-between items-center">
            <h1 className="font-fraunces font-bold text-3xl text-dark-cyan">$149.99</h1>
            <h1 className="text-slate-500 text-sm me-3 line-through">$169.99</h1>
          </div>
          <button className="bg-dark-cyan rounded-lg py-2 px-5 text-white flex items-center justify-center space-x-3">
            <img src={iconCart} alt="" />
            <h1>Add to Cart</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
