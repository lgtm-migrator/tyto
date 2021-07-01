import errorHandler from "errorhandler";
import app from "./app";
import Routes from "./Routes";

// use Routes
Routes(app);

// Error Handler. Provides full stack - remove for production
app.use(errorHandler());

// Start Express server.
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

export default server;