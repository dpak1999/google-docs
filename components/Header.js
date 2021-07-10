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

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0 ml-5 md:ml-20"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      <img
        src="data:image/jpeg;base64,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"
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        alt=""
      />
    </div>
  );
}

export default Header;
