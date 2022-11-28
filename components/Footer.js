import React from "react";

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4  gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 ">

        <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">About</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
    </div>

        <div className="space-y-4 text-xs text-gray-800 ">
            <h5 className="font-bold">Host</h5>
            <p>Binary Physcis</p>
            <p>Presents</p>
            <p>Zero To Full Stack</p>
            <p>Hundreds of Students</p>
            <p>Join Now</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 ">
            <h5 className="font-bold">Support</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Say Hi Youtube</p>
            <p>Easters Egg</p>
            <p>For the win</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 ">
            <h5 className="font-bold">Community</h5>
            <p>Accesibility</p>
            <p>This is not a real site</p>
            <p>Just Practising</p>
            <p>Next Js is Cool</p>
            <p>Tailwind is so powerful</p>
        </div>

        </div>
    );
}

export default Footer;
