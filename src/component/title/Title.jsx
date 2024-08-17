import Button from "../button/Button";

const Title = ({ name, dsc, btnName }) => {
  return (
    <div className="mb-10">
      <h2 className="mb-2 text-5xl font-semibold">{name}</h2>
      <div className="flex items-center justify-between">
        <p className="max-w-[60%]">{dsc}</p>
        <Button
          name={btnName}
          style={"py-[18px] px-[24px] bg-white font-medium"}
        />
      </div>
    </div>
  );
};

export default Title;
