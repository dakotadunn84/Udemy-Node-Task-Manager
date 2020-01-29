const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dakotadunn84@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dakotadunn84@gmail.com',
        subject: 'Sorry to see you go!',
        text: `${name}, we're sorry to see you go. Let us know if there's anything we caould have done differently for you.`
    })
}

module.exports = {
    sendWelcomeEmail, sendCancelationEmail
}