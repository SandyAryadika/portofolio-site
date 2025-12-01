import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "120px" }}>
        {children}
      </main>
    </>
  );
}
