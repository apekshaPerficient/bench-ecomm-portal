import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';


const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50"><Outlet/></main>
      </div>
    </div>
  );
};

export default MainLayout;
