//Individual property card

export default function PropertyCard({ property, onView }) {
  return (
    <div className="card shadow-sm h-100">
      {(
        <img
          src={
            property.image ||
            `https://source.unsplash.com/600x360/?real-estate,${property.type}`
          }
          alt={property.name}
          className="card-img-top"
          style={{ height: 180, objectFit: "cover" }}
          loading="lazy"
        />
      )}
      <div className="card-body">
        <h3 className="card-title h5 fw-bold">{property.name}</h3>
        <p className="card-subtitle mb-2 text-muted">
          {property.type} • {property.location}
        </p>
        <p className="fw-semibold text-primary mt-2">₹ {property.price}</p>
        <p className="text-secondary mt-2">
          {property.description.slice(0, 50)}...
        </p>
        <button onClick={onView} className="btn btn-primary btn-sm mt-3">
          View
        </button>
      </div>
    </div>
  );
}
