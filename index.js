const express = require('express');
const JeromeRouter = require('./ForSubPage/AboutJerome');
const FeedbackRouter = require('./ForSubPage/Feedback');
const HomePageRouter = require('./ForSubPage/HomePage');
const WhatHumanRouter = require('./ForSubPage/WhatIsHumanDesign');
const SignUpRouter = require('./ForBookPage/SignUp');
const SignInRouter = require('./ForBookPage/SignIn');
const SaveAndDeleteRouter = require('./ForBookPage/SaveAndDeleteInfo');
// const GetRecordRouter=require('./ForBookPage/GetRecord')
const BookingIttroduceRouter = require('./ForSubPage/BookingIntroduction');
const CheckBookingRouter = require('./ForCheckBooking/CheckBookingAuth');
const LogOutRouter = require('./ForBookPage/LogOut');
const SendEmailRouter = require('./ForSendEmai/SendCheckEmail');
const NotAuthBooking = require('./ForNoAuthBooking/NoAuthBooking');
const NotAuthDelete = require('./ForNoAuthBooking/NoAuthDelet');
const NotAuthSendEmail = require('./ForSendEmai/NotAuthSendEmail');
const ResendPassword = require('./ForBookPage/ResendPassword');
const cors = require('cors');
const sessionMiddleware = require('./Databse/Session');

const app = express();
app.use(sessionMiddleware);
app.use(express.json());

const corsOptions = {
  origin: 'https://shackarbeit.github.io', 
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

// 路由設置
app.use(SignUpRouter);
app.use(SignInRouter);
app.use(SaveAndDeleteRouter);
// app.use(GetRecordRouter);
app.use(JeromeRouter);
app.use(FeedbackRouter);
app.use(HomePageRouter);
app.use(WhatHumanRouter);
app.use(BookingIttroduceRouter);
app.use(LogOutRouter);
app.use(SendEmailRouter);
app.use(CheckBookingRouter);
app.use(NotAuthBooking);
app.use(NotAuthDelete);
app.use(NotAuthSendEmail);
app.use(ResendPassword);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server running at port 8000!');
});
