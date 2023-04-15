import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
// import helmet from "helmet";
// import nocache from "nocache";
import { messagesRouter } from "./messages/messages.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import { questionsRouter } from "./questions/questions.router";
const path = require('path');

dotenv.config();

if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
  throw new Error(
    "Missing required environment variables. Check docs for more info."
  );
}

const PORT = parseInt(process.env.PORT, 10);
const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;
// create express app
const app = express();

// Set up request parsing to add json to body object
app.use(express.json());

// Set json responses to have 2 spaces
app.set("json spaces", 2);

// Create and set up API router
const apiRouter = express.Router();
app.use("/api", apiRouter);
apiRouter.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});

// Create and setup static router
const staticRouter = express.Router();
app.use('/', staticRouter);

// Set up API routes
apiRouter.use("/messages", messagesRouter);
apiRouter.use("/questions", questionsRouter);


// Set up Static routes
staticRouter.use(express.static(path.join(__dirname, '../public')));
staticRouter.use('*', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

// staticRouter.get('*', function (req, res) {
//   res.sendfile('index.html', { root: path.join(__dirname, '../../knowledge-insights-frontend/dist/knowledge-insights-frontend') });
// });

// app.use(
//   helmet({
//     hsts: {
//       maxAge: 31536000,
//     },
//     contentSecurityPolicy: {
//       useDefaults: false,
//       directives: {
//         "default-src": ["'none'"],
//         "frame-ancestors": ["'none'"],
//       },
//     },
//     frameguard: {
//       action: "deny",
//     },
//   })
// );

//This works only for root
// app.use('/', express.static(path.join(__dirname, '../../knowledge-insights-frontend/dist/knowledge-insights-frontend')));

// or this

 






// app.use(nocache());

app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ["GET","POST"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
    
  })
);



// app.use(express.static(path.join(__dirname, '../../knowledge-insights-frontend/dist/knowledge-insights-frontend')));




app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
