// NPM Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

// Project files
import iTechnology from "interfaces/iTechnology";
import "styles/components/ItemTechnology.sass";

// Interface
interface Props {
  item: iTechnology;
}

// Testing if this function is a valid method. Need testing with more arguments.
export default function ItemTechnology({ item }: Props) {
  const { name, description, icon } = item;

  return (
    <li className="item-technology">
      <div className="circle">
        <FontAwesomeIcon icon={["fab", icon as IconName]} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
