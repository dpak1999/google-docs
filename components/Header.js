/** @format */
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <div className="flex items-center sticky top-0 z-50 px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-2xl text-gray-700">Docs</h1>

      <div className="flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg mx-5 md:mx-20 focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 bg-transparent text-base outline-none"
        />
      </div>
    </div>
  );
}

export default Header;
