import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Auditly() {
  return (
    <div>
      <Header />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Auditly Limited</h1>
        <p className="mb-4 text-gray-700">
          At Auditly, we help with compliance workflows and documentation for finance
          and healthcare firms, reducing audit risks and ensuring up-to-date regulatory
          readiness.
        </p>
        <p className="text-gray-600">
          We streamline audit preparation, boost confidence, and help firms stay ahead
          of evolving regulations.
        </p>
      </div>
      <Footer />
    </div>
  );
}