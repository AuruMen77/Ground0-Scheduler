import { Link } from "@inertiajs/react";

export default function Pagination ({Links}){
    return (
        <nav className="text-center mt-4">
            {Links.map((link)=> (
                <Link 
                preserveScroll="true"
                href={link.url || " "}
                key={link.label}
                className={"inline-block py-2 px-3 rounded-lg text-black-500 text-xs " + 
                (link.active ? "bg-gray-950 text-white" : " ") +
                (!link.url ? " hidden ": " ")} dangerouslySetInnerHTML={{__html: link.label}}>
                </Link>
            ))}
        </nav>
    )
}