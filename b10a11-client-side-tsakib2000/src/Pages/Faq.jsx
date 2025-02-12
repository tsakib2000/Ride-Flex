

const Faq = () => {
 
    return (
<div className="max-w-3xl mx-auto my-10 p-6 bg-base-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center  mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title text-lg font-medium">How do I book a car?</div>
          <div className="collapse-content">
            <p>Simply select a car from our available listings, choose your rental period, and complete the booking process online.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-medium">What documents do I need?</div>
          <div className="collapse-content">
            <p>You will need a valid driver’s license, national ID or passport, and a payment method.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-medium">Is there a deposit required?</div>
          <div className="collapse-content">
            <p>Yes, a refundable security deposit is required at the time of booking.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-medium">Can I cancel my booking?</div>
          <div className="collapse-content">
            <p>Yes, you can cancel your booking up to 24 hours before your pickup time without any charges.</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Faq;