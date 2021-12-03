import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const password = req.body.password;
  const { db } = await connectToDatabase();
  try {
    await db.collection("users").insertOne({ _id: id, name, password, X: [], XII: [] });
    res.json({ isAccountCreated:true });
  } catch (error) {
    res.json({ isAccountCreated:false });
  }
};
