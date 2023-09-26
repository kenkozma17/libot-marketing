import Pill from "../../components/Pricing/Pill";
import FeatureItem from "../../components/Pricing/FeatureItem";
import Features from "../../components/Pricing/Features";
import PriceHolder from "../../components/Pricing/PriceHolder";
export default function Card(props) {
  const hasMoreFeatures = props.moreFeatures && props.moreFeatures.length > 0;
  const featuresJsx = (
    <div
      className={`my-6 py-6 md:space-y-0 space-y-5 border-b border-t border-opacity-50 ${
        props.featureClasses
      } ${hasMoreFeatures && "grid md:grid-cols-2 grid-cols-1"}`}
    >
      <Features className={props.featureClasses}>
        {props.features.map((feature) => (
          <FeatureItem
            key={props.feature}
            fill={props.checkFill}
            feature={feature}
          />
        ))}
      </Features>
      {hasMoreFeatures && (
        <Features className={props.featureClasses}>
          {props.moreFeatures.map((feature) => (
            <FeatureItem
              key={props.feature}
              fill={props.checkFill}
              feature={feature}
            />
          ))}
        </Features>
      )}
    </div>
  );

  return (
    <div className={`${props.className} col-span-1 rounded-xl p-6`}>
      <Pill className={props.pillClasses}>{props.priceCategory}</Pill>
      <h2 className="my-4">{props.priceTitle}</h2>
      {featuresJsx}
      <PriceHolder className="mt-10">
        <p className="font-semibold">P{props.pricePerMonth}/month</p>
        <a
          className={`${props.buttonClasses} rounded-full px-4 py-2 font-semibold`}
          href="#"
        >
          Get Started
        </a>
      </PriceHolder>
    </div>
  );
}
