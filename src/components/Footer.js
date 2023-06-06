export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-gray-300 py-10 text-center">
        <p className="text-sm text-gray-500">
            &copy; {year} E-Store. All rights reserved.
        </p>
        </footer>
    )
}
