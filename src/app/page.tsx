import Input from '@/components/inputs/input';

export default function Home() {
  return (
    <div className="bg-light-gray h-screen flex sm:items-center sm:px-4">
      <div className="bg-light-gray mx-auto w-full max-w-[375px] sm:max-w-6xl sm:h-[35rem] sm:rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row h-full">
          <div
            className="
              flex pt-10 justify-center gap-4 h-40 object-contain bg-aside-mobile text-white-custom
              sm:h-full sm:flex-col sm:w-64 sm:space-y-4 sm:justify-start sm:px-8 sm:bg-aside-desktop
            "
          >
            <div className="hover:bg-light-blue cursor-pointer transition hover:text-marine-blue flex items-center justify-center border border-white-custom w-10 h-10 rounded-full">
              1
            </div>
            <div className="hover:bg-light-blue cursor-pointer transition hover:text-marine-blue flex items-center justify-center border border-white-custom w-10 h-10 rounded-full">
              2
            </div>
            <div className="hover:bg-light-blue cursor-pointer transition hover:text-marine-blue flex items-center justify-center border border-white-custom w-10 h-10 rounded-full">
              3
            </div>
            <div className="hover:bg-light-blue cursor-pointer transition hover:text-marine-blue flex items-center justify-center border border-white-custom w-10 h-10 rounded-full">
              4
            </div>
          </div>
          <div
            className="
              sm:pt-10 sm:mt-0
              -mt-14 mx-4 rounded-xl bg-white text-marine-blue py-6 px-6
            "
          >
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Personal Info</h1>
              <p className="text-cool-gray leading-relaxed">
                Please provide your name, email address, and phone number.
              </p>
            </div>

            <form className="space-y-2 mt-4">
              <Input label="Name" />
              <Input label="Email Address" />
              <Input label="Phone Number" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
