import UserCard from './components/UserCard';
import UserFollow from './components/UserFollow';

const userGraphics = [
  {
    title: 'Page Views',
    social: 'facebook',
    count: '87',
    graph: '3%',
  },
  {
    title: 'Likes',
    social: 'facebook',
    count: '52',
    graph: '2%',
  },
  {
    title: 'Likes',
    social: 'instagram',
    count: '5462',
    graph: '2257%',
  },
  {
    title: 'Profile Views',
    social: 'instagram',
    count: '52k',
    graph: '1375%',
  },
  { title: 'Retweets', social: 'twitter', count: '117', graph: '303%' },
  { title: 'Likes', social: 'twitter', count: '507', graph: '553%' },
  { title: 'Likes', social: 'youtube', count: '107', graph: '19%' },
  { title: 'Total Views', social: 'youtube', count: '1407', graph: '12%' },
];

const userFollows = [
  {
    username: '@nathanf',
    count: 1987,
    description: 'Followers',
    graph: '12 Today',
    social: 'facebook',
  },
  {
    username: '@nathanf',
    count: 1044,
    description: 'Followers',
    graph: '99 Today',
    social: 'twitter',
  },
  {
    username: '@realnathanf',
    count: '11k',
    description: 'Followers',
    graph: '1099 Today',
    social: 'instagram',
  },
  {
    username: 'Nathan F.',
    count: 8239,
    description: 'Subscribers',
    graph: '144 Today',
    social: 'youtube',
  },
];

function App() {
  return (
    <div className="mx-auto mb-24 max-w-[1110px] px-1">
      <header className="my-[36px] flex justify-between">
        <div>
          <h1 className="text-[28px] font-bold leading-9">Social Media Dashboard</h1>
          <p className="font-bold">Total Followers: 23,004</p>
        </div>
        <div>
          <span>Dark Mode</span>
          <button>switch</button>
        </div>
      </header>

      <section className="my-10 grid grid-cols-4 gap-8">
        {userFollows.map((item, idx) => (
          <UserFollow {...item} key={idx} />
        ))}
      </section>

      <h2 className="mt-10 text-2xl font-bold">Overview - Today</h2>

      <section className="my-6 grid grid-cols-4 gap-x-8 gap-y-5">
        {userGraphics.map((item, idx) => (
          <UserCard {...item} key={idx} />
        ))}
      </section>
    </div>
  );
}

export default App;
