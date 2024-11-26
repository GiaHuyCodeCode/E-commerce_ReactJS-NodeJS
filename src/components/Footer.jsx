import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-col-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w 2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus ratione fugiat debitis cum dolores dolorem doloribus,
          optio atque ea neque non quisquam dolor. Quidem error dolore, optio
          molestias officia blanditiis.
        </p>
      </div>
    </div>
  );
};

export default Footer;
