import Sidebar from "./Sidebar";
import Form from "./Form";
import Card from "./Card";

const App = () => (
  <>
    <header className="relative z-10 flex-shrink-0 flex items-center h-16 px-2 bg-gray-100">
      Header
    </header>
    <div className="h-screen flex">
      <Sidebar />

      <main className="w-100 relative bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-8">
          <Form />
        </div>

        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Card</h2>
          <Card />
        </div>
      </main>
    </div>
  </>
);

export default App;
