import { useState } from "react";

function DeliveryForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        area: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setSubmitted(false);
    }

    const phoneIsValid = /^09\d{8}$/.test(formData.phone);

    function handleSubmit(event) {
        event.preventDefault();

        if (!phoneIsValid) {
            return;
        }

        setSubmitted(true);

        console.log("Delivery details:", formData);
    }

    return (
        <section className="delivery-section">
            <h2>TeleBirr Delivery</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">
                        TeleBirr Phone Number
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="09XXXXXXXX"
                        required
                    />

                    {formData.phone.length > 0 && !phoneIsValid && (
                        <p className="error">
                            Enter a valid TeleBirr number, e.g. 0912345678
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="area">Delivery Area</label>

                    <input
                        id="area"
                        name="area"
                        type="text"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="Enter your area"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={!phoneIsValid}
                >
                    Confirm Delivery
                </button>

                {submitted && (
                    <p className="success">
                        Delivery information submitted successfully!
                    </p>
                )}
            </form>
        </section>
    );
}

export default DeliveryForm;