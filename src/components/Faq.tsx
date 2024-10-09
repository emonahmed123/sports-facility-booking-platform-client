const Faq = () => {
  return (
    <section className="py-[50px]  md:py-[70px]">
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0 font-Poppis">
        <h1 className="text-center text-[40px] leading-[50px]  lg:text-[50px] lg:leading-[60px]  font-Poppis font-semibold mb-10 text-black">
          Frequently Asked Questions
        </h1>

        <div className="collapse bg-white border-2 border-gray-200 rounded-2xl mb-5">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            How do I booking a Facility?
          </div>
          <div className="collapse-content">
            <p>
              "Simply choose your preferred Facility, select the duration, and
              complete the payment process online. You'll receive a confirmation
              details.
            </p>
          </div>
        </div>
        <div className="collapse bg-white border-2 border-gray-200 rounded-2xl mb-5">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            What are the booking rates?
          </div>
          <div className="collapse-content">
            <p>
              "Simply choose your preferred Facility, select the duration, and
              complete the payment process online. You'll receive a confirmation
              details.
            </p>
          </div>
        </div>
        <div className="collapse bg-white border-2 border-gray-200 rounded-2xl mb-5">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            What are the cancellation policies?
          </div>
          <div className="collapse-content">
            <p>
              "Simply choose your preferred Facility, select the duration, and
              complete the payment process online. You'll receive a confirmation
              details.
            </p>
          </div>
        </div>
        <div className="collapse bg-white border-2 border-gray-200 rounded-2xl mb-5">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            What are the payment options?
          </div>
          <div className="collapse-content">
            <p>
              "We accept various payment methods including credit cards, debit
              cards, and online payment platforms. You can choose the most
              convenient option during the booking process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
