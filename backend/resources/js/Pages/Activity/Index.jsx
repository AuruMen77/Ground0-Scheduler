import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, activities }) {
    
    const formatDate = (date) =>{
        return new Date(date.substring(4,6) + ", " + date.substring(0,2) + ", " + date.substring(7))
                };
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Activities</h2>}>

            <Head title="Activities" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Activities</div>
                    </div>
                    <div>
                        <div className="overflow-x-auto px-10 py-5 ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Title</th>

                                        <th className="px-3 py-2">Start - Date</th>
                                        <th className="px-3 py-2">Start - Time</th>

                                        <th className="px-3 py-2">End - Date</th>
                                        <th className="px-3 py-2">End - Time</th>
                                        <th className="px-3 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activities.data.map((activity) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="font-bold px-3 py-2">{activity.id}</td>
                                            <td className="px-3 py-2">{activity.title}</td>
                                            <td className="px-3 py-2">{formatDate(activity.start_time).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                            <td className="px-3 py-2">{formatDate(activity.start_time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}</td>
                                            <td className="px-3 py-2">{formatDate(activity.end_time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}</td>
                                            <td className="px-3 py-2">{formatDate(activity.end_time).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                            <td className="px-3 py-2">{activity.cost}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Pagination Links={activities.meta.links}/> 
                        </div>
                    </div>

                </div>
                
            </div>
        </AuthenticatedLayout>
    )
}