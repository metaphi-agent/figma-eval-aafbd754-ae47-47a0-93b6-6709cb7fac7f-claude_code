export default function Header() {
  const navItems = ['CATALOGUE', 'FASHION', 'FAVOURITE', 'LIFESTYLE'];

  return (
    <header className="flex items-center justify-between px-[100px] py-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="./assets/icons/logo-icon.svg"
          alt="Fashion logo"
          className="w-8 h-7"
        />
        <span className="text-[40px] font-black tracking-[1.2px] text-black">
          FASHION
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-14">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-base font-medium text-black hover:text-[#E6C744] transition-colors"
          >
            {item}
          </a>
        ))}
        <button className="bg-[#E6C744] text-black font-medium px-6 py-3 rounded-lg hover:bg-[#E0C340] transition-colors">
          SIGN UP
        </button>
      </nav>
    </header>
  );
}
