//Hero section
function HomePage() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold mb-3">Find Your Ideal Property</h1>
            <p className="lead text-muted mb-0">
              Discover a curated selection of villas, apartments, and offices in prime
              locations. Explore comfortable living and smart investments designed for you.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop"
              alt="Modern property"
              className="img-fluid rounded shadow"
              style={{ maxHeight: 420, objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
