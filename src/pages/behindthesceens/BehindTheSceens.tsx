import video from "../../assets/brige.mp4";

const BehindTheSceensPage = () => {
  return (
    <main className="w-100 h-100 text-gray">
      <div className="flex justify-center w-100 h-100">
        <div className="basic-container">
          <section>
            <h1 className="font-20 normal-font pb-2 text-white w-100">
              Behind the sceens
            </h1>
            <div className="pb-2 normal-font font-12">
              <p className="pb-1">
                "The world will not be destroyed by those who do evil, but by
                those who watch them without doing anything." - Albert Einstein
                Planet
              </p>
              <p className="pb-1">
                Earth is 4.5 billion years old. Mankind is about 140 thousand
                years old. If we compress the Earth's existence into a normal
                full day of 24 hours, then we’ve been on this planet for... 2.5
                seconds. In 2.5 seconds we’ve become the dominant species with a
                rapidly growing population, causing a catastrophic impact on the
                environment. We have created the industrial revolution and
                burned fossil fuels creating more carbon in the atmosphere than
                ever before. We have caused global warming at a record pace,
                endangering our own existence.
              </p>
              <p className="pb-1">
                We have cut trees and destroyed forests more than ever before,
                polluted air, water, and soil. We have created an island of
                waste, the size of the state of Texas, in the middle of the
                ocean. We have caused the 4th mass animal extinction.
                Three-quarters of Earth’s land surface is under pressure from
                human activity. In just 2.5 seconds we’ve turned the planet into
                our own personal factory. It took almost 4.5 billion years of
                evolution for us to exist and we have changed so much in so
                little time. The problem is us. And it is up to us if we want to
                make it to 3 seconds.
              </p>
              <video className="w-100 mb-1" controls preload="auto" title="Behind the scenes video with environmental message">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export { BehindTheSceensPage };
