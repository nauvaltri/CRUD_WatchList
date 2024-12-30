import AuthForm from "./components/AuthForm";

export default function Home() {

    // Debugging: Memastikan variabel environment tersedia
  console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("Supabase Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  return (

    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 text-center">
          Selamat Datang di Database Jam Tangan
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 text-center">
          Berikan Terbaik dengan jam tangan yang mantul
        </p>

        {/* Auth Form Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-lg mx-auto">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
