export default function Home() {
  return (
    <div className="w-screen h-screen text-marine-blue bg-light-gray flex flex-col">
      <section className="bg-aside-mobile object-contain md:bg-aside-desktop h-48 bg-no-repeat">
        <div className="flex text-white flex-row pt-8 text-sm justify-center space-x-4">
          <div className="px-3 py-1 rounded-full border hover:bg-light-blue hover:text-black transition border-white">
            1
          </div>
          <div className="px-3 py-1 rounded-full border hover:bg-light-blue hover:text-marine-blue transition border-white">
            2
          </div>
          <div className="px-3 py-1 rounded-full border hover:bg-light-blue hover:text-marine-blue transition border-white">
            3
          </div>
          <div className="px-3 py-1 rounded-full border hover:bg-light-blue hover:text-marine-blue transition border-white">
            4
          </div>
        </div>
      </section>

      <div className="flex-1 flex flex-col justify-between">
        <div className="p-4">
          <div className="bg-white py-8 px-6 -mt-[6.8rem] rounded-md">
            <h1 className="text-2xl font-bold">Personal Info</h1>
            <h3 className="text-cool-gray mt-2">
              Please provide your name, email address, and phone number.
            </h3>

            <form className="mt-2 w-full space-y-2">
              <fieldset className="flex flex-col space-y-1">
                <label className="text-sm text-marine-blue">Name</label>
                <input
                  className="border px-3 py-1 rounded-sm placeholder:text-light-gray text-cool-gray"
                  placeholder="e.g. Stephen King"
                />
              </fieldset>

              <fieldset className="flex flex-col space-y-1">
                <label className="text-sm text-marine-blue">
                  Email Address
                </label>
                <input
                  className="border px-3 py-1 rounded-sm placeholder:text-light-gray text-cool-gray"
                  placeholder="e.g. stephenking@lorem.com"
                />
              </fieldset>

              <fieldset className="flex flex-col space-y-1">
                <label className="text-sm text-marine-blue">Phone number</label>
                <input
                  className="border px-3 py-1 rounded-sm placeholder:text-light-gray text-cool-gray"
                  placeholder="e.g. +351 999 000 111"
                />
              </fieldset>
            </form>
          </div>
        </div>

        <div className="bg-white flex justify-end p-4">
          <button className="text-white bg-marine-blue rounded-md py-3 px-4">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
