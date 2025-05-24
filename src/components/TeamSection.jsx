export default function TeamSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["John Doe", "Jane Smith", "Samuel Bright"].map((name) => (
            <div key={name} className="bg-white p-6 rounded shadow">
              <div className="text-xl font-bold mb-2">{name}</div>
              <p className="text-gray-600">Position or Role</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}