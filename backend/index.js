import e from "express";

const headers = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
  return res;
};

const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(headers);

app.get("/post", (req, res) => {
  res.status(200).json({
    name: "hello ",
  });
});

app.listen(4000, () => {
  console.log("App is running on port 4000");
});
