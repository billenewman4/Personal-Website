const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

const client = new SecretManagerServiceClient();

let gmailUser;
let gmailPass;

async function accessSecretVersion(secretName) {
  const [version] = await client.accessSecretVersion({
    name: `projects/personal-website-server-390615/secrets/${secretName}/versions/latest`,
  });

  const payload = version.payload.data.toString('utf8');

  return payload;
}

Promise.all([accessSecretVersion('Gmail'), accessSecretVersion('gmail_password')])
  .then(([user, pass]) => {
    gmailUser = user;
    gmailPass = pass;

    const contactEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    contactEmail.verify((error) => {
      if (error) {
        console.log(error);
        console.log(contactEmail);
      } else {
        console.log("Ready to Send");
      }
    });

    router.post("/contactServer", (req, res) => {
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message; 
      const mail = {
        from: name,
        to: "15237bn@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Message: ${message}</p>`,
      };
      contactEmail.sendMail(mail, (error) => {
        if (error) {
          res.json({ status: "ERROR" });
        } else {
          res.json({ status: "Message Sent" });
        }
      });
    });

  })
  .catch(console.error);
