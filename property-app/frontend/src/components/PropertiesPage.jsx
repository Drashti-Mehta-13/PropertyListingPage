//Search, filter, listing

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProperties } from "../api";
import PropertyList from "./PropertyList";

function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const { data } = await getProperties();
    setProperties(data);
  };

  const filteredProperties = properties.filter((p) => {
    return (
      (filterType ? p.type === filterType : true) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const handleViewProperty = (property) => {
    navigate(`/properties/${property.id}`);
  };

  return (
    <div className="container my-5">
      <h1 className="h3 fw-bold mb-4">All Properties</h1>
      
      {/* Search and Filter Controls */}
      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <input
            type="text"
            placeholder="Search by name or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="form-select"
          >
            <option value="">All Types</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Office">Office</option>
          </select>
        </div>
      </div>

      {/* Property List */}
      <PropertyList
        properties={filteredProperties}
        onView={handleViewProperty}
      />
    </div>
  );
}

export default PropertiesPage;
