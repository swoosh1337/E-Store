import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as EmptyStartIcon } from "@heroicons/react/24/outline";

export default function Rating(){
    return (
        <div className="flex items-center -ml-1">
            {Array.from({ length: 4 }).map((_, index) => (
                <StarIcon key={index} className="h-6 w-6 text-yellow-400" />
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
                <EmptyStartIcon key={index} className="h-6 w-6 text-yellow-400" />
            ))}
        </div>
    )
}