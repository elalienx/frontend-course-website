// NPM packages
import { useParams } from "react-router";

// Project files
import data from "data/candidates.json";

// Interface
type PropParams = {
  url: string;
};

export default function Profile() {
  // Properties
  const { url } = useParams<PropParams>();
  const candidate = data.find((item) => item.url === url);

  // safeguard
  if (candidate === undefined) return <p>No candidate found</p>;

  return (
    <div id="about">
      <h1>Profile name</h1>
      <h2>{candidate.name}</h2>
    </div>
  );
}