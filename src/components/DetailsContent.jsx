function DetailsContent() {
  return (
    <div className="flex flex-col items-center h-fit justify-between">
      <div>
        <img src="./public/background.svg" />
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-4xl text-light-purple">
          Hi,
          <br />
          I'm <span className="text-light-green font-normal">Nastaran</span>
        </h1>
        <p className="mt-4 text-light-purple">Junior front-end developer</p>
      </div>
      <div className="mt-10">
        <button className="rounded-lg bg-light-green text-white px-5 py-2 hover:opacity-75">Here me</button>
      </div>
    </div>
  );
}

export default DetailsContent;
