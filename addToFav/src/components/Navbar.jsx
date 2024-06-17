const Navbar = ({ data }) => {
  return (
    <div className='w-full py-4 flex justify-around items-center'>
      <h3 className='font-bold text-xl text-orange-400'>Orange</h3>
      <div className='flex py-2 px-4 text-sm font-bold gap-2 bg-orange-400 rounded-full text-white'>
        <h3>Favourites</h3>
        <h4>{data.filter((d) => d.added).length}</h4>
      </div>
    </div>
  );
};

export default Navbar;
