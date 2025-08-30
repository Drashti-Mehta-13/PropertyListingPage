//Add property form
import { useEffect, useState } from "react";
import { getProperties, addProperty } from "../api";
import AddPropertyForm from "./AddPropertyForm";

function AddPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const { data } = await getProperties();
    setProperties(data);
  };

  const handleAddProperty = async (property) => {
    await addProperty(property);
    fetchProperties();
  };

  return (
    <div className="container my-5">
      <h1 className="h4 fw-semibold mb-4">Add a New Property</h1>
      <AddPropertyForm onAdd={handleAddProperty} />
    </div>
  );
}

export default AddPage;
