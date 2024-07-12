const Client = () => {
  return (
    <div className="pt-10 md:pt-[60px] pb-[70px] mx-0 md:mx-[55px]">
      <div className="px-6 text-xl font-bold tracking-tight text-center md:text-2xl">
        Our beta is loved by professionals at the world’s largest companies!
      </div>
      <div className="mt-[10px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-4 md:gap-0 border-t border-t-gray-1/10  border-b border-b-gray-1/10 h-[150px]">
        {Clients.map((client, index) => (
          <img src={client.img} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Client;

const Clients = [
  {
    img: "/assets/client/airbnb.png",
  },
  {
    img: "/assets/client/google.png",
  },
  {
    img: "/assets/client/amazon.png",
  },
  {
    img: "/assets/client/microsoft.png",
  },
  {
    img: "/assets/client/fedex.png",
  },
  {
    img: "/assets/client/hubspot.png",
  },
];
