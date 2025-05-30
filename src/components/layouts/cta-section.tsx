import Button from "../ui/buttons";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#4F7DF3] to-[#3B6BF1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Content */}
        <h2
          data-aos="fade-left"
          data-aos-duration="1500"
          className="text-3xl sm:text-4xl font-Outfit font-bold text-white mb-4"
        >
          Ready to Get Started?
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-xl text-[#FFFFFF] mb-8 font-Outfit font-normal"
        >
          Experience healthcare that fits your schedule
        </p>

        <div data-aos="fade-left" data-aos-duration="1500">
          <Button variant="more" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
