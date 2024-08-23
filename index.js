import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

//DB Init
const db = new pg.Client({
  database: "taskflow",
  user:"your_database_user",
  password: "your_database_password",
  host:"localhost",
  port:5432
})
db.connect((err)=>{
  if(err){
    console.log("Error Connecting to Database, check your credentials")
  }
  else{
    console.log("Database Connected")
  }
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = []

app.get("/", async (req, res) => {
  const response = await db.query("SELECT * FROM items")
  items = response.rows
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items(title) VALUES ($1)",[item], (err,result)=>{
    if (err){
      console.error("Error Inserting Data")
    }else if(result){
      console.log("Data Inserted Successfully")
    }
  });
  items.push({ title: item });

  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
