const Footer = () => {
  return (
    <div className="bg-white text-black p-6 md:p-[50px] flex flex-col md:flex-row gap-10 md:justify-between">
      <div>
        <p className="text-xl md:text-2xl">second<b>BrainAI</b></p>
        <div className="pt-[49px] flex flex-col md:flex-row gap-[30px] justify-between">
          {Routes.map((route, index) => (
            <a href={route.href} target="_blank" key={index}>
              <span className="text-base font-semibold md:text-lg">
                {route.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="text-base md:text-lg">Updates right to your inbox</p>
        <div className="flex flex-col gap-6 pt-4 md:flex-row">
          <input className="footer-email" placeholder="Email Address">
          </input>
          <button className="w-[175px] bg-third-default rounded-lg text-lg py-[9px]">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer;

const Routes = [
  {
    label: '© secondBrainAI',
    href: ""
  },
  {
    label: "Privacy policy",
    href: ""
  },
  {
    label: "Cookies policy",
    href: ""
  },
  {
    label: "Terms of use",
    href: ""
  }
]