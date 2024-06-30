import { useLoaderData } from 'react-router-dom';

function Github() {
  // const [data, setData] = React.useState([]);
  // async function fetchData() {
  //   const githubData = await fetch(
  //     'https://api.github.com/users/shubhampatil1602'
  //   );
  //   const json = await githubData.json();
  //   setData(json);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-xl grid grid-cols-6'>
      <div className='col-span-2'>
        <img
          src={data.avatar_url}
          alt='profileImage'
          className='rounded-full w-80 m-auto'
        />
      </div>
      <div className='col-span-4 flex flex-col items-start justify-center gap-5'>
        <p>Github Followers: {data.followers}</p>
        <p>Github Following: {data.following}</p>
        <p>Github Repos: {data.public_repos}</p>
        <p>Github Name: {data.name}</p>
        <p>Github Location: {data.location}</p>
        <p>Github URL: {data.html_url}</p>
        <p>Github Type: {data.type}</p>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const githubData = await fetch(
    'https://api.github.com/users/shubhampatil1602'
  );
  const json = await githubData.json();
  return json;
};
