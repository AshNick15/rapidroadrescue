document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("https://your-backend-endpoint.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("responseMessage").innerText =
          "Message sent successfully!";
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        document.getElementById("responseMessage").innerText =
          "Error sending message. Please try again later.";
      });
  });
