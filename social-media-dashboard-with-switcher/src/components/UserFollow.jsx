import LogoFacebook from '../assets/images/icon-facebook.svg';
import LogoTwitter from '../assets/images/icon-twitter.svg';
import LogoInstagram from '../assets/images/icon-instagram.svg';
import LogoYoutube from '../assets/images/icon-youtube.svg';
import IconDown from '../assets/images/icon-down.svg';
import IconUp from '../assets/images/icon-up.svg';

function UserFollow({ username, count, description, graph, social }) {
  const icon = {
    facebook: LogoFacebook,
    twitter: LogoTwitter,
    instagram: LogoInstagram,
    youtube: LogoYoutube,
  };
  return (
    <article className="relative rounded-md bg-[#f0f2fa] px-8 pt-8 pb-6 before:absolute before:inset-0 before:h-1 before:rounded-t-md before:bg-gradient-to-r before:from-[#FDB55D] before:to-[#DE428B]">
      <a href="#s" className="flex items-center justify-center space-x-2">
        <img src={icon[social]} alt={username} />
        <span className="text-xs font-bold text-[#63687e]">{username}</span>
      </a>
      <h2 className="mt-6 text-center text-[52px] font-black leading-none">{count}</h2>
      <h3 className="mt-2 text-center text-xs uppercase tracking-[0.40em]">
        {description}
      </h3>
      <div className="mt-6 flex items-center justify-center text-xs font-bold text-green-600">
        <img src={IconUp} alt="down" className="mr-1" />
        {graph}
      </div>
    </article>
  );
}

export default UserFollow;
