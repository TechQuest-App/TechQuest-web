import Button from "../button/Button";

const Title = ({ name, dsc, btnName }) => {
  return (
    <div className="mb-10">
      <h2 className="mb-5 md:mb-2 text-5xl font-semibold text-center md:text-left">
        {name}
      </h2>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
        <p className="md:max-w-[60%] w-full text-center md:text-left">{dsc}</p>
        <Button
          name={btnName}
          style={"py-[18px] px-[24px] bg-white font-medium"}
        />
      </div>
    </div>
  );
};

export default Title;
