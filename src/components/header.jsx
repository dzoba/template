export default function Header() {
  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
      </div>
      <div className="h-16 mx-auto px-5 flex items-center justify-center">
        <ul className="flex items-center gap-5">
          <li><a className="hover:text-cyan-500 transition-colors" href="/">Home</a></li>
          <li><a className="hover:text-cyan-500 transition-colors" href="/about">About Us</a></li>
          <li><a className="hover:text-cyan-500 transition-colors" href="/services">Services</a></li>
          <li><a className="hover:text-cyan-500 transition-colors" href="/gallery">Gallery</a></li>
          <li><a className="hover:text-cyan-500 transition-colors" href="/contacts">Contact Us</a></li>
          <li><a className="hover:text-cyan-500 transition-colors" href="/give">Give</a></li>
          <li><a className="hover:text-cyan-500 transition-colors" href="/register">Register</a></li>
          <li><a className="hover:text-cyan-500 transition-colors" href="/calendar">Calendar</a></li>
        </ul>
      </div>
    </div>
  );
}
