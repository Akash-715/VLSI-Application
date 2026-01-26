import { useContext, createContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const sendEnquiry = async (formData) => {
        setLoading(true);
        setSuccessMsg("");
        setErrorMsg("");

        const { userName, email, phone, message } = formData;

        // --- VALIDATION ---
        if (!userName || !email || !phone || !message) {
            setErrorMsg("All fields are required.");
            setLoading(false);
            return { ok: false };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMsg("Invalid email address.");
            setLoading(false);
            return { ok: false };
        }

        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            setErrorMsg("Invalid phone number.");
            setLoading(false);
            return { ok: false };
        }

        try {
            // ----- PAYLOAD FOR WEB3FORMS -----
            const payload = {
                access_key: "ffe8fe09-1467-4a3c-a337-cae66a6497c8",
                subject: "New Enquiry from Website",

                from_name: userName,
                from_email: email,

                // Admin email (YOUR inbox)
                email: "akashms7117@gmail.com",

                message: `
          Name: ${userName}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,

                reply_to: email,

                // Auto-response email to user
                autoresponse: `
          Hi ${userName},

          Thank you for contacting SiliconVista!
          We have received your enquiry and will respond shortly.

          Regards,
          SiliconVista Team
        `,
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setSuccessMsg("Enquiry sent successfully.");
                return { ok: true };
            } else {
                setErrorMsg("Failed to send enquiry. Try again.");
                return { ok: false };
            }
        } catch (err) {
            console.error(err);
            setErrorMsg("Network error. Try again later.");
            return { ok: false };
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContactContext.Provider
            value={{ sendEnquiry, loading, successMsg, errorMsg }}
        >
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => useContext(ContactContext);