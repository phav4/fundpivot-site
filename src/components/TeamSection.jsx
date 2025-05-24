function TeamSection() {
  return (
    <section className="bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Meet Our Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <p className="font-bold">Jane Doe</p>
          <p className="text-sm text-gray-600">CEO</p>
        </div>
        <div className="text-center">
          <p className="font-bold">John Smith</p>
          <p className="text-sm text-gray-600">CTO</p>
        </div>
        <div className="text-center">
          <p className="font-bold">Sarah Lee</p>
          <p className="text-sm text-gray-600">Head of Compliance</p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;