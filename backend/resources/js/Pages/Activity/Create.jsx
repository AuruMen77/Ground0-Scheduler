import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';

export default function CreateActivity({ auth }) {
    const { data, setData, post, errors } = useForm({
        title: '',
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: '',
        cost: '',
    });


    const onSubmit = (e) => {
        e.preventDefault();

        post(route("activity.store"), {
            onSuccess: () => {
                // Reset form data upon successful submission
                setData({
                    title: '',
                    start_date: '',
                    start_time: '',
                    end_date: '',
                    end_time: '',
                    cost: '',
                });
            },
        });

    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Create Activity</h2>
            }
        >
            <Head title="New Activity" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <div>
                                <InputLabel htmlFor="title" value="Activity Title" />
                                <TextInput
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('title', e.target.value)}
                                    isFocused={true}
                                />
                                {errors.title && <InputError message={errors.title} className="mt-2" />}
                            </div>
                            <div className="mt-4 flex flex-row w-full gap-10">
                                <div>
                                    <InputLabel htmlFor="start_date" value="Start Date" />
                                    <TextInput
                                        id="start_date"
                                        type="date"
                                        name="start_date"
                                        value={data.start_date}
                                        className="mt-1"
                                        onChange={e => setData('start_date', e.target.value)}
                                    />
                                    {errors.start_date && <InputError message={errors.start_date} className="mt-2" />}
                                </div>
                                <div>
                                    <InputLabel htmlFor="start_time" value="Start Time" />
                                    <TextInput
                                        id="start_time"
                                        type="time"
                                        name="start_time"
                                        value={data.start_time}
                                        className="mt-1"
                                        onChange={e => setData('start_time', e.target.value)}
                                    />
                                    {errors.start_time && <InputError message={errors.start_time} className="mt-2" />}
                                </div>
                            </div>
                            <div className="mt-4 flex flex-row w-full gap-10">
                                <div>
                                    <InputLabel htmlFor="end_date" value="End Date" />
                                    <TextInput
                                        id="end_date"
                                        type="date"
                                        name="end_date"
                                        value={data.end_date}
                                        className="mt-1"
                                        onChange={e => setData('end_date', e.target.value)}
                                    />
                                    <InputError message={errors.end_date} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="end_time" value="End Time" />
                                    <TextInput
                                        id="end_time"
                                        type="time"
                                        name="end_time"
                                        value={data.end_time}
                                        className="mt-1"
                                        onChange={e => setData('end_time', e.target.value)}
                                    />
                                    <InputError message={errors.end_time} className="mt-2" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="cost" value="Cost ($)" />
                                <TextInput
                                    id="cost"
                                    type="number"
                                    name="cost"
                                    value={data.cost}
                                    className="mt-1 block w-[50%]"
                                    onChange={(e) => setData('cost', e.target.value)}
                                />
                                <InputError message={errors.cost} className="mt-2" />
                            </div>
                            <div className="flex mt-10 gap-10">
                                <Link
                                    href={route('dashboard')}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
