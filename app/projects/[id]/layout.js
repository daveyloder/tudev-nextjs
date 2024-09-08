import NavbarComponent from "../components/navbars/NavbarComponent";

export default function ProjectPageDetailLayout({ children }) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
