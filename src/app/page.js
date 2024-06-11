
import ContextWrapper from '@/components/HOC/AppWrapper/AppWrapper.component';
import HomeView from '@/components/views/home/home.component';

export default function Home() {
  return (
    <ContextWrapper>
      <HomeView />
   </ContextWrapper>
  );
}
