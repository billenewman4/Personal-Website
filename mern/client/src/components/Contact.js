import React, { useState } from "react";

const formElements = [
  { id: "name", type: "text", label: "Name:" },
  { id: "email", type: "email", label: "Email:" },
  { id: "message", type: "textarea", label: "Message:" },
];

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://personal-website-server-390615.uc.r.appspot.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    }).catch(error => {
      console.error('Error:', error);
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-5 bg-gray-900 text-white rounded-lg shadow">
      {formElements.map((element) => (
        <div key={element.id} className="w-full p-5 mb-5 bg-gray-900 text-white rounded-lg shadow">
          <label htmlFor={element.id} className="text-gray-100 font-medium">
            {element.label}
          </label>
          {element.type !== 'textarea' ? (
            <input type={element.type} id={element.id} required className="w-full p-2 mt-2 bg-gray-800 text-white rounded" />
          ) : (
            <textarea id={element.id} required className="w-full p-2 mt-2 bg-gray-800 text-white rounded"/>
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {status}
      </button>
    </form>
  );
};

export default ContactForm;
