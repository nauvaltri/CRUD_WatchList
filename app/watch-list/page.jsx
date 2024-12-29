import WatchForm from "../components/WatchForm";
import EditWatch from "../components/EditWatch";
import { deleteWatch } from "../server-actions/deleteWatch";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function WatchList() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data: { session } } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: watches, error } = await supabase
    .from('watches')
    .select('*')
    .eq('user_id', user.id)
    .order('brand', { ascending: true });

  if (error) {
    console.error('Error fetching watches');
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">

        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            My Watch List
          </h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              Sign out
            </button>
          </form>
        </div>

        {/* Watch Form Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
          <WatchForm />
        </div>

        {/* Watch List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches?.map((watch) => (
            <div key={watch.id} className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">{watch.brand} - {watch.model}</h2>
              <div className="flex justify-between items-center mt-4">
                
                {/* Delete Button */}
                <form action={deleteWatch} method="post">
                  <input type="hidden" name="id" value={watch.id} />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300"
                  >
                    Delete
                  </button>
                </form>
                
                {/* Edit Button */}
                <EditWatch watch={watch} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
