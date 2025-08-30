//Property detail modal

export default function Property({ property, onClose }) {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 property-modal">
      <div
        className="bg-white p-4 rounded shadow-lg position-relative"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        
        <button
          onClick={onClose}
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
        ></button>

        <h2 className="h4 fw-bold mb-2">{property.name}</h2>
        <p className="text-muted mb-2">
          {property.type} • {property.location}
        </p>
        <p className="fw-semibold text-primary mb-3">₹ {property.price}</p>
        <p className="text-secondary mb-3">{property.description}</p>

        <img
          src={
            property.image ||
            `https://source.unsplash.com/800x450/?real-estate,${property.type}`
          }
          alt={property.name}
          className="img-fluid rounded mb-3"
          style={{ maxHeight: 360, objectFit: "cover", width: "100%" }}
          loading="lazy"
        />

        {property.coordinates && (
          <div className="ratio ratio-16x9 mb-2">
            <iframe
              src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${property.coordinates.lat},${property.coordinates.lng}&zoom=14`}
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
              title="Google Map"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
