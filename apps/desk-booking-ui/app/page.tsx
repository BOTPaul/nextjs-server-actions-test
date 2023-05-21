import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-20 bg-background text-surface dark:bg-backgroundDark dark:text-surfaceDark lg:h-[512px]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:max-w-screen-lg lg:m-auto m-8">
          <div>
            <h1 className="text-5xl py-8 text-accent">desk.bookit</h1>
            <p className="text-xl">
              Effortless desk booking for your modern workspaces
            </p>
          </div>
          <Image
            alt="Illustration of a person sitting at a desk with a laptop"
            src="person-at-desk.svg"
            width="800"
            height="700"
          />
        </div>
      </section>
      <section className="py-20 bg-backgroundDark text-surfaceDark dark:bg-background dark:text-surface lg:h-[512px]">
        <div className="flex flex-col lg:flex-row h-full justify-between items-center lg:max-w-screen-lg lg:m-auto m-8 gap-8">
          <div className="flex-auto h-4/5 min-w-[30%] border-surfaceDark dark:border-primary border-dashed border-2 rounded-lg py-8 px-4 flex flex-col justify-around gap-4">
            <h2 className="text-3xl text-accent text-center">
              Seamless Booking Process
            </h2>
            <p className="text-lg">
              Easily reserve a desk in your workspace with just a few clicks.
              Our intuitive interface ensures a hassle-free booking experience.
            </p>
          </div>
          <div className="flex-auto h-full min-w-[30%] border-surfaceDark dark:border-primary border-dashed border-2 rounded-lg py-8 px-4 flex flex-col justify-around gap-4">
            <h2 className="text-3xl text-accent text-center">
              Flexible Desk Selection
            </h2>
            <p className="text-lg">
              Choose from a variety of available desks based on your
              preferences, including location, amenities, and seating
              arrangements. Find the perfect workspace for your needs.
            </p>
          </div>
          <div className="flex-auto h-4/5 min-w-[30%] border-surfaceDark dark:border-primary border-dashed border-2 rounded-lg py-8 px-4 flex flex-col justify-around gap-4">
            <h2 className="text-3xl text-accent text-center">
              Real-time Availability Updates
            </h2>
            <p className="text-lg">
              Stay informed about desk availability in real-time. Our app
              provides up-to-date information on desk occupancy, allowing you to
              plan effectively.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background text-surface dark:bg-backgroundDark dark:text-surfaceDark lg:h-[512px]">
        <div className="flex flex-col h-full items-center lg:max-w-screen-lg lg:m-auto m-8 gap-8">
          <h1 className="text-4xl">Ready to begin?</h1>
          <Link
            href="/locations"
            className="text-6xl text-accent underline underline-offset-8"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
