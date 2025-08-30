// Property grid
import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties, onView }) {
  if (properties.length === 0) {
    return <p className="text-muted">No properties found.</p>;
  }

  return (
    <div className="row g-4">
      {properties.map((property) => (
        <div key={property.id} className="col-12 col-sm-6 col-md-4">
          <PropertyCard property={property} onView={() => onView(property)} />
        </div>
      ))}
    </div>
  );
}
