import Image from "next/image";

 const Features = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-80  relative text-white grid grid-cols-1 lg:gird-cols-8 xl:grid-cols-8 lg:gap-x-8 xl:gap-x-8  2xl:grid-cols-8  2xl:gap-x-8 2xl:gap-y-12 gap-y-9">
            <div className="h-56 w-86 md:h-72 2xl:p-4 2xl:py-px  2xl:h-96 xl:h-[52vh] lg:col-span-4 xl:col-span-4 2xl:col-span-4 border border-[#D9D9D9] rounded-3xl ">
                <h2 className="font-Nunito p-4 text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl w-60 md:w-[25rem] xl:w-[26rem] 2xl:w-[26rem] 2xl:leading-tight tracking-wide leading-snug">
                    Features that you get
                </h2>
                <div className="my-1 xl:py-4 md:py-8 2xl:py-6 px-4">
                    <Image
                        src="/Arrow.svg"
                        className="w-72 xl:w-[30rem] 2xl:w-[26rem]"
                        alt="arrow"
                        width={100}
                        height={100}
                    />

                </div>
                <p className="px-4 text-xs xl:text-base 2xl:text-base md:text-base md:py-10 xl:py-16 2xl:py-20 py-11">Short it, secure it, and let the magic happen!</p>
            </div>

            <div className="font-Nunito md:h-72 lg:col-span-2 2xl:col-span-2 xl:col-span-2 h-56 w-86 xl:h-[52vh] 2xl:h-96  border border-[#D9D9D9] rounded-3xl grid md:justify-center  items-center">
                <div className="my-1 px-4  2xl:my-4 2xl:pr-4 2xl:pl-0 flex flex-col items-center">
                    <Image src="./Analytics.svg"
                        className="w-[2.7rem]"
                        alt="arrow"
                        width={100}
                        height={100}
                    />
                    <p className="w-48 2xl:w-60 text-center text-lg 2xl:text-2xl xl:mt-4 2xl:mt-4">Unlock insights for every shortened link.</p>
                </div>
                <p className="text-sm pl-10 md:pl-0 xl:pl-2 2xl:text-base 2xl:px-4 2xl:pt-24 2xl:mx-[0.6rem] 2xl:w-[17rem] 2xl:text-left w-[20rem] xl:w-[17rem] text-center">See where your links go and who’s clicking, all in one place.</p>
            </div>

            <div className="font-Nunito md:h-72 xl:col-span-2 lg:col-span-2 2xl:col-span-2 h-56 w-86 xl:h-[52vh] 2xl:h-96  border border-[#D9D9D9] rounded-3xl grid  md:justify-center items-center">
                <div className="my-1 px-4 2xl:my-4  2xl:pr-4 2xl:pl-0 flex flex-col items-center">
                    <Image src="./Pencil.svg"
                        className="w-[2.7rem]"
                        alt="arrow"
                        width={100}
                        height={100}
                    />
                    <p className="w-48  2xl:w-60 text-center text-lg 2xl:text-2xl xl:mt-4 2xl:mt-4">Add your own custom twist to every link!</p>
                </div>
                <p className="text-sm pl-10 md:pl-0  xl:pl-2 2xl:text-base 2xl:px-4 2xl:pt-24 2xl:mx-[0.6rem] 2xl:w-[17rem] xl:w-[17rem] w-[20rem] 2xl:text-left text-center">Give each link a name that’s all your own.</p>
            </div>

            <div className="font-Nunito md:h-72 lg:col-span-2 xl:col-span-2 2xl:col-span-2 h-56 w-86 xl:h-[52vh] 2xl:h-96  border border-[#D9D9D9] rounded-3xl grid  md:justify-center items-center">
                <div className="my-1 2xl:my-4 px-4 2xl:pl-0 flex flex-col items-center">
                    <Image src="./Clock.svg"
                        className="w-[3.25rem]"
                        alt="arrow"
                        width={100}
                        height={100}
                    />
                    <p className="w-48 2xl:w-60 text-center text-lg 2xl:text-2xl xl:mt-4 2xl:mt-4">Control how long your links stay active.</p>
                </div>
                <p className="text-sm pl-10 md:pl-0  xl:pl-2 2xl:text-base 2xl:px-4 2xl:pt-24 2xl:mx-[0.6rem] xl:w-[17rem] 2xl:w-[17rem] w-[20rem] 2xl:text-left text-center ">Easily set expiration dates to manage link availability</p>
            </div>

            <div className="relative md:h-72 h-56 w-86 xl:h-[52vh] 2xl:h-96 lg:col-span-2 xl:col-span-4  2xl:col-span-4 border border-[#D9D9D9] rounded-3xl flex items-center justify-center">
                <div className="relative px-4 py-3 lg:py-2 2xl:py-7 bg-[#D9D9D9] h-1/3 w-[92%] text-[#000000] font-Nunito">
                    <h3 className="text-xl md:text-3xl lg:text-2xl 2xl:text-4xl font-black">Wave farewell to long links</h3>
                    <p className="text-sm  md:text-xl lg:text-xl 2xl:text-2xl font-bold">say hello to quick, and click-worthy URLs!</p>
                </div>
                <span className="absolute left-0 bg-white w-4 md:w-8 lg:w-4 xl:w-6 2xl:w-6 h-0.5"></span>
                <span className="absolute right-0 bg-white w-4 md:w-8 lg:w-4 xl:w-6 2xl:w-6 h-0.5"></span>
                <div className="absolute top-7 left-20">
                    <Image src="./solarcloud.svg"
                        className="w-8 md:w-[3rem] lg:w-8 2xl:w-16"
                        alt="cloud"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="absolute top-2 right-20">
                    <Image src="./Cloud2.svg"
                        className="w-8 md:w-[3rem] lg:w-8 2xl:w-16"
                        alt="cloud"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="absolute bottom-2 left-3">
                    <Image src="./house.svg"
                        alt="house"
                        className="w-[3rem] md:w-[4rem] lg:w-[3rem] 2xl:w-[5rem]"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="absolute bottom-7 left-16 md:left-20 lg:left-16 2xl:left-24 2xl:bottom-9">
                    <Image src="./bubble.svg"
                        className="w-5 md:w-7 lg:w-6 2xl:w-8"
                        alt="bubble"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="absolute bottom-8 left-24 md:left-32 lg:left-24 2xl:left-36 2xl:bottom-12">
                    <Image src="./open_package.svg"
                        className="w-6"
                        alt="package"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="absolute bottom-7 left-32 md:left-40 lg:left-32 2xl:left-44 2xl:bottom-11">
                    <Image src="./goingtruck.svg"
                        className="w-7 md:w-8 2xl:w-9"
                        alt="truck"
                        width={100}
                        height={100}
                    />
                    <div className="relative bottom-1">
                        <Image src="./road.svg"
                            className="w-24 md:w-48 lg:w-32 2xl:w-52"
                            alt="road"

                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 right-3">
                    <Image src="./office.svg"
                        className="w-8 md:w-10 lg:w-9 2xl:w-12"
                        alt="office"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="absolute bottom-1 right-12 md:right-16 2xl:right-20">
                    <Image src="./parcel.svg"
                        className="w-5 2xl:w-6"
                        alt="parcel"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="absolute bottom-2 right-24 2xl:right-32">
                    <Image src="./goingtruck.svg"
                        className="scale-x-[-1] w-6 md:w-8 2xl:w-9"
                        alt="truck"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="absolute bottom-2 right-19 md:right-28 2xl:right-18">
                    <Image src="./road.svg"
                        className="w-24 md:w-48 lg:w-32 2xl:w-52"
                        alt="road"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="absolute bottom-2 left-16 md:left-20 2xl:left-24">
                    <Image src="./arrived.svg"
                        className="w-3 2xl:w-4"
                        alt="arrived"
                        width={100}
                        height={100}
                    />
                </div>
            </div>

        </div>
    )
}


export default Features;