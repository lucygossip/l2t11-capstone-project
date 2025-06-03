import StoreNav from "./StoreNav";

export default function Header() {
  return (
    <>
      <header className="App-header">
        <StoreNav />
        <div className="h-100 d-flex justify-content-center align-items-center">
          <h1 className="bg-dark text-light text-center px-4">My Store</h1>
        </div>
      </header>
    </>
  );
}
