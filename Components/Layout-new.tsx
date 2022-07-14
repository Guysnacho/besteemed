import Footer from "./Footer-new";
import Navbar from "./Navbar-new";

/**
 * @type {LayoutProps} - Pages that will be wrapped by the Navbar and Footer
 * @remarks The purpose of having layouts in this case is that React doesn't
 * need to rebuild the reuised components when switching pages
 */
type LayoutProps = {
  children: React.ReactNode;
};

/**
 *
 * @param children - ReactNode
 * @returns A page with a Navbar and Footer
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar /> {children} <Footer />
    </>
  );
}
