import React, { useState } from "react";
import "../assets/styles/contact.css";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    preferredDate: "",
    message: "",
    website: "",
};

const OWNER_EMAIL = "praveenkumar06062003@gmail.com";

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");
    const [popup, setPopup] = useState(null);

    const updateField = (event) => {
        setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
        if (status === "error") setStatus("idle");
        setError("");
    };

    const submitInquiry = async (event) => {
        event.preventDefault();
        if (status === "loading") return;

        const requiredFields = [
            ["name", "Please enter your name."],
            ["email", "Please enter your email address."],
            ["phone", "Please enter your phone number."],
            ["sessionType", "Please select a session type."],
            ["preferredDate", "Please select a preferred date."],
            ["message", "Please tell me about your photography plans."],
        ];

        for (const [fieldName, message] of requiredFields) {
            if (!form[fieldName].trim()) {
                setError(message);
                setStatus("error");
                setPopup({ type: "error", message: "Message not send try again" });
                event.currentTarget.elements[fieldName]?.focus();
                return;
            }
        }

        if (form.name.trim().length < 2) {
            setError("Name must contain at least 2 characters.");
            setStatus("error");
            setPopup({ type: "error", message: "Message not send try again" });
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            setError("Please enter a valid email address.");
            setStatus("error");
            setPopup({ type: "error", message: "Message not send try again" });
            return;
        }

        if (!/^[+]?[\d\s().-]{7,20}$/.test(form.phone.trim())) {
            setError("Please enter a valid phone number.");
            setStatus("error");
            setPopup({ type: "error", message: "Message not send try again" });
            return;
        }

        if (form.message.trim().length < 10) {
            setError("Message must contain at least 10 characters.");
            setStatus("error");
            setPopup({ type: "error", message: "Message not send try again" });
            return;
        }

        if (form.website) {
            setStatus("idle");
            return;
        }

        setStatus("loading");
        setError("");

        const emailBody = [
            `Name: ${form.name.trim()}`,
            `Email: ${form.email.trim()}`,
            `Phone: ${form.phone.trim()}`,
            `Session Type: ${form.sessionType}`,
            `Preferred Date: ${form.preferredDate}`,
            "",
            "Message:",
            form.message.trim(),
        ].join("\n");

        const mailtoUrl = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(`Photography inquiry from ${form.name.trim()}`)}&body=${encodeURIComponent(emailBody)}`;

        setForm(initialForm);
        setStatus("success");
        setPopup({
            type: "success",
            message: "Email draft opened successfully! Please send it from your email app.",
        });
        window.location.href = mailtoUrl;
    };

    return (
        <section className="contact-section" aria-labelledby="contact-form-title">
            <div className="contact-layout">
                <div className="contact-form-card">
                    <h2 id="contact-form-title" className="contact-form-title">Let’s Start a Conversation</h2>
                    {status === "success" ? (
                        <div className="contact-success" role="status">
                            <span aria-hidden="true">✦</span>
                            <h3>Your story starts here.</h3>
                            <p>Thank you for reaching out. Please send the opened email draft, and I’ll be in touch within 24 hours.</p>
                            <button type="button" className="contact-reset" onClick={() => setStatus("idle")}>Send another inquiry</button>
                        </div>
                    ) : (
                        <form onSubmit={submitInquiry}>
                            <div className="contact-fields">
                                <label className="contact-field">
                                    <span>Name</span>
                                    <input name="name" type="text" autoComplete="name" placeholder="Your full name" value={form.name} onChange={updateField} required minLength={2} maxLength={100} />
                                </label>
                                <label className="contact-field">
                                    <span>Email</span>
                                    <input name="email" type="email" autoComplete="email" placeholder="hello@example.com" value={form.email} onChange={updateField} required maxLength={254} />
                                </label>
                                <label className="contact-field">
                                    <span>Phone Number</span>
                                    <input name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 123-4567" value={form.phone} onChange={updateField} required pattern="[+]?[0-9\s().-]{7,20}" maxLength={20} />
                                </label>
                                <label className="contact-field">
                                    <span>Session Type</span>
                                    <select name="sessionType" value={form.sessionType} onChange={updateField} required>
                                        <option value="" disabled>Select a session</option>
                                        <option>Wedding</option>
                                        <option>Engagement</option>
                                        <option>Pre-Wedding</option>
                                        <option>Portrait Session</option>
                                        <option>Destination Elopement</option>
                                        <option>Other</option>
                                    </select>
                                </label>
                                <label className="contact-field">
                                    <span>Preferred Date</span>
                                    <input name="preferredDate" type="date" min={new Date().toISOString().slice(0, 10)} value={form.preferredDate} onChange={updateField} required />
                                </label>
                                <label className="contact-field contact-message-field">
                                    <span>Message</span>
                                    <textarea name="message" placeholder="Tell me about your vision..." value={form.message} onChange={updateField} required minLength={10} maxLength={5000} rows={4} />
                                </label>
                                <div className="contact-honeypot" aria-hidden="true">
                                    <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={updateField} /></label>
                                </div>
                            </div>
                            {status === "error" && <p className="contact-error" role="alert">{error}</p>}
                            <button className="contact-submit" type="submit" disabled={status === "loading"}>
                                {status === "loading" ? "SENDING YOUR INQUIRY…" : "START YOUR BOOKING INQUIRY"}
                            </button>
                        </form>
                    )}
                </div>

                <aside className="contact-details">
                    <h2>I’d love to hear from you</h2>
                    <p className="contact-intro">Whether you’re planning an intimate elopement or a grand celebration, I’m here to help you preserve those fleeting moments forever. Let’s create something beautiful together.</p>
                    <div className="contact-divider" />
                    <ul>
                        <li><span aria-hidden="true">◷</span>Replies within 24 hours</li>
                        <li><span aria-hidden="true">✧</span>Destination sessions available</li>
                        <li><span aria-hidden="true">☷</span>Personalized planning included</li>
                    </ul>
                </aside>
            </div>
            {popup && (
                <div className="contact-popup-backdrop" role="presentation" onMouseDown={(event) => {
                    if (event.target === event.currentTarget) setPopup(null);
                }}>
                    <div className={`contact-popup contact-popup-${popup.type}`} role={popup.type === "error" ? "alert" : "status"} aria-live="polite" aria-modal="true">
                        <button type="button" className="contact-popup-close" aria-label="Close message" onClick={() => setPopup(null)}>×</button>
                        <span className="contact-popup-icon" aria-hidden="true">{popup.type === "success" ? "✓" : "!"}</span>
                        <h3>{popup.type === "success" ? "Thank you!" : "Unable to send"}</h3>
                        <p>{popup.message}</p>
                        <button type="button" className="contact-popup-action" onClick={() => setPopup(null)}>
                            {popup.type === "success" ? "Done" : "Try again"}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;


