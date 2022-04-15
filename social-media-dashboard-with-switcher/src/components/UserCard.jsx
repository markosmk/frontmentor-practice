import LogoFacebook from '../assets/images/icon-facebook.svg';
import LogoTwitter from '../assets/images/icon-twitter.svg';
import LogoInstagram from '../assets/images/icon-instagram.svg';
import LogoYoutube from '../assets/images/icon-youtube.svg';
import IconDown from '../assets/images/icon-down.svg';
import IconUp from '../assets/images/icon-up.svg';

function UserCard({ title, social, count, graph }) {
  const icon = {
    facebook: LogoFacebook,
    twitter: LogoTwitter,
    instagram: LogoInstagram,
    youtube: LogoYoutube,
  };

  return (
    <article className="rounded-md bg-[#f0f2fa] py-6 pl-6 pr-7">
      <div className="flex items-center justify-between">
        <h4>{title}</h4>
        <img src={icon[social]} alt="icon social" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <span className="flex text-[32px] font-bold leading-none">{count}</span>
        <div className="mt-6 flex items-center justify-center text-xs font-bold text-green-600">
          <img src={IconUp} alt="up down icon" className="mr-1" />
          {graph}
        </div>
      </div>
    </article>
  );
}

export default UserCard;
