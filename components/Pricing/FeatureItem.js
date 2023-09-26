import Check from "../../components/Icons/Check";

export default function FeatureItem(props) {
  return (
    <li className="flex items-center space-x-3">
      <Check fill={props.fill} />
      <span>{props.feature}</span>
    </li>
  );
}
