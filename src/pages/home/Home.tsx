import { People } from '@/data';
import { addPeople } from '@/redux/state';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components/PeopleTable';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return (
    <>
      <PeopleTable />
    </>
  );
};
export default Home;
