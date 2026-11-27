import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
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

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "0d38119a-b2ef-4818-aff3-84c948b17de3";

const contactFieldContainerVariants = {
    hidden: {},
    visible: { transition: { delayChildren: 0.08, staggerChildren: 0.065 } },
};

const contactFieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
};

const Contact = () => {
    const shouldReduceMotion = useReducedMotion();
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

        const formElement = event.currentTarget;
        const formData = new FormData(formElement);

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

        if (String(formData.get("website") || "").trim()) {
            setStatus("idle");
            return;
        }

        setStatus("loading");
        setError("");
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: "POST",
                body: formData,
            });
            const result = await response.json().catch(() => null);

            if (!response.ok || result?.success !== true) {
                throw new Error(result?.message || "We couldn't send your inquiry. Please try again.");
            }

            setForm(initialForm);
            formElement.reset();
            setStatus("success");
            setPopup({
                type: "success",
                message: "Your inquiry has been sent successfully. I’ll be in touch within 24 hours.",
            });
        } catch (submissionError) {
            const message = submissionError instanceof TypeError
                ? "A network error prevented your inquiry from being sent. Check your connection and try again."
                : submissionError.message;

            setError(message);
            setStatus("error");
            setPopup({ type: "error", message });
        }
    };

    return (
        <section className="contact-section" aria-labelledby="contact-form-title">
            <div className="contact-layout">
                <motion.div
                    className="contact-form-card"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 id="contact-form-title" className="contact-form-title section-title">Let’s Start a Conversation</h2>
                    {status === "success" ? (
                        <div className="contact-success" role="status">
                            <span aria-hidden="true">✦</span>
                            <h3>Your story starts here.</h3>
                            <p>Thank you for reaching out. I’ll be in touch within 24 hours.</p>
                            <button type="button" className="contact-reset" onClick={() => setStatus("idle")}>Send another inquiry</button>
                        </div>
                    ) : (
                        <form onSubmit={submitInquiry}>
                            <motion.div
                                className="contact-fields"
                                variants={contactFieldContainerVariants}
                                initial={shouldReduceMotion ? false : "hidden"}
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <motion.label className="contact-field" variants={contactFieldVariants}>
                                    <span>Name</span>
                                    <input name="name" type="text" autoComplete="name" placeholder="Your full name" value={form.name} onChange={updateField} required minLength={2} maxLength={100} />
                                </motion.label>
                                <motion.label className="contact-field" variants={contactFieldVariants}>
                                    <span>Email</span>
                                    <input name="email" type="email" autoComplete="email" placeholder="hello@example.com" value={form.email} onChange={updateField} required maxLength={254} />
                                </motion.label>
                                <motion.label className="contact-field" variants={contactFieldVariants}>
                                    <span>Phone Number</span>
                                    <input name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 123-4567" value={form.phone} onChange={updateField} required pattern="[+]?[0-9\s().-]{7,20}" maxLength={20} />
                                </motion.label>
                                <motion.label className="contact-field" variants={contactFieldVariants}>
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
                                </motion.label>
                                <motion.label className="contact-field" variants={contactFieldVariants}>
                                    <span>Preferred Date</span>
                                    <input name="preferredDate" type="date" min={new Date().toISOString().slice(0, 10)} value={form.preferredDate} onChange={updateField} required />
                                </motion.label>
                                <motion.label className="contact-field contact-message-field" variants={contactFieldVariants}>
                                    <span>Message</span>
                                    <textarea name="message" placeholder="Tell me about your vision..." value={form.message} onChange={updateField} required minLength={10} maxLength={5000} rows={4} />
                                </motion.label>
                                <div className="contact-honeypot" aria-hidden="true">
                                    <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={updateField} /></label>
                                </div>
                            </motion.div>
                            {status === "error" && <p className="contact-error" role="alert">{error}</p>}
                            <motion.button
                                className="contact-submit"
                                type="submit"
                                disabled={status === "loading"}
                                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                            >
                                {status === "loading" ? "SENDING YOUR INQUIRY…" : "START YOUR BOOKING INQUIRY"}
                            </motion.button>
                        </form>
                    )}
                </motion.div>

                <motion.aside
                    className="contact-details"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="section-title">I’d love to hear from you</h2>
                    <p className="contact-intro">Whether you’re planning an intimate elopement or a grand celebration, I’m here to help you preserve those fleeting moments forever. Let’s create something beautiful together.</p>
                    <div className="contact-divider" />
                    <ul>
                        <li><span aria-hidden="true">◷</span>Replies within 24 hours</li>
                        <li><span aria-hidden="true">✧</span>Destination sessions available</li>
                        <li><span aria-hidden="true">☷</span>Personalized planning included</li>
                    </ul>
                </motion.aside>
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


