import DetailsContent from "./DetailsContent";
import ImageContent from "./ImageContent";
import DescriptionContent from "./DescriptionContent";

function Content() {
  return (
    <div className="grid md:grid-cols-3 w-full mt-9 grid-cols-1  sm:grid-cols-2">
      <div>
        <ImageContent />
      </div>
      <div className="self-center">
        <DescriptionContent />
      </div>
      <div className="mt-4 self-center">
        <DetailsContent />
      </div>
    </div>
  );
}

export default Content;
