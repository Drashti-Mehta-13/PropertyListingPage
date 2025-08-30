//Property detail page
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProperties } from "../api";

function PropertyDetailPage() {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      const { data } = await getProperties();
      setProperties(data);
      setLoading(false);
    };
    loadProperties();
  }, []);

  const property = properties.find((p) => String(p.id) === String(id));

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <h2 className="h4 text-danger mb-3">Property Not Found</h2>
          <p className="text-muted mb-4">The property you're looking for doesn't exist.</p>
          <Link to="/properties" className="btn btn-primary">
            ← Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Property Image */}
      <div className="row mb-4">
        <div className="col-12">
          <img
            src={
              property.image ||
              `https://source.unsplash.com/1200x600/?real-estate,${property.type}`
            }
            alt={property.name}
            className="img-fluid rounded shadow"
            style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Property Details */}
      <div className="row">
        <div className="col-lg-8">
          <h1 className="h2 fw-bold mb-3">{property.name}</h1>
          <div className="d-flex align-items-center mb-3">
            <span className="badge bg-primary me-2">{property.type}</span>
            <span className="text-muted">
              <i className="bi bi-geo-alt me-1"></i>
              {property.location}
            </span>
          </div>
          <h3 className="h4 text-primary fw-bold mb-3">₹ {property.price}</h3>
          <p className="text-secondary lead">{property.description}</p>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="h5 fw-bold mb-3">Property Summary</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <strong>Type:</strong> {property.type}
                </li>
                <li className="mb-2">
                  <strong>Location:</strong> {property.location}
                </li>
                <li className="mb-2">
                  <strong>Price:</strong> ₹ {property.price}
                </li>
                {property.coordinates && (
                  <li className="mb-2">
                    <strong>Coordinates:</strong> {property.coordinates.lat}, {property.coordinates.lng}
                  </li>
                )}
              </ul>
              <hr />
              <Link to="/properties" className="btn btn-outline-primary w-100">
                ← Back to Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailPage;
