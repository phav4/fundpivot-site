import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FundPivot() {
  return (
    <div>
      <Header />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to FundPivot</h1>
        <p className="mb-4 text-gray-700">
          FundPivot helps early-stage founders manage investor relations, pitch decks,
          and fundraising pipelines with investor-ready tools and experience.
        </p>
        <p className="text-gray-600">
          We simplify fundraising and support founders with clarity and precision,
          ensuring readiness at every funding stage.
        </p>
      </div>
      <Footer />
    </div>
  );
}