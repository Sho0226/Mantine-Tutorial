import { TableReviews } from '@/components/TableReview/TableReview';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <TableReviews />
    </>
  );
}
