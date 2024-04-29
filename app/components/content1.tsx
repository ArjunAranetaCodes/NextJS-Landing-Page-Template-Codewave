import React from "react";

const Content1 = () => {
  return (
    <div className="bg-white sm:px-6 p-4 font-[sans-serif]">
      <div className="max-w-2xl mx-auto">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Explore New Technology Offers
          </h2>
          <p className="text-gray-500 text-sm mt-4">
            At Codewave Technologies, we are constantly exploring the latest
            advancements in technology to bring our clients innovative solutions
            that drive their success. From cutting-edge cloud computing and data
            analytics to AI-powered automation and cybersecurity, our team of
            experts is dedicated to staying ahead of the curve and delivering
            the tools and expertise your business needs to thrive in the digital
            age. Discover how Codewave can help you unlock new opportunities and
            gain a competitive edge in your industry.
          </p>
        </div>
        <hr className="my-10" />
        <div className="grid gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Intelligent Automation
            </h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Leverage the power of AI and machine learning to streamline your
                business processes, boost productivity, and free up your team to
                focus on strategic initiatives.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Predictive Analytics
            </h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Unlock the hidden insights in your data with our advanced
                analytics solutions, empowering you to make data-driven
                decisions that drive growth and profitability.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Cybersecurity Solutions
            </h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Protect your business from evolving cyber threats with our
                comprehensive security suite, ensuring the confidentiality,
                integrity, and availability of your critical data and systems.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Edge Computing</h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Harness the power of edge computing to process data closer to
                the source, reducing latency, improving responsiveness, and
                enabling real-time decision-making for your IoT applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
