import { HeartIcon } from "@heroicons/react/solid";

const CardActionButton = ({ children }) => (
  <button
    type="button"
    className="bg-accent text-white w-full rounded-br-2xl rounded-bl-2xl p-3 inline-flex items-center justify-center focus:outline-none hover:bg-accent-1 focus:bg-accent-1 focus:ring-accent focus:ring-offset-2"
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-white rounded-2xl border border-gray-200">
    <header className="p-4 pb-0">
      <h2 className="font-semibold text-lg">Heading</h2>
    </header>
    <section className="p-4">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
        culpa!
      </p>
    </section>
    <footer>
      <CardActionButton>
        Action
        <HeartIcon className="ml-1 h-6 w-6" />
      </CardActionButton>
    </footer>
  </div>
);

export default Card;
