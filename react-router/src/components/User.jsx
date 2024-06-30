import { useParams } from 'react-router-dom';
function User() {
  const { id } = useParams();
  return (
    <div className='text-center bg-[#192734] text-white p-8 text-xl'>
      User: {id}
    </div>
  );
}

export default User;
