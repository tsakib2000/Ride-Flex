import toast from "react-hot-toast";


const NewsLetter = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-amber-400 w-full md:w-[700px] lg:w-[1000px] mx-auto py-8 px-10 md:px-16 rounded-xl">
            <h1 className="text-2xl md:text-4xl mb-2 md:mb-0 font-bold">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <button onClick={() => toast.success('Thank You For Subscribing')} className="btn w-full mt-4 font-bold">Subscribe Now</button>
            </div>
        </div>
    );
};

export default NewsLetter;